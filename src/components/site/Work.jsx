import { useState } from "react";
import { SectionTitle } from "./FadeIn";
import { Tile } from "./Tile";
import { AllWork } from "./AllWork";
import { WorkSheet } from "./WorkSheet";
import { WORK } from "../../data/work";

export const Work = () => {
  const [open, setOpen] = useState(null);
  return (
    <section id="work" data-testid="work-section" className="bg-[#F8F3EA] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionTitle sub="Tap a card to see the screens.">The work.</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {WORK.filter((w) => w.featured).map((w) => <Tile key={w.id} w={w} onOpen={setOpen} />)}
        </div>
        <AllWork onOpen={setOpen} />
      </div>
      <WorkSheet work={open} onClose={() => setOpen(null)} />
    </section>
  );
};
