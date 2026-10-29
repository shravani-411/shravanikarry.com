import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { CATEGORIES } from "../../data/profile";
import { WORK } from "../../data/work";

const Row = ({ w, onOpen }) => (
  <button data-testid={`work-row-${w.id}`} onClick={() => onOpen(w)} className="group w-full text-left grid grid-cols-[1fr_auto] items-center gap-4 py-5 sm:py-6 border-b border-black/10">
    <div className="min-w-0">
      <p className="text-lg sm:text-xl font-semibold tracking-tight text-[#2B2420]">{w.name}</p>
      <p className="mt-1 text-sm sm:text-base text-[#6E6157]">{w.line}</p>
    </div>
    <div className="flex items-center gap-3 sm:gap-6">
      <div className="text-right">
        <p className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#2B2420]">{w.metric}</p>
        <p className="hidden sm:block text-xs text-[#6E6157] max-w-[14rem]">{w.metricLabel}</p>
      </div>
      <ChevronRight size={20} className="text-[#7A6C60] transition-transform group-hover:translate-x-1" />
    </div>
  </button>
);

export const AllWork = ({ onOpen }) => {
  const [cat, setCat] = useState("all");
  const rest = WORK.filter((w) => !w.featured);
  const list = cat === "all" ? rest : rest.filter((w) => w.cat === cat);
  return (
    <div className="mt-24 sm:mt-32">
      <FadeIn>
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#2B2420]">More of what I shipped.</h3>
      </FadeIn>
      <div className="mt-8 -mx-5 px-5 sm:mx-0 sm:px-0 overflow-x-auto" data-lenis-prevent>
        <div className="inline-flex gap-1 rounded-full bg-[#E4D9C6] p-1">
          {CATEGORIES.map((c) => (
            <button key={c.id} data-testid={`filter-${c.id}`} onClick={() => setCat(c.id)} className={`relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors ${cat === c.id ? "text-[#2B2420]" : "text-[#6E6157] hover:text-[#2B2420]"}`}>
              {cat === c.id && <motion.span layoutId="seg" className="absolute inset-0 rounded-full bg-[#F8F3EA] shadow-sm" transition={{ type: "spring", stiffness: 400, damping: 35 }} />}
              <span className="relative">{c.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 border-t border-black/10" data-testid="work-list">
        {list.map((w) => <Row key={w.id} w={w} onOpen={onOpen} />)}
      </div>
    </div>
  );
};
