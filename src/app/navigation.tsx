"use client";

import { motion, useReducedMotion } from "framer-motion";

const navigationItems = [
  { href: "#venue", id: "venue", label: "Venue" },
  { href: "#timeline", id: "timeline", label: "Timeline" },
  { href: "#dress-code", id: "dress-code", label: "Dress" },
  { href: "#rsvp", id: "rsvp", label: "RSVP" },
  { href: "#gifts", id: "gifts", label: "Gifts" },
];

export default function Navigation() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (sectionId: string) => {
    const scrollContainer = document.querySelector("[data-invitation-scroll]");
    const section = document.getElementById(sectionId);

    if (scrollContainer instanceof HTMLElement && section) {
      const sectionOffset =
        section.getBoundingClientRect().top -
        scrollContainer.getBoundingClientRect().top +
        scrollContainer.scrollTop;

      scrollContainer.scrollTo({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        top: sectionOffset,
      });
    }
  };

  return (
    <motion.nav
      aria-label="Invitation sections"
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      className="fixed inset-x-4 bottom-5 z-30 mx-auto w-fit rounded-full border border-ink/10 bg-page/70 px-2 py-2 shadow-navigation backdrop-blur-md sm:bottom-8"
      initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
      transition={{
        delay: shouldReduceMotion ? 0 : 2.9,
        duration: shouldReduceMotion ? 0 : 0.45,
      }}
    >
      <ul className="flex items-center gap-1 text-navigation font-semibold tracking-widest text-ink uppercase sm:text-xs">
        {navigationItems.map(({ href, id, label }) => (
          <li key={id}>
            <a
              className="block rounded-full px-3 py-2 hover:bg-mint"
              href={href}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(id);
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
