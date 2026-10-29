export const PROFILE = {
  name: "Shravani Karry",
  role: "Product Manager",
  email: "shravani.kvnks@gmail.com",
  phone: "+91 99624 37235",
  phoneHref: "tel:+919962437235",
  linkedin: "https://www.linkedin.com/in/shrash/",
  location: "Bengaluru, India",
  cv: "/Shravani-Karry-CV.pdf",
  intro: "I build products that simplify people's lives and genuinely make them better.",
  journey: "I have told the story, run the machine, and now I build the thing.",
};

export const STORY = [
  {
    role: "Product Manager, Ultrahuman", period: "Apr 2025 — now", word: "Home.", dot: "bg-[#26392E]",
    line: "Building products that really make a difference in people's lives.",
    number: "1 in 2", numberLabel: "ring orders are Ring PRO",
  },
  {
    role: "Program Manager, Ultrahuman", period: "May 2024 — Apr 2025", word: "Making it run.", dot: "bg-[#D4A24C]",
    line: "Payments, support and quality behind the products.",
    number: "14,000", numberLabel: "orders through the HSA/FSA checkout",
  },
  {
    role: "Marketing Manager, Ultrahuman", period: "Apr 2022 — Feb 2024", word: "Telling the story.", dot: "bg-[#8B2E3C]",
    line: "Learning what makes people care.",
    number: "20,477", numberLabel: "rings sold over Black Friday 2024",
  },
];

export const ORIGIN = "I hail from Visakhapatnam and grew up between Chennai and Mumbai, which is my excuse for bragging about how many languages I speak.";
export const HOBBIES = [
  { id: "moving", name: "Moving", line: "I lift heavy for a woman and average for a man. I am learning to love running, for my heart. If I am not doing one of the other three, I am at the gym.", tone: "bg-[#F8F3EA] text-[#2B2420]" },
  { id: "reading", name: "Reading", line: "Thrillers, horror, stoicism, astrophysics, and true crime about serial killers.", tone: "bg-[#26392E] text-[#F8F3EA]" },
  { id: "singing", name: "Singing", line: "I listen to everything from Carnatic to death metal. When I sing, only the Carnatic gets any justice.", tone: "bg-[#8B2E3C] text-[#F8F3EA]" },
  { id: "sketching", name: "Sketching", line: "Scenes, sceneries, whatever is in front of me. My father designs structures for a living, so the instinct was inherited.", tone: "bg-[#D4A24C] text-[#2B2420]" },
];

export const HIGHLIGHTS = [
  { value: "50%", label: "Over half of all ring orders since launch are Ring PRO" },
  { value: "45%", label: "of India web ring orders choose fast delivery" },
  { value: "29%", label: "of UK/EU web checkout revenue runs through Apple Pay" },
  { value: "4×", label: "monthly Home orders after the page rebuild" },
];

export const COMPANIES = [{
  company: "Ultrahuman",
  place: "Bengaluru, India",
  roles: [{
    title: "Product Manager",
    start: "Apr 2025",
    end: "Present",
    points: ["Partner products: HealthEx medical records, BetterHelp therapy, Clue Plus, Luminary, Walmart gift sizing kits.", "New capabilities: Ring PRO launch, Photon, Web Campaign Engine, Best Buy in-store pickup, Home page rebuild, referral rebuild, gifting.", "Growth levers: fast delivery, trade-in, verified-identity discounts, native-currency checkout, Apple Pay, COD, HSA/FSA.", "Device experience: battery and firmware fixes, dead-on-arrival recovery in Canada."]
  }, {
    title: "Program Manager",
    start: "May 2024",
    end: "Apr 2025",
    points: ["HSA/FSA payments: $5.9M across 14,000 orders. Moved to a cheaper processor (fee 8.5% to 3.5%), ~$295K saved.", "Hired ~40 agency support agents across three vendors in three months, with contract SLAs and a quality scoreboard.", "Quality management system (ISO 13485, FDA 21 CFR 820). ~$23K renewal fee negotiated to zero.", "Global transit insurance on every shipment lane, placed with Tata AIG. Shipments had no cover before."]
  }, {
    title: "Marketing Manager",
    start: "Apr 2022",
    end: "Feb 2024",
    points: ["Black Friday 2024: $7.7M across all channels and 20,477 rings; $4.26M through web, app, comms and blog.", "Diwali 2024 (India, 7 days): $61.4K website revenue, daily run rate ~75% above base.", "Migrated 1,500 blog articles to a new site with an external agency and a team of writers.", "Amazon India and UAE brand stores, listings and A+ content."]
  }]
}, {
  company: "Gemraj Technologies",
  place: "Essex, UK",
  roles: [{
    title: "Digital Marketing Executive",
    start: "Feb 2021",
    end: "Apr 2022",
    points: ["Led SEO and the website revamp: organic traffic +60%, bounce rate -50%.", "Email: +15% open rate, +10% click rate. 7+ Google Ads campaigns, 3+ joint partner campaigns."]
  }]
}];
export const TOOLS = [
  { group: "Data", items: "SQL, Snowflake, Metabase, Mixpanel, Google Analytics, Sheets" },
  { group: "Platforms", items: "FHIR R4, REST & GraphQL APIs, Shopify (Admin & Storefront API, CLI), Stripe, Flex, RevenueCat, impact.com" },
  { group: "AI", items: "Claude, Claude Code (MCP servers), ChatGPT, Lovable" },
  { group: "Methods", items: "A/B testing, event instrumentation, cohort & funnel analysis, PRDs & API specs" },
  { group: "Product", items: "Notion, Figma, GitHub, Slack, Kustomer, Typeform" },
  { group: "Marketing", items: "MailChimp, SendGrid, Google Ads, HotJar" },
];

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "partner", label: "Partner products" },
  { id: "capability", label: "New capabilities" },
  { id: "growth", label: "Growth levers" },
  { id: "hardware", label: "Device experience" },
];
