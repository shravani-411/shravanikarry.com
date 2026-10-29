import { useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToId } from "./FadeIn";
import { PROFILE } from "../../data/profile";

const LINKS = [["story", "Story"], ["work", "Work"], ["experience", "Experience"], ["off-the-clock", "Off the clock"], ["contact", "Contact"]];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const go = (id) => { setOpen(false); scrollToId(id); };
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#F8F3EA]/80 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-12 flex items-center justify-between">
        <button data-testid="nav-home" onClick={() => go("top")} className="font-display text-base font-semibold tracking-tight text-[#2B2420]">
          Shravani Karry
        </button>
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(([id, label]) => (
            <button key={id} data-testid={`nav-${id}`} onClick={() => go(id)} className="text-xs text-[#2B2420]/80 hover:text-[#2B2420] transition-colors">
              {label}
            </button>
          ))}
          <a data-testid="nav-download-cv" href={PROFILE.cv} download className="text-xs font-medium text-white bg-[#8B2E3C] hover:bg-[#74242F] rounded-full px-3.5 py-1.5 transition-colors">
            Download CV
          </a>
        </nav>
        <button data-testid="nav-mobile-toggle" className="md:hidden text-[#2B2420]" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div data-testid="nav-mobile-menu" className="md:hidden bg-[#F8F3EA] border-t border-black/5 px-5 py-6 flex flex-col gap-4">
          {LINKS.map(([id, label]) => (
            <button key={id} data-testid={`nav-mobile-${id}`} onClick={() => go(id)} className="text-left text-2xl font-semibold text-[#2B2420]">{label}</button>
          ))}
          <a data-testid="nav-mobile-download-cv" href={PROFILE.cv} download className="mt-2 w-fit text-sm font-medium text-white bg-[#8B2E3C] rounded-full px-5 py-2.5">Download CV</a>
        </div>
      )}
    </header>
  );
};
