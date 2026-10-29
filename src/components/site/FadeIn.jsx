import { motion } from "framer-motion";

export const EASE = [0.25, 0.1, 0.25, 1];

export const FadeIn = ({ children, delay = 0, className = "", ...rest }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8, ease: EASE, delay }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -48, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const SectionTitle = ({ children, sub }) => (
  <FadeIn className="mb-12 sm:mb-16">
    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[#2B2420]">{children}</h2>
    {sub && <p className="mt-3 text-lg sm:text-xl text-[#6E6157] max-w-2xl">{sub}</p>}
  </FadeIn>
);
