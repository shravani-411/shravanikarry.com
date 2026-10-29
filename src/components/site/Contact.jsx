import { useState } from "react";
import { toast } from "sonner";
import { ChevronRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { PROFILE } from "../../data/profile";

const LinkRow = ({ label, value, href, testid }) => (
  <a data-testid={testid} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-center justify-between gap-4 py-5 border-b border-black/10">
    <span className="text-sm text-[#6E6157] w-24 shrink-0">{label}</span>
    <span className="flex-1 text-lg sm:text-2xl font-medium tracking-tight text-[#2B2420] group-hover:text-[#8B2E3C] transition-colors truncate">{value}</span>
    <ChevronRight size={20} className="text-[#7A6C60] shrink-0 transition-transform group-hover:translate-x-1" />
  </a>
);

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(PROFILE.email); } catch (e) { /* clipboard blocked */ }
    setCopied(true);
    toast("Email copied");
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <section id="contact" data-testid="contact-section" className="bg-[#EFE6D6] pt-24 sm:pt-32 pb-10">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <FadeIn className="text-center">
          <h2 className="text-5xl sm:text-7xl font-semibold tracking-[-0.04em] text-[#2B2420]">Let&apos;s talk.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a data-testid="contact-download-cv" href={PROFILE.cv} download className="rounded-full bg-[#8B2E3C] hover:bg-[#74242F] text-white text-base px-6 py-3 transition-colors">Download CV</a>
            <button data-testid="contact-copy-email" onClick={copy} className="rounded-full border border-[#8B2E3C] text-[#8B2E3C] hover:bg-[#8B2E3C]/5 text-base px-6 py-3 transition-colors">
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-14 border-t border-black/10">
          <LinkRow testid="contact-email-link" label="Email" value={PROFILE.email} href={`mailto:${PROFILE.email}`} />
          <LinkRow testid="contact-phone-link" label="Phone" value={PROFILE.phone} href={PROFILE.phoneHref} />
          <LinkRow testid="contact-linkedin-link" label="LinkedIn" value="Shravani Karry" href={PROFILE.linkedin} />
        </FadeIn>
        <footer className="mt-24 pt-6 border-t border-black/10 flex flex-col sm:flex-row gap-2 justify-between text-xs text-[#6E6157]">
          <span>© 2026 Shravani Karry · {PROFILE.location}</span>
          <span>Product photos © Ultrahuman, from ultrahuman.com</span>
        </footer>
      </div>
    </section>
  );
};
