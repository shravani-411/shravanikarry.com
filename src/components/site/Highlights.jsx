import { FadeIn } from "./FadeIn";
import { HIGHLIGHTS } from "../../data/profile";

export const Highlights = () => (
  <section data-testid="highlights-section" className="bg-[#EFE6D6] py-20 sm:py-28">
    <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
      {HIGHLIGHTS.map((h, i) => (
        <FadeIn key={h.label} delay={i * 0.08} data-testid={`highlight-${i}`}>
          <p className="text-5xl sm:text-6xl font-semibold tracking-[-0.04em] text-[#2B2420]">{h.value}</p>
          <p className="mt-3 text-sm sm:text-base text-[#6E6157] leading-snug max-w-[16rem]">{h.label}</p>
        </FadeIn>
      ))}
    </div>
  </section>
);
