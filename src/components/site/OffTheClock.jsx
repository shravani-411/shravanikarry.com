import { motion } from "framer-motion";
import { BookOpen, Mic2, PenTool, Footprints } from "lucide-react";
import { FadeIn, SectionTitle } from "./FadeIn";
import { HOBBIES } from "../../data/profile";

const ICONS = { reading: BookOpen, singing: Mic2, sketching: PenTool, moving: Footprints };

export const OffTheClock = () => (
  <section id="off-the-clock" data-testid="off-the-clock-section" className="bg-[#EFE6D6] py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <SectionTitle sub="What keeps me curious and happy outside work.">Off the clock.</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {HOBBIES.map((h, i) => {
          const Icon = ICONS[h.id];
          return (
            <FadeIn key={h.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, rotate: i % 2 ? 1 : -1 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                data-testid={`hobby-${h.id}`}
                className={`h-full min-h-[260px] rounded-[28px] p-7 flex flex-col ${h.tone}`}
              >
                <span className="grid place-items-center w-12 h-12 rounded-full bg-black/10">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <h3 className="font-display mt-auto pt-10 text-3xl font-medium italic">{h.name}</h3>
                {h.line && <p className="mt-2 text-base leading-snug opacity-90">{h.line}</p>}
              </motion.div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  </section>
);
