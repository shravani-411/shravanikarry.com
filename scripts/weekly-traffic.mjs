// Weekly GA4 traffic report. No dependencies (Node 20+).
// Env: GA_PROPERTY_ID (numeric property ID), GA_SA_KEY (service account JSON).
// Prints a Markdown report comparing the last 7 days with the 7 days before.
import crypto from "node:crypto";

const propertyId = process.env.GA_PROPERTY_ID;
const key = JSON.parse(process.env.GA_SA_KEY || "null");
if (!propertyId || !key) {
  console.error("Set GA_PROPERTY_ID and GA_SA_KEY.");
  process.exit(1);
}

const b64url = (v) => Buffer.from(v).toString("base64url");

async function getToken() {
  const now = Math.floor(Date.now() / 1000);
  const head = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(JSON.stringify({
    iss: key.client_email,
    scope: "https://www.googleapis.com/auth/analytics.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  }));
  const sig = crypto.createSign("RSA-SHA256").update(`${head}.${claims}`).sign(key.private_key, "base64url");
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${head}.${claims}.${sig}`,
    }),
  });
  if (!res.ok) throw new Error(`Token request failed: ${res.status} ${await res.text()}`);
  return (await res.json()).access_token;
}

const token = await getToken();
const THIS = { startDate: "7daysAgo", endDate: "yesterday" };
const PREV = { startDate: "14daysAgo", endDate: "8daysAgo" };

async function report(range, metrics, dimensions = [], limit = 10, extra = {}) {
  const res = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      dateRanges: [range],
      metrics: metrics.map((name) => ({ name })),
      dimensions: dimensions.map((name) => ({ name })),
      orderBys: dimensions.length ? [{ metric: { metricName: metrics[0] }, desc: true }] : undefined,
      limit,
      ...extra,
    }),
  });
  if (!res.ok) throw new Error(`runReport failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  return (data.rows || []).map((r) => ({
    dims: (r.dimensionValues || []).map((d) => d.value),
    vals: r.metricValues.map((m) => Number(m.value)),
  }));
}

const totalsMetrics = ["activeUsers", "newUsers", "sessions", "screenPageViews", "engagementRate", "averageSessionDuration"];
const [cur, prev] = await Promise.all([report(THIS, totalsMetrics), report(PREV, totalsMetrics)]);
const c = cur[0]?.vals || totalsMetrics.map(() => 0);
const p = prev[0]?.vals || totalsMetrics.map(() => 0);

const [sources, countries, devices, daily, events] = await Promise.all([
  report(THIS, ["sessions", "activeUsers"], ["sessionSourceMedium"], 8),
  report(THIS, ["activeUsers"], ["country"], 8),
  report(THIS, ["activeUsers"], ["deviceCategory"], 5),
  report(THIS, ["activeUsers", "sessions"], ["date"], 7, { orderBys: [{ dimension: { dimensionName: "date" } }] }),
  report(THIS, ["eventCount"], ["eventName", "linkUrl"], 10, {
    dimensionFilter: { filter: { fieldName: "eventName", inListFilter: { values: ["file_download", "click"] } } },
  }),
]);

const fmt = (v, i) => {
  if (totalsMetrics[i] === "engagementRate") return `${(v * 100).toFixed(1)}%`;
  if (totalsMetrics[i] === "averageSessionDuration") return `${Math.floor(v / 60)}m ${Math.round(v % 60)}s`;
  return Math.round(v).toLocaleString("en-US");
};
const delta = (a, b) => (b === 0 ? (a === 0 ? "–" : "new") : `${a >= b ? "▲" : "▼"} ${Math.abs(((a - b) / b) * 100).toFixed(0)}%`);
const labels = ["Visitors", "New visitors", "Sessions", "Page views", "Engagement rate", "Avg. session"];
const table = (head, rows) => rows.length
  ? [`| ${head.join(" | ")} |`, `| ${head.map(() => "---").join(" | ")} |`, ...rows.map((r) => `| ${r.join(" | ")} |`)].join("\n")
  : "_No data this week._";

const day = (s) => new Date(`${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6)}T00:00:00Z`)
  .toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", timeZone: "UTC" });

const out = [
  `## Weekly traffic: shravanikarry.com`,
  `Last 7 days (through yesterday) compared with the 7 days before.`,
  ``,
  table(["Metric", "This week", "Last week", "Change"], labels.map((l, i) => [l, fmt(c[i], i), fmt(p[i], i), delta(c[i], p[i])])),
  ``,
  `### Visitors by day`,
  table(["Day", "Visitors", "Sessions"], daily.map((r) => [day(r.dims[0]), r.vals[0], r.vals[1]])),
  ``,
  `### Where visitors came from`,
  table(["Source / medium", "Sessions", "Visitors"], sources.map((r) => [r.dims[0], r.vals[0], r.vals[1]])),
  ``,
  `### Countries`,
  table(["Country", "Visitors"], countries.map((r) => [r.dims[0], r.vals[0]])),
  ``,
  `### Devices`,
  table(["Device", "Visitors"], devices.map((r) => [r.dims[0], r.vals[0]])),
  ``,
  `### CV downloads and outbound clicks`,
  table(["Event", "Link", "Count"], events.map((r) => [r.dims[0] === "file_download" ? "Download" : "Outbound click", r.dims[1] || "(not set)", r.vals[0]])),
];
console.log(out.join("\n"));
