"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navigation from "./navigation";

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

function VenueSection() {
  return (
    <section
      id="venue"
      className="flex min-h-svh snap-start items-center justify-center p-5 sm:p-10"
    >
      <div className="relative isolate w-full max-w-6xl overflow-hidden rounded-2xl border border-ink/10 bg-page p-8 shadow-card">
        <Image
          alt=""
          className="object-cover opacity-20"
          fill
          sizes="(max-width: 1152px) 100vw, 1152px"
          src="/wedding-assets/venue/ville-sommet-sketch.png"
        />
        <div className="absolute inset-0 bg-page/65" />
        <div className="relative grid w-full items-center gap-10 lg:items-stretch lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="order-2 overflow-hidden rounded-2xl border border-ink/10 bg-page p-2 shadow-map sm:p-3 lg:h-full">
            <iframe
              className="aspect-video w-full rounded-2xl lg:h-full lg:aspect-auto"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Ville%20Sommet%20Tagaytay%2C%205%20JP%20Rizal%20St%2C%20Sicat%2C%20Alfonso%2C%20Cavite&output=embed"
              title="Google Map of Ville Sommet"
            />
          </div>
          <div className="order-1 text-center lg:text-left">
            <p className="text-xs font-semibold tracking-eyebrow text-moss uppercase">
              The venue
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-display tracking-tighter text-ink sm:text-7xl">
              Meet us in the garden
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-7 text-ink/65 lg:mx-0 lg:text-lg">
              A beautiful little spot for our very big day.
            </p>
            <div className="mt-20 flex justify-center gap-3 lg:justify-start">
              <a
                aria-label="Open Ville Sommet in Google Maps"
                className="flex size-14 items-center justify-center rounded-full border border-mint-border bg-mint text-ink sm:size-16"
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
                className="flex size-14 items-center justify-center rounded-full border border-mint-border bg-mint text-ink sm:size-16"
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
      <div className="mx-auto flex h-20 items-end justify-center text-ink sm:h-24">
        {children}
      </div>
      <p className="mt-3 text-lg font-medium tracking-time text-timeline sm:text-xl">
        {time}
      </p>
      <p className="mt-1 text-base tracking-label text-timeline sm:text-lg">
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
      <div className="relative isolate w-full max-w-5xl overflow-hidden rounded-2xl border border-ink/10 bg-card px-6 py-12 shadow-card sm:px-12 sm:py-14">
        <IvyCorners />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-center text-xs font-semibold tracking-eyebrow text-moss uppercase">
            The timeline
          </p>
          <h2 className="mt-3 text-center font-serif text-5xl tracking-tighter text-ink sm:text-7xl">
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
              <p className="text-lg font-medium tracking-time text-timeline sm:text-2xl">
                16:00
              </p>
              <p className="mt-1 text-sm tracking-label text-timeline sm:text-lg">
                Ceremony
              </p>
            </div>
          </div>

          <div className="my-7 h-px bg-ink/25 sm:my-9" />

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

const dressCodeLooks = [
  {
    alt: "Guest in a bright orange garden dress",
    height: 2149,
    src: "/wedding-assets/dresscode/00.png",
    width: 732,
  },
  {
    alt: "Guest in a barong with dark trousers",
    height: 1614,
    src: "/wedding-assets/dresscode/01.png",
    width: 975,
  },
  {
    alt: "Guest in a flowing sage garden dress",
    height: 2086,
    src: "/wedding-assets/dresscode/02.png",
    width: 754,
  },
  {
    alt: "Guest in linen long sleeves and brown trousers",
    height: 1962,
    src: "/wedding-assets/dresscode/03.png",
    width: 801,
  },
];

const dressCodePalette = [
  { className: "bg-dress-berry", name: "Berry" },
  { className: "bg-dress-rose", name: "Rose" },
  { className: "bg-dress-coral", name: "Coral" },
  { className: "bg-dress-peach", name: "Peach" },
  { className: "bg-dress-lime", name: "Lime" },
  { className: "bg-dress-olive", name: "Olive" },
];

function DressCodeSection() {
  return (
    <section
      id="dress-code"
      className="flex min-h-svh snap-start items-center justify-center p-5 sm:p-10"
    >
      <div className="relative isolate w-full max-w-5xl overflow-hidden rounded-2xl border border-ink/10 bg-card px-6 py-12 shadow-card sm:px-12 sm:py-14">
        <IvyCorners />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto grid max-w-xl grid-cols-4 items-end gap-1 sm:gap-5">
            {dressCodeLooks.map((look) => (
              <div
                className="flex h-36 items-end justify-center sm:h-52"
                key={look.src}
              >
                <Image
                  alt={look.alt}
                  className="h-full w-auto max-w-full shrink-0 object-contain object-bottom"
                  height={look.height}
                  sizes="(max-width: 640px) 22vw, 112px"
                  src={look.src}
                  width={look.width}
                />
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs font-semibold tracking-eyebrow text-moss uppercase">
            Dress Code:
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tighter text-ink sm:text-6xl">
            Garden Formal
          </h2>

          <div
            aria-label="Approved wedding color palette"
            className="mx-auto mt-8 flex max-w-md justify-center gap-2 sm:mt-10 sm:gap-4"
          >
            {dressCodePalette.map((color) => (
              <span
                aria-label={`${color.name} approved color`}
                className={`size-9 rounded-full sm:size-14 ${color.className}`}
                key={color.name}
              />
            ))}
          </div>

          <div className="mx-auto mt-9 max-w-3xl space-y-2 text-base leading-snug tracking-wide text-guidance sm:mt-11 sm:text-2xl">
            <p>Ladies: Long bright-colored garden dresses</p>
            <p>
              Gentlemen: Barong / linen long sleeves &amp; trousers in brown
              hues
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const galleryPhotos = [
  { height: 6337, src: "/wedding-assets/gallery/0.jpg", width: 4225 },
  { height: 6767, src: "/wedding-assets/gallery/1.jpg", width: 4511 },
  { height: 7008, src: "/wedding-assets/gallery/2.jpg", width: 4672 },
  { height: 4672, src: "/wedding-assets/gallery/3.jpg", width: 7008 },
  { height: 4672, src: "/wedding-assets/gallery/4.jpg", width: 7008 },
  { height: 7008, src: "/wedding-assets/gallery/5.jpg", width: 4672 },
  { height: 7008, src: "/wedding-assets/gallery/6.jpg", width: 4672 },
  { height: 7008, src: "/wedding-assets/gallery/7.jpg", width: 4672 },
  { height: 7008, src: "/wedding-assets/gallery/8.jpg", width: 4672 },
  { height: 4672, src: "/wedding-assets/gallery/9.jpg", width: 7008 },
  { height: 4672, src: "/wedding-assets/gallery/10.jpg", width: 7008 },
];

const galleryFloatPositions = [
  "top-5 left-1",
  "top-0 left-1/4",
  "top-10 right-1/4",
  "top-2 right-2",
  "top-1/3 -left-10 sm:-left-16",
  "top-2/3 -right-10 sm:-right-16",
  "bottom-1 left-4",
  "bottom-12 left-1/3",
  "right-1/3 -bottom-3",
  "right-2 bottom-7",
];

const galleryFloatRotations = [-12, -5, 7, 13, -9, 10, -14, 5, -7, 11];

type GalleryPhotoProps = {
  alt: string;
  className: string;
  photo: (typeof galleryPhotos)[number];
  priority: boolean;
  sizes: string;
};

function GalleryPhoto({
  alt,
  className,
  photo,
  priority,
  sizes,
}: GalleryPhotoProps) {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="size-6 rounded-full border-2 border-mint-border border-t-moss opacity-60" />
      </div>
      <Image
        alt={alt}
        className={className}
        fill
        priority={priority}
        sizes={sizes}
        src={photo.src}
      />
    </>
  );
}

function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (selectedPhoto === null) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedPhoto((current) =>
          current === null
            ? current
            : (current - 1 + galleryPhotos.length) % galleryPhotos.length,
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedPhoto((current) =>
          current === null ? current : (current + 1) % galleryPhotos.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto]);

  const showPreviousPhoto = () => {
    setSelectedPhoto((current) =>
      current === null
        ? current
        : (current - 1 + galleryPhotos.length) % galleryPhotos.length,
    );
  };

  const showNextPhoto = () => {
    setSelectedPhoto((current) =>
      current === null ? current : (current + 1) % galleryPhotos.length,
    );
  };

  return (
    <section
      id="gallery"
      className="flex min-h-svh snap-start items-center justify-center p-5 sm:p-10"
    >
      <div className="relative isolate w-full max-w-5xl overflow-hidden rounded-2xl border border-ink/10 bg-card px-6 py-12 shadow-card sm:px-12 sm:py-14">
        <IvyCorners />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-center text-xs font-semibold tracking-eyebrow text-moss uppercase">
            Gallery
          </p>
          <h2 className="mt-3 text-center font-serif text-4xl tracking-tighter text-ink sm:text-6xl">
            A few of our favorite moments
          </h2>

          <div className="relative mt-8 aspect-square sm:mt-10">
            <button
              aria-label="View the final gallery photo"
              className="absolute inset-x-12 top-1/2 z-30 block aspect-video -translate-y-1/2 overflow-hidden rounded-2xl border border-ink/10 shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss sm:inset-x-20"
              onClick={() => setSelectedPhoto(10)}
              type="button"
            >
              <GalleryPhoto
                alt="Kate and Renzo walking together"
                className="object-cover"
                photo={galleryPhotos[10]}
                priority={false}
                sizes="(max-width: 768px) calc(100vw - 10rem), 768px"
              />
              <span className="absolute inset-0 bg-darkroom/10" />
              <span className="absolute inset-x-0 bottom-0 px-4 py-3 text-left text-sm font-semibold tracking-wide text-page sm:text-base">
                Our next chapter
              </span>
            </button>

            {galleryPhotos.slice(0, 10).map((photo, index) => (
              <motion.button
                aria-label={`View gallery photo ${index + 1}`}
                animate={
                  shouldReduceMotion
                    ? { rotate: galleryFloatRotations[index], y: 0 }
                    : {
                        rotate: [
                          galleryFloatRotations[index],
                          galleryFloatRotations[index] + 2,
                          galleryFloatRotations[index],
                        ],
                        y: [0, index % 2 === 0 ? -5.6 : 5.6, 0],
                      }
                }
                className={`absolute z-20 h-24 w-20 shrink-0 overflow-hidden rounded-xl border border-ink/10 shadow-map focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss sm:h-36 sm:w-28 ${galleryFloatPositions[index]}`}
                key={photo.src}
                onClick={() => setSelectedPhoto(index)}
                transition={{
                  delay: index * 0.12,
                  duration: 3.6 + index * 0.12,
                  ease: "easeInOut",
                  repeat: shouldReduceMotion ? 0 : Infinity,
                }}
                type="button"
              >
                <GalleryPhoto
                  alt="Kate and Renzo together"
                  className="object-cover"
                  photo={photo}
                  priority={false}
                  sizes="(max-width: 640px) 16vw, 112px"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            animate={{ opacity: 1 }}
            aria-label="Gallery image viewer"
            aria-modal="true"
            className="fixed inset-0 z-60 flex items-center justify-center bg-darkroom/95 p-5 sm:p-10"
            initial={{ opacity: 0 }}
            role="dialog"
            transition={{ duration: 0.2 }}
          >
            <button
              aria-label="Close image viewer"
              className="absolute top-5 right-5 z-10 flex size-11 items-center justify-center rounded-full border border-page/30 text-2xl text-page sm:top-8 sm:right-8"
              onClick={() => setSelectedPhoto(null)}
              type="button"
            >
              ×
            </button>
            <button
              aria-label="View previous photo"
              className="absolute left-3 z-10 flex size-11 items-center justify-center rounded-full border border-page/30 text-2xl text-page sm:left-8"
              onClick={showPreviousPhoto}
              type="button"
            >
              ‹
            </button>
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-full w-full max-w-6xl"
              initial={{ opacity: 0, scale: 0.97 }}
              key={galleryPhotos[selectedPhoto].src}
              transition={{ duration: 0.25 }}
            >
              <GalleryPhoto
                alt={`Gallery photo ${selectedPhoto + 1} of ${galleryPhotos.length}`}
                className="object-contain"
                key={galleryPhotos[selectedPhoto].src}
                photo={galleryPhotos[selectedPhoto]}
                priority
                sizes="100vw"
              />
            </motion.div>
            <button
              aria-label="View next photo"
              className="absolute right-3 z-10 flex size-11 items-center justify-center rounded-full border border-page/30 text-2xl text-page sm:right-8"
              onClick={showNextPhoto}
              type="button"
            >
              ›
            </button>
            <p className="absolute bottom-5 text-sm tracking-wide text-page sm:bottom-8">
              {selectedPhoto + 1} / {galleryPhotos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="20"
      viewBox="0 0 24 24"
      width="20"
    >
      <path
        d="M7.25 3.75 10 6.5 8.2 8.7a14.3 14.3 0 0 0 7.1 7.1l2.2-1.8 2.75 2.75-1.65 2.35c-.5.7-1.4 1.02-2.2.76C9.9 17.8 6.2 14.1 4.14 7.6c-.26-.8.06-1.7.76-2.2l2.35-1.65Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function MessengerIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height="20"
      viewBox="0 0 24 24"
      width="20"
    >
      <path d="M12 2C6.48 2 2 6.15 2 11.27c0 2.91 1.45 5.48 3.73 7.17V22l3.4-1.87c.9.25 1.87.38 2.87.38 5.52 0 10-4.15 10-9.24C22 6.15 17.52 2 12 2Zm1.01 12.43-2.55-2.72-4.97 2.72 5.46-5.8 2.61 2.72 4.91-2.72-5.46 5.8Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="20"
      viewBox="0 0 24 24"
      width="20"
    >
      <rect
        height="15"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.7"
        width="15"
        x="4.5"
        y="4.5"
      />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.9" cy="7.2" fill="currentColor" r="1" />
    </svg>
  );
}

function RsvpSection() {
  return (
    <section
      id="rsvp"
      className="flex min-h-svh snap-start items-center justify-center p-5 sm:p-10"
    >
      <div className="relative isolate w-full max-w-5xl overflow-hidden rounded-2xl border border-ink/10 bg-card px-6 py-12 shadow-card sm:px-12 sm:py-14">
        <IvyCorners />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-eyebrow text-moss uppercase">
            RSVP
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tighter text-ink sm:text-6xl">
            Save your seat!
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-guidance sm:text-lg">
            We really hope you can make it! Please let us know if you&apos;ll be
            joining us by{" "}
            <strong className="font-bold text-moss">November 30, 2026</strong>,
            so we can make sure there&apos;s a seat - and plenty of food -
            waiting for you.
          </p>

          <div className="mt-10 grid gap-8 text-center sm:grid-cols-3 sm:gap-6">
            <article className="border-t border-ink/10 pt-5">
              <h3 className="flex items-center justify-center gap-2 font-serif text-2xl text-moss">
                <PhoneIcon />
                Phone
              </h3>
              <div className="mt-4 space-y-3 text-sm text-guidance sm:text-base">
                <a
                  className="flex items-center justify-center gap-3"
                  href="tel:09451230423"
                >
                  <span>Renzo · 09451230423</span>
                </a>
                <a
                  className="flex items-center justify-center gap-3"
                  href="tel:09175424784"
                >
                  <span>Kate · 09175424784</span>
                </a>
              </div>
            </article>
            <article className="border-t border-ink/10 pt-5">
              <h3 className="flex items-center justify-center gap-2 font-serif text-2xl text-moss">
                <MessengerIcon />
                Messenger
              </h3>
              <div className="mt-4 space-y-3 text-sm text-guidance sm:text-base">
                <a
                  className="flex items-center justify-center gap-3"
                  href="https://m.me/RenzoLee"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>Renzo Lee</span>
                </a>
                <a
                  className="flex items-center justify-center gap-3"
                  href="https://m.me/KatePantig"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>Kate Pantig</span>
                </a>
              </div>
            </article>
            <article className="border-t border-ink/10 pt-5">
              <h3 className="flex items-center justify-center gap-2 font-serif text-2xl text-moss">
                <InstagramIcon />
                Instagram
              </h3>
              <div className="mt-4 space-y-3 text-sm text-guidance sm:text-base">
                <a
                  className="flex items-center justify-center gap-3"
                  href="https://www.instagram.com/rnzlee"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>@rnzlee</span>
                </a>
                <a
                  className="flex items-center justify-center gap-3"
                  href="https://www.instagram.com/katepantig"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>@katepantig</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function GiftsSection() {
  return (
    <section
      id="gifts"
      className="flex min-h-svh snap-start items-center justify-center px-5 pt-5 pb-28 sm:px-10 sm:pt-10 sm:pb-32"
    >
      <div className="relative isolate w-full max-w-5xl overflow-hidden rounded-2xl border border-ink/10 bg-card px-6 py-12 shadow-card sm:px-12 sm:py-14">
        <IvyCorners />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-eyebrow text-moss uppercase">
            A Note On Gifts
          </p>
          <Image
            alt="Illustrated wrapped gift"
            className="mx-auto mt-5 h-24 w-auto object-contain sm:h-32"
            height={1174}
            sizes="(max-width: 640px) 96px, 128px"
            src="/wedding-assets/gift/gift_box.png"
            width={1339}
          />
          <h2 className="mt-3 font-serif text-4xl tracking-tighter text-ink sm:text-6xl">
            Come for the love, stay for the party!
          </h2>

          <div className="mx-auto mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-guidance sm:mt-10 sm:text-2xl">
            <p>
              If you were thinking of giving
              <br />a gift to send us on our way,
            </p>
            <p>
              a little something towards our future
              <br />
              would truly make our day.
            </p>
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
  onOpen,
  shouldReduceMotion,
}: {
  onOpen: () => void;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-50 scale-110 overflow-hidden rounded-2xl"
    >
      <motion.div
        animate={{ y: "-100%" }}
        className="absolute inset-x-0 top-0 z-20 h-1/2 rounded-t-2xl bg-envelope-top shadow-envelope"
        initial={{ y: 0 }}
        transition={{
          delay: shouldReduceMotion ? 0 : 0.15,
          duration: shouldReduceMotion ? 0 : 1.25,
          ease: [0.2, 0.85, 0.22, 1],
        }}
      >
        <div className="envelope-seal absolute bottom-0 left-1/2 flex size-11 -translate-x-1/2 translate-y-1/2 scale-[1.44] items-center justify-center rounded-full border border-seal-border bg-seal font-serif text-sm text-seal-text shadow-sm sm:size-14 sm:text-lg">
          R K
        </div>
      </motion.div>
      <motion.div
        animate={{ y: "100%" }}
        className="absolute inset-x-0 bottom-0 z-10 h-1/2 rounded-b-2xl bg-envelope-bottom"
        initial={{ y: 0 }}
        onAnimationComplete={onOpen}
        transition={{
          delay: shouldReduceMotion ? 0 : 0.15,
          duration: shouldReduceMotion ? 0 : 1.85,
          ease: [0.2, 0.85, 0.22, 1],
        }}
      />
    </motion.div>
  );
}

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [showHeroCard, setShowHeroCard] = useState(true);
  const [hasDismissedHeroCard, setHasDismissedHeroCard] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const timer = window.setTimeout(() => setShowEnvelope(false), 2000);

    return () => window.clearTimeout(timer);
  }, [shouldReduceMotion]);

  const isEnvelopeVisible = showEnvelope && !shouldReduceMotion;

  return (
    <>
      <main
        data-invitation-scroll
        className={`h-svh snap-y snap-mandatory ${
          isEnvelopeVisible ? "overflow-hidden" : "overflow-y-auto"
        } bg-page text-ink`}
      >
        <section
          id="home"
          className="relative flex min-h-svh snap-start items-center justify-center overflow-hidden px-5 py-14 sm:px-10"
        >
          <div className="relative w-full max-w-5xl">
            <p className="mb-6 text-center text-kicker font-semibold tracking-hero-eyebrow text-moss uppercase sm:mb-8 sm:text-xs">
              A garden celebration
            </p>
            <div className="hero-frame relative">
              <motion.div
                animate={{ opacity: showHeroCard ? 0.38 : 1 }}
                aria-label={showHeroCard ? undefined : "Show wedding message"}
                className={
                  showHeroCard
                    ? undefined
                    : "cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss"
                }
                initial={{ opacity: 1 }}
                onClick={() => {
                  if (!showHeroCard) {
                    setShowHeroCard(true);
                  }
                }}
                onKeyDown={(event) => {
                  if (
                    !showHeroCard &&
                    (event.key === "Enter" || event.key === " ")
                  ) {
                    event.preventDefault();
                    setShowHeroCard(true);
                  }
                }}
                role={showHeroCard ? undefined : "button"}
                tabIndex={showHeroCard ? -1 : 0}
                transition={{
                  delay:
                    shouldReduceMotion || !showHeroCard || hasDismissedHeroCard
                      ? 0
                      : 1.6,
                  duration: shouldReduceMotion ? 0 : 0.55,
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
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-7 text-center sm:px-20">
                <AnimatePresence>
                  {showHeroCard && (
                    <motion.div
                      animate={{ opacity: 1 }}
                      aria-label="Reveal wedding monogram"
                      className="pointer-events-auto w-full max-w-2xl cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss"
                      exit={{
                        opacity: 0,
                        transition: {
                          duration: shouldReduceMotion ? 0 : 0.35,
                        },
                      }}
                      initial={{ opacity: 0 }}
                      onClick={(event) => {
                        event.stopPropagation();
                        setHasDismissedHeroCard(true);
                        setShowHeroCard(false);
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setHasDismissedHeroCard(true);
                          setShowHeroCard(false);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      transition={{
                        delay:
                          shouldReduceMotion || hasDismissedHeroCard ? 0 : 2,
                        duration: shouldReduceMotion ? 0 : 0.2,
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
                          initial={
                            hasDismissedHeroCard
                              ? false
                              : {
                                  clipPath:
                                    "polygon(8% 0, 92% 0, 100% 18%, 100% 100%, 0 100%, 0 16%)",
                                  filter: "blur(2px)",
                                  opacity: 0,
                                  rotateX: -46,
                                  rotateZ: 1.5,
                                  y: 16,
                                }
                          }
                          style={{ transformOrigin: "100% 0" }}
                          transition={{
                            delay:
                              shouldReduceMotion || hasDismissedHeroCard
                                ? 0
                                : 2.15,
                            duration:
                              shouldReduceMotion || hasDismissedHeroCard
                                ? 0
                                : 0.65,
                            ease: [0.22, 0.8, 0.2, 1],
                          }}
                        >
                          We&apos;re tying the knot! Join us in the garden for a
                          day filled with love!
                        </motion.p>
                      </InvitationMessageCard>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <p className="mt-8 text-center text-xl font-semibold tracking-time text-ink sm:text-3xl">
              07 FEBRUARY 2027, 3:30 PM
            </p>
          </div>
        </section>

        <VenueSection />

        <TimelineSection />

        <DressCodeSection />

        <GallerySection />

        <RsvpSection />

        <GiftsSection />
      </main>
      <AnimatePresence>
        {isEnvelopeVisible && (
          <InvitationEnvelope
            onOpen={() => setShowEnvelope(false)}
            shouldReduceMotion={shouldReduceMotion}
          />
        )}
      </AnimatePresence>
      <Navigation />
    </>
  );
}
