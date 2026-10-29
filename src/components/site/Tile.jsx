import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const Media = ({ w }) => {
  if (!w.img) return <div className="flex-1" />;
  if (w.fit === "cover") {
    return (
      <>
        <img src={w.img} alt={w.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/60" />
        <div className="flex-1" />
      </>
    );
  }
  return (
    <div className="relative flex-1 flex items-end justify-center px-6 pt-4 min-h-[200px]">
      <img src={w.img} alt={w.name} className={`${w.portrait ? "max-h-[320px] rounded-[22px]" : "max-h-[300px]"} w-auto max-w-full object-contain transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]`} />
    </div>
  );
};

export const Tile = ({ w, onOpen }) => {
  const dark = w.tone === "dark";
  return (
    <motion.button
      data-testid={`featured-${w.id}`}
      onClick={() => onOpen(w)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative overflow-hidden rounded-[28px] text-left flex flex-col min-h-[480px] sm:min-h-[560px] ${w.span === 2 ? "md:col-span-2" : ""} ${dark ? "bg-[#26392E] text-[#F8F3EA]" : "bg-[#EFE6D6] text-[#2B2420]"}`}
    >
      <div className="relative z-10 p-8 sm:p-10">
        <p className={`text-sm font-medium ${dark ? "text-white/70" : "text-[#6E6157]"}`}>{w.when}</p>
        <h3 className="mt-1 text-3xl sm:text-4xl font-semibold tracking-[-0.03em]">{w.name}</h3>
        <p className={`mt-2 text-base sm:text-lg ${dark ? "text-white/80" : "text-[#6E6157]"}`}>{w.line}</p>
      </div>
      <Media w={{ ...w, img: w.img || w.screens?.[0] }} />
      <div className="relative z-10 flex items-end justify-between gap-4 p-8 sm:p-10 pt-4">
        <div>
          <p className={`font-semibold tracking-[-0.04em] ${w.img || w.screens?.length ? "text-4xl sm:text-5xl" : "text-7xl sm:text-8xl"}`}>{w.metric}</p>
          <p className={`mt-1 text-sm ${dark ? "text-white/75" : "text-[#6E6157]"}`}>{w.metricLabel}</p>
        </div>
        <span className={`shrink-0 grid place-items-center w-9 h-9 rounded-full transition-transform duration-300 group-hover:rotate-90 ${dark ? "bg-white/15 text-white" : "bg-black/[0.06] text-[#2B2420]"}`}>
          <Plus size={18} />
        </span>
      </div>
    </motion.button>
  );
};
