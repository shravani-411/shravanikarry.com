import { FadeIn, SectionTitle } from "./FadeIn";
import { COMPANIES, TOOLS } from "../../data/profile";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const parse = (s) => {
  if (!s || s === "Present") { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), 1); }
  const [m, y] = s.split(" ");
  return new Date(Number(y), MONTHS.indexOf(m), 1);
};
const span = (start, end) => {
  const a = parse(start), b = parse(end);
  const months = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth()) + 1;
  const y = Math.floor(months / 12), m = months % 12;
  return [y ? `${y} yr${y > 1 ? "s" : ""}` : null, m ? `${m} mo${m > 1 ? "s" : ""}` : null].filter(Boolean).join(" ");
};

const Bullets = ({ points }) => (
  <ul className="mt-3 space-y-3">
    {points.map((p) => (
      <li key={p} className="flex gap-3 text-base text-[#4A3F38] leading-relaxed">
        <span className="mt-2.5 h-1 w-1 rounded-full bg-[#2B2420] shrink-0" />
        <span>{p}</span>
      </li>
    ))}
  </ul>
);

const Role = ({ r, ladder }) => (
  <div data-testid={`role-${r.title.toLowerCase().replace(/\s+/g, "-")}`} className={`relative ${ladder ? "pl-8 pb-10 last:pb-0" : ""}`}>
    {ladder && <span className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#2B2420]/25 ring-4 ring-[#EFE6D6]" />}
    <h4 className="text-xl font-semibold tracking-tight text-[#2B2420]">{r.title}</h4>
    <p className="mt-0.5 text-sm text-[#6E6157]">{r.start} — {r.end} · {span(r.start, r.end)}</p>
    <Bullets points={r.points} />
  </div>
);

export const Experience = () => (
  <section id="experience" data-testid="experience-section" className="bg-[#EFE6D6] py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <SectionTitle>Experience.</SectionTitle>
      <div className="border-t border-black/10">
        {COMPANIES.map((c, i) => {
          const first = c.roles[c.roles.length - 1], last = c.roles[0];
          const ladder = c.roles.length > 1;
          return (
            <FadeIn key={c.company} delay={i * 0.05} data-testid={`company-${i}`} className="grid md:grid-cols-12 gap-3 md:gap-8 py-10 border-b border-black/10">
              <div className="md:col-span-4">
                <h3 className="text-2xl font-semibold tracking-tight text-[#2B2420]">{c.company}</h3>
                <p className="mt-1 text-sm text-[#6E6157]">{first.start} — {last.end} · {span(first.start, last.end)}</p>
                <p className="text-base text-[#6E6157]">{c.place}</p>
              </div>
              <div className="md:col-span-8 relative">
                {ladder && <span aria-hidden="true" className="absolute left-[5px] top-3 bottom-3 w-px bg-[#2B2420]/15" />}
                {c.roles.map((r) => <Role key={r.title} r={r} ladder={ladder} />)}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  </section>
);

export const Tools = () => (
  <section id="tools" data-testid="tools-section" className="bg-[#F8F3EA] py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <SectionTitle>Tools.</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {TOOLS.map((t, i) => (
          <FadeIn key={t.group} delay={i * 0.05} data-testid={`tools-${t.group.toLowerCase()}`}>
            <h3 className="text-sm font-semibold text-[#2B2420]">{t.group}</h3>
            <p className="mt-2 text-base text-[#6E6157] leading-relaxed">{t.items}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
