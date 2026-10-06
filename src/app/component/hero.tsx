"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { InvitationMessageCard } from "./shared";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center justify-center overflow-hidden px-5 py-14 sm:px-10"
    >
      <div className="relative w-full max-w-5xl">
        <p className="mb-6 text-center text-kicker font-semibold tracking-hero-eyebrow text-moss uppercase sm:mb-8 sm:text-xs">
          A garden celebration
        </p>
        <div className="hero-frame relative">
          <Image
            alt="Kate and Renzo's wedding monogram"
            className="h-auto w-full"
            height={766}
            priority
            src="/wedding-assets/hero/initial-look.png"
            width={1010}
          />
        </div>
        <p className="mt-8 text-center text-xl font-semibold tracking-time text-ink sm:text-3xl">
          07 FEBRUARY 2027, 3:00 PM
        </p>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-8 w-full max-w-2xl"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.35,
            duration: shouldReduceMotion ? 0 : 0.45,
          }}
        >
          <InvitationMessageCard className="w-full">
            <motion.p
              animate={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                filter: "blur(0px)",
                opacity: 1,
                rotateX: 0,
                rotateZ: 0,
                y: 0,
              }}
              className="relative max-w-xl font-serif text-3xl leading-invitation tracking-tighter text-ink sm:text-5xl lg:text-6xl"
              initial={{
                clipPath:
                  "polygon(8% 0, 92% 0, 100% 18%, 100% 100%, 0 100%, 0 16%)",
                filter: "blur(2px)",
                opacity: 0,
                rotateX: -46,
                rotateZ: 1.5,
                y: 16,
              }}
              style={{ transformOrigin: "100% 0" }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.5,
                duration: shouldReduceMotion ? 0 : 0.65,
                ease: [0.22, 0.8, 0.2, 1],
              }}
            >
              We&apos;re tying the knot! Join us in the garden for a day filled
              with love!
            </motion.p>
          </InvitationMessageCard>
        </motion.div>
      </div>
    </section>
  );
}
