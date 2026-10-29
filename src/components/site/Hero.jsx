import { motion } from "framer-motion";
import { ChevronRight, Sparkle } from "lucide-react";
import { EASE, scrollToId } from "./FadeIn";
import { PROFILE } from "../../data/profile";

const up = (d) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, ease: EASE, delay: d } });

export const Hero = () => (
  <section id="top" data-testid="hero-section" className="relative min-h-[72vh] flex items-center pt-28 pb-20 sm:pb-28 text-center bg-[#F8F3EA] overflow-hidden">
    <motion.span
      aria-hidden="true"
      className="absolute top-[22%] left-[10%] text-[#D4A24C] hidden sm:block"
      animate={{ rotate: 360 }}
      transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
    >
      <Sparkle size={34} strokeWidth={1.4} />
    </motion.span>
    <motion.span
      aria-hidden="true"
      className="absolute bottom-[20%] right-[12%] text-[#8B2E3C]/70 hidden sm:block"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <Sparkle size={22} strokeWidth={1.4} />
    </motion.span>
    <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
      <motion.p {...up(0.05)} className="text-base sm:text-lg font-medium text-[#6E6157]">Product Manager · Health Tech · {PROFILE.location}</motion.p>
      <motion.h1 {...up(0.15)} data-testid="hero-title" className="font-display mt-3 text-5xl sm:text-7xl lg:text-8xl font-medium tracking-[-0.03em] text-[#2B2420] leading-[1.02]">
        <a data-testid="hero-linkedin-link" href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#8B2E3C] transition-colors">
          Shravani <em className="italic text-[#26392E]">Karry</em>
        </a>
      </motion.h1>
      <motion.p {...up(0.3)} data-testid="hero-intro" className="mt-6 mx-auto max-w-3xl text-xl sm:text-3xl leading-snug text-[#4A3F38]">{PROFILE.intro}</motion.p>
      <motion.p {...up(0.4)} data-testid="hero-journey" className="font-display italic mt-4 mx-auto max-w-2xl text-lg sm:text-2xl text-[#8B2E3C]">{PROFILE.journey}</motion.p>
      <motion.div {...up(0.55)} className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        <a data-testid="hero-download-cv-button" href={PROFILE.cv} download className="rounded-full bg-[#8B2E3C] hover:bg-[#74242F] text-[#F8F3EA] text-base px-6 py-3 transition-colors">
          Download CV
        </a>
        <button data-testid="hero-see-story-button" onClick={() => scrollToId("story")} className="group inline-flex items-center gap-1 text-base sm:text-lg text-[#26392E] hover:underline">
          Read my story <ChevronRight size={18} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </motion.div>
    </div>
  </section>
);
