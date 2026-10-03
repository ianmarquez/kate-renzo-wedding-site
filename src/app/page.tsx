"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navigation from "./navigation";

type PlaceholderSectionProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

function IvyCorners() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <Image
        alt=""
        className="absolute -top-9 -left-10 h-28 w-auto object-contain opacity-40 sm:h-40"
        src="/wedding-assets/ivy/00.svg"
        width={1142}
        height={1572}
      />
      <Image
        alt=""
        className="absolute -top-9 -right-10 h-28 w-auto object-contain opacity-40 sm:h-40"
        src="/wedding-assets/ivy/02.svg"
        width={1328}
        height={1404}
      />
      <Image
        alt=""
        className="absolute -bottom-9 -left-10 h-28 w-auto object-contain opacity-40 sm:h-40"
        src="/wedding-assets/ivy/01.svg"
        width={1418}
        height={1778}
      />
      <Image
        alt=""
        className="absolute -right-10 -bottom-9 h-28 w-auto object-contain opacity-40 sm:h-40"
        src="/wedding-assets/ivy/03.svg"
        width={1482}
        height={1742}
      />
    </div>
  );
}

function PlaceholderSection({
  eyebrow,
  title,
  children,
}: PlaceholderSectionProps) {
  return (
    <section className="snap-start p-5 sm:p-10">
      <div className="relative isolate flex min-h-[calc(100svh-2.5rem)] items-center overflow-hidden rounded-[1rem] border border-black/10 bg-white px-5 py-20 shadow-[0_20px_55px_rgba(35,35,32,0.08)] sm:min-h-[calc(100svh-5rem)] sm:px-8">
        <IvyCorners />
        <div className="relative mx-auto w-full max-w-5xl">
          <p className="text-center text-xs font-semibold tracking-[0.3em] text-[#596c2d] uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-center font-serif text-5xl tracking-[-0.05em] text-[#242423] sm:text-7xl">
            {title}
          </h2>
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComingSoonCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[1rem] border border-[#dce8d7] bg-[#f8fff5] p-7 text-center shadow-[0_14px_32px_rgba(42,35,35,0.06)] sm:p-9">
      {children}
    </div>
  );
}

function VenueSection() {
  return (
    <section
      id="venue"
      className="flex min-h-svh snap-start items-center justify-center p-5 sm:p-10"
    >
      <div className="relative isolate w-full max-w-6xl overflow-hidden rounded-[1rem] border border-black/10 bg-white p-8 shadow-[0_20px_55px_rgba(35,35,32,0.08)]">
        <Image
          alt=""
          className="object-cover opacity-20"
          fill
          sizes="(max-width: 1152px) 100vw, 1152px"
          src="/wedding-assets/venue/ville-sommet-sketch.png"
        />
        <div className="absolute inset-0 bg-white/65" />
        <div className="relative grid w-full items-center gap-10 lg:items-stretch lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="order-2 overflow-hidden rounded-[1rem] border border-black/10 bg-white p-2 shadow-[0_16px_38px_rgba(35,35,32,0.1)] sm:p-3 lg:h-full">
            <iframe
              className="aspect-video w-full rounded-[1rem] lg:h-full lg:aspect-auto"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Ville%20Sommet%20Tagaytay%2C%205%20JP%20Rizal%20St%2C%20Sicat%2C%20Alfonso%2C%20Cavite&output=embed"
              title="Google Map of Ville Sommet"
            />
          </div>
          <div className="order-1 text-center lg:text-left">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#596c2d] uppercase">
              The venue
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-[#242423] sm:text-7xl">
              Meet us in the garden
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-7 text-black/65 lg:mx-0 lg:text-lg">
              A beautiful little spot for our very big day.
            </p>
            <div className="mt-20 flex justify-center gap-3 lg:justify-start">
              <a
                aria-label="Open Ville Sommet in Google Maps"
                className="flex size-14 items-center justify-center rounded-full border border-[#dce8d7] bg-[#f8fff5] text-[#242423] sm:size-16"
                href="https://www.google.com/maps/search/?api=1&query=Ville%20Sommet%20Tagaytay%2C%205%20JP%20Rizal%20St%2C%20Sicat%2C%20Alfonso%2C%20Cavite"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M12 21s6-5.05 6-11a6 6 0 1 0-12 0c0 5.95 6 11 6 11Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle cx="12" cy="10" fill="currentColor" r="2.2" />
                </svg>
              </a>
              <a
                aria-label="Open Ville Sommet in Waze"
                className="flex size-14 items-center justify-center rounded-full border border-[#dce8d7] bg-[#f8fff5] text-[#242423] sm:size-16"
                href="https://www.waze.com/ul?q=Ville%20Sommet%20Tagaytay&navigate=yes"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="26"
                  viewBox="0 0 24 24"
                  width="26"
                >
                  <path
                    d="M5 14.5c0-3.6 2.9-6.5 6.5-6.5S18 10.9 18 14.5c0 .85-.16 1.67-.46 2.42L19.5 19l-2.85.15A6.47 6.47 0 0 1 11.5 21C7.9 21 5 18.1 5 14.5Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  />
                  <circle cx="9" cy="14" fill="currentColor" r="1" />
                  <circle cx="14" cy="14" fill="currentColor" r="1" />
                  <path
                    d="M8.5 17c.8.6 1.7.9 3 .9 1.05 0 2-.27 2.8-.82"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type TimelineMomentProps = {
  time: string;
  title: string;
  children: React.ReactNode;
};

function TimelineMoment({ time, title, children }: TimelineMomentProps) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-20 items-end justify-center text-[#242423] sm:h-24">
        {children}
      </div>
      <p className="mt-3 text-lg font-medium tracking-[0.08em] text-[#59606c] sm:text-xl">
        {time}
      </p>
      <p className="mt-1 text-base tracking-[0.06em] text-[#59606c] sm:text-lg">
        {title}
      </p>
    </div>
  );
}

function TimelineSection() {
  return (
    <section
      id="timeline"
      className="flex min-h-svh snap-start items-center justify-center p-5 sm:p-10"
    >
      <div className="relative isolate w-full max-w-5xl overflow-hidden rounded-[1rem] border border-black/10 bg-[#fffefb] px-6 py-12 shadow-[0_20px_55px_rgba(35,35,32,0.08)] sm:px-12 sm:py-14">
        <IvyCorners />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-center text-xs font-semibold tracking-[0.3em] text-[#596c2d] uppercase">
            The timeline
          </p>
          <h2 className="mt-3 text-center font-serif text-5xl tracking-[-0.05em] text-[#242423] sm:text-7xl">
            Here&apos;s the plan...
          </h2>

          <div className="mx-auto mt-8 flex max-w-xl items-end justify-center gap-4 sm:mt-10 sm:gap-8">
            <Image
              alt="Kate and Renzo beneath a flower-filled wedding arch"
              className="h-auto w-44 object-contain sm:w-56"
              height={1242}
              sizes="(max-width: 640px) 176px, 224px"
              src="/wedding-assets/timeline/elegant-floral-wedding-arch.png"
              width={1266}
            />
            <div className="pb-2 text-left sm:pb-4">
              <p className="text-lg font-medium tracking-[0.08em] text-[#59606c] sm:text-2xl">
                16:00
              </p>
              <p className="mt-1 text-sm tracking-[0.06em] text-[#59606c] sm:text-lg">
                Ceremony
              </p>
            </div>
          </div>

          <div className="my-7 h-px bg-black/25 sm:my-9" />

          <div className="grid grid-cols-3 gap-3 sm:gap-8">
            <TimelineMoment time="17:30" title="Cocktails">
              <Image
                alt="Two cocktail glasses"
                className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                height={1254}
                sizes="(max-width: 640px) 64px, 80px"
                src="/wedding-assets/timeline/toasting-martini-glasses.png"
                width={1254}
              />
            </TimelineMoment>
            <TimelineMoment time="19:00" title="Dinner">
              <Image
                alt="Dinner place setting"
                className="h-16 w-20 object-contain sm:h-20 sm:w-24"
                height={1134}
                sizes="(max-width: 640px) 80px, 96px"
                src="/wedding-assets/timeline/elegant-floral-centerpiece.png"
                width={1387}
              />
            </TimelineMoment>
            <TimelineMoment time="21:00" title="After-party">
              <Image
                alt="Disco ball"
                className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                height={1254}
                sizes="(max-width: 640px) 64px, 80px"
                src="/wedding-assets/timeline/minimalist-disco-ball.png"
                width={1254}
              />
            </TimelineMoment>
          </div>
        </div>
      </div>
    </section>
  );
}

function InvitationMessageCard({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`invitation-message-card ${className}`}>
      <IvyCorners />
      {children}
    </div>
  );
}

function InvitationEnvelope({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-50 scale-110 overflow-hidden rounded-[1rem]"
    >
      <motion.div
        animate={{ y: "-100%" }}
        className="absolute inset-x-0 top-0 z-20 h-1/2 rounded-t-[1rem] bg-[#e6f1e1] shadow-[0_12px_20px_rgba(35,35,32,0.18)]"
        initial={{ y: 0 }}
        transition={{
          delay: shouldReduceMotion ? 0 : 0.4,
          duration: shouldReduceMotion ? 0 : 1.25,
          ease: [0.2, 0.85, 0.22, 1],
        }}
      >
        <div className="envelope-seal absolute bottom-0 left-1/2 flex size-11 -translate-x-1/2 translate-y-1/2 scale-[1.44] items-center justify-center rounded-full border border-[#59724f] bg-[#76936c] font-serif text-sm text-[#fffaf7] shadow-sm sm:size-14 sm:text-lg">
          R K
        </div>
      </motion.div>
      <motion.div
        animate={{ y: "100%" }}
        className="absolute inset-x-0 bottom-0 z-10 h-1/2 rounded-b-[1rem] bg-[#d9ead3]"
        initial={{ y: 0 }}
        transition={{
          delay: shouldReduceMotion ? 0 : 0.4,
          duration: shouldReduceMotion ? 0 : 2.6,
          ease: [0.2, 0.85, 0.22, 1],
        }}
      />
    </motion.div>
  );
}

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [showEnvelope, setShowEnvelope] = useState(true);

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const timer = window.setTimeout(() => setShowEnvelope(false), 3000);

    return () => window.clearTimeout(timer);
  }, [shouldReduceMotion]);

  const isEnvelopeVisible = showEnvelope && !shouldReduceMotion;

  return (
    <>
      <main
        data-invitation-scroll
        className={`h-svh snap-y snap-mandatory ${
          isEnvelopeVisible ? "overflow-hidden" : "overflow-y-auto"
        } bg-white text-[#242423]`}
      >
        <section
          id="home"
          className="relative flex min-h-svh snap-start items-center justify-center overflow-hidden px-5 py-14 sm:px-10"
        >
          <div className="relative w-full max-w-5xl">
            <p className="mb-6 text-center text-[0.65rem] font-semibold tracking-[0.35em] text-[#596c2d] uppercase sm:mb-8 sm:text-xs">
              A garden celebration
            </p>
            <div className="hero-frame relative">
              <motion.div
                animate={{ opacity: 0.38 }}
                initial={{ opacity: 1 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 2.6,
                  duration: shouldReduceMotion ? 0 : 0.85,
                }}
              >
                <Image
                  alt="Kate and Renzo's wedding monogram"
                  className="h-auto w-full"
                  height={766}
                  priority
                  src="/wedding-assets/hero/initial-look.png"
                  width={1010}
                />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center px-7 text-center sm:px-20">
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : 3,
                    duration: shouldReduceMotion ? 0 : 0.2,
                  }}
                >
                  <InvitationMessageCard className="w-full max-w-2xl">
                    <motion.p
                      animate={{
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        filter: "blur(0px)",
                        opacity: 1,
                        rotateX: 0,
                        rotateZ: 0,
                        y: 0,
                      }}
                      className="relative max-w-xl font-serif text-3xl leading-[1.05] tracking-[-0.045em] text-[#242423] sm:text-5xl lg:text-6xl"
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
                        delay: shouldReduceMotion ? 0 : 3.1,
                        duration: shouldReduceMotion ? 0 : 0.8,
                        ease: [0.22, 0.8, 0.2, 1],
                      }}
                    >
                      We&apos;re tying the knot! Join us in the garden for a day
                      filled with love!
                    </motion.p>
                  </InvitationMessageCard>
                </motion.div>
              </div>
            </div>
            <p className="mt-8 text-center text-xl font-semibold tracking-[0.08em] text-[#242423] sm:text-3xl">
              07 FEBRUARY 2027, 3:30 PM
            </p>
          </div>
        </section>

        <VenueSection />

        <TimelineSection />

        <div id="dress-code">
          <PlaceholderSection eyebrow="Dress code" title="Come as you are">
            <ComingSoonCard>
              <p className="font-serif text-2xl">Attire guidance</p>
              <p className="mt-3 text-sm leading-6 text-black/60">
                Garden-friendly style notes are coming soon.
              </p>
            </ComingSoonCard>
            <ComingSoonCard>
              <p className="font-serif text-2xl">A little inspiration</p>
              <p className="mt-3 text-sm leading-6 text-black/60">
                A few color and outfit ideas will live here.
              </p>
            </ComingSoonCard>
          </PlaceholderSection>
        </div>
      </main>
      <AnimatePresence>
        {isEnvelopeVisible && (
          <InvitationEnvelope shouldReduceMotion={shouldReduceMotion} />
        )}
      </AnimatePresence>
      <Navigation />
    </>
  );
}
