import { ChevronDown } from "lucide-react";
import { FadeIn, scrollToId } from "./FadeIn";
import { STORY } from "../../data/profile";

const Stop = ({ s, i }) => (
  <FadeIn delay={i * 0.12} data-testid={`story-stop-${i}`} className="relative pl-10 sm:pl-14 pb-14 last:pb-0">
    <span className={`absolute left-0 top-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-[3px] border-[#F8F3EA] ${s.dot}`} />
    <p className="text-sm font-medium text-[#6E6157]">{s.period} · {s.role}</p>
    <h3 className="font-display mt-1 text-3xl sm:text-5xl font-medium italic tracking-[-0.02em] text-[#2B2420]">{s.word}</h3>
    <p className="mt-3 text-lg sm:text-xl text-[#4A3F38] max-w-xl leading-snug">{s.line}</p>
    <p className="mt-4 inline-flex items-baseline gap-2 rounded-full bg-[#EFE6D6] px-4 py-1.5">
      <span className="font-display text-xl font-semibold text-[#2B2420]">{s.number}</span>
      <span className="text-sm text-[#6E6157]">{s.numberLabel}</span>
    </p>
  </FadeIn>
);

export const Story = () => (
  <section id="story" data-testid="story-section" className="bg-[#F8F3EA] py-24 sm:py-32">
    <div className="max-w-4xl mx-auto px-5 sm:px-8">
      <FadeIn>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2E3C]">My story</p>
        <h2 className="font-display mt-3 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] text-[#2B2420] leading-[1.05]">
          I wanted to do everything that's possible across a company.
        </h2>
      </FadeIn>
      <div className="relative mt-14 sm:mt-20">
        <span aria-hidden="true" className="absolute left-[9px] sm:left-[11px] top-2 bottom-2 w-px bg-[#2B2420]/15" />
        {STORY.map((s, i) => <Stop key={s.role} s={s} i={i} />)}
      </div>
      <FadeIn className="mt-16 sm:mt-20">
        <button data-testid="story-to-work-button" onClick={() => scrollToId("work")} className="group inline-flex items-center gap-2 font-display italic text-2xl sm:text-3xl text-[#26392E]">
          Here's what I've built since.
          <ChevronDown size={24} className="transition-transform group-hover:translate-y-1" />
        </button>
      </FadeIn>
    </div>
  </section>
);
