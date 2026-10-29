import { FadeIn, SectionTitle } from "./FadeIn";
import { ROLES, TOOLS } from "../../data/profile";

export const Experience = () => (
  <section id="experience" data-testid="experience-section" className="bg-[#EFE6D6] py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <SectionTitle>Experience.</SectionTitle>
      <div className="border-t border-black/10">
        {ROLES.map((r, i) => (
          <FadeIn key={r.title} delay={i * 0.05} data-testid={`role-${i}`} className="grid md:grid-cols-12 gap-3 md:gap-8 py-10 border-b border-black/10">
            <div className="md:col-span-4">
              <p className="text-sm text-[#6E6157]">{r.period}</p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[#2B2420]">{r.title}</h3>
              <p className="text-base text-[#6E6157]">{r.company} · {r.place}</p>
            </div>
            <ul className="md:col-span-8 space-y-3">
              {r.points.map((p) => (
                <li key={p} className="flex gap-3 text-base text-[#4A3F38] leading-relaxed">
                  <span className="mt-2.5 h-1 w-1 rounded-full bg-[#2B2420] shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
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
