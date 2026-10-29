import { useEffect } from "react";
import Lenis from "lenis";
import "./site.css";
import { Toaster } from "./components/ui/sonner";
import { Nav } from "./components/site/Nav";
import { Hero } from "./components/site/Hero";
import { Highlights } from "./components/site/Highlights";
import { Work } from "./components/site/Work";
import { Experience, Tools } from "./components/site/Experience";
import { Contact } from "./components/site/Contact";
import { Story } from "./components/site/Story";
import { OffTheClock } from "./components/site/OffTheClock";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); window.__lenis = null; };
  }, []);

  return (
    <div className="bg-[#F8F3EA] overflow-x-clip" data-testid="site-root">
      <div className="paper-grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Story />
        <Highlights />
        <Work />
        <Experience />
        <Tools />
        <OffTheClock />
        <Contact />
      </main>
      <Toaster position="bottom-center" />
    </div>
  );
}

export default App;
