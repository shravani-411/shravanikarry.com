import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../ui/dialog";

const Gallery = ({ work }) => {
  const ref = useRef(null);
  const go = (d) => ref.current?.scrollBy({ left: d * ref.current.clientWidth * 0.85, behavior: "smooth" });
  const btn = "hidden sm:grid absolute top-1/2 -translate-y-1/2 w-10 h-10 place-items-center rounded-full bg-[#F8F3EA]/90 shadow-md text-[#2B2420] hover:bg-[#F8F3EA] transition-colors";
  return (
    <div className="relative mt-6">
      <div ref={ref} className="-mx-6 sm:-mx-10 px-6 sm:px-10 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none]" data-testid="work-screens">
        {work.screens.map((src, i) => (
          <img key={src} src={src} alt={`${work.name} screen ${i + 1}`} className={`snap-center shrink-0 ${work.portrait ? "h-[60vh] sm:h-[68vh] w-auto" : work.screens.length > 1 ? "w-[88%] h-auto max-h-[68vh]" : "w-full h-auto max-h-[68vh]"} object-contain object-top rounded-2xl border border-black/5 bg-[#EFE6D6]`} />
        ))}
      </div>
      {work.screens.length > 1 && (
        <>
          <button data-testid="screens-prev" aria-label="Previous screen" onClick={() => go(-1)} className={`${btn} -left-4`}><ChevronLeft size={20} /></button>
          <button data-testid="screens-next" aria-label="Next screen" onClick={() => go(1)} className={`${btn} -right-4`}><ChevronRight size={20} /></button>
        </>
      )}
    </div>
  );
};

const Screens = ({ work }) => (
  <div className="p-6 sm:p-10">
    <DialogTitle className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em]">{work.name}</DialogTitle>
    <DialogDescription className="sr-only">Product screens for {work.name}</DialogDescription>
    {work.screens.length ? <Gallery work={work} /> : (
      <div data-testid="work-screens-empty" className="mt-6 h-64 rounded-2xl bg-[#EFE6D6] grid place-items-center text-[#6E6157]">Screens coming soon</div>
    )}
  </div>
);

export const WorkSheet = ({ work, onClose }) => (
  <Dialog open={!!work} onOpenChange={(o) => !o && onClose()}>
    <DialogContent data-testid="work-sheet" data-lenis-prevent className={`${work?.screens ? "max-w-5xl" : "max-w-2xl"} max-h-[90vh] overflow-y-auto bg-[#F8F3EA] text-[#2B2420] border-0 rounded-[28px] p-0 gap-0`}>
      {work?.screens && <Screens work={work} />}
      {work && !work.screens && (
        <>
          {work.img && (
            <div className={`h-56 sm:h-72 ${work.tone === "dark" ? "bg-black" : "bg-[#EFE6D6]"}`}>
              <img src={work.img} alt={work.name} className={`h-full w-full ${work.fit === "cover" ? "object-cover" : "object-contain p-8"}`} />
            </div>
          )}
          <div className="p-8 sm:p-10">
            <p className="text-sm font-medium text-[#6E6157]">{work.when}</p>
            <DialogTitle className="mt-1 text-3xl sm:text-4xl font-semibold tracking-[-0.03em]">{work.name}</DialogTitle>
            <DialogDescription asChild>
              <div className="mt-6 flex items-baseline gap-3 flex-wrap">
                <span className="text-5xl font-semibold tracking-[-0.04em] text-[#2B2420]">{work.metric}</span>
                <span className="text-base text-[#6E6157]">{work.metricLabel}</span>
              </div>
            </DialogDescription>
            <h4 className="mt-8 text-sm font-semibold text-[#2B2420]">What I did</h4>
            <ul className="mt-3 space-y-2.5">
              {work.did.map((d) => (
                <li key={d} className="flex gap-3 text-base text-[#4A3F38] leading-relaxed">
                  <span className="mt-2.5 h-1 w-1 rounded-full bg-[#2B2420] shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <h4 className="mt-8 text-sm font-semibold text-[#2B2420]">Result</h4>
            <p className="mt-3 text-base text-[#4A3F38] leading-relaxed">{work.result}</p>
          </div>
        </>
      )}
    </DialogContent>
  </Dialog>
);
