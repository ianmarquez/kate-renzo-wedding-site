"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IvyCorners } from "./shared";

const photos = [
  [6337, "/wedding-assets/gallery/0.jpg", 4225],
  [6767, "/wedding-assets/gallery/1.jpg", 4511],
  [7008, "/wedding-assets/gallery/2.jpg", 4672],
  [4672, "/wedding-assets/gallery/3.jpg", 7008],
  [4672, "/wedding-assets/gallery/4.jpg", 7008],
  [7008, "/wedding-assets/gallery/5.jpg", 4672],
  [7008, "/wedding-assets/gallery/6.jpg", 4672],
  [7008, "/wedding-assets/gallery/7.jpg", 4672],
  [7008, "/wedding-assets/gallery/8.jpg", 4672],
  [4672, "/wedding-assets/gallery/9.jpg", 7008],
  [4672, "/wedding-assets/gallery/10.jpg", 7008],
] as const;
const positions = [
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
const rotations = [-12, -5, 7, 13, -9, 10, -14, 5, -7, 11];

function Photo({
  index,
  alt,
  priority = false,
  className = "object-cover",
  sizes,
}: {
  index: number;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes: string;
}) {
  const [, src] = photos[index];
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
        src={src}
      />
    </>
  );
}

export default function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (selected === null) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowLeft")
        setSelected((current) =>
          current === null
            ? current
            : (current - 1 + photos.length) % photos.length,
        );
      if (event.key === "ArrowRight")
        setSelected((current) =>
          current === null ? current : (current + 1) % photos.length,
        );
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);
  return (
    <section
      id="gallery"
      className="flex items-center justify-center px-5 py-16 sm:px-10 sm:py-24"
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
              className="absolute inset-x-12 top-1/2 z-30 block aspect-video -translate-y-1/2 overflow-hidden rounded-2xl border border-ink/10 shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
              onClick={() => setSelected(10)}
              type="button"
            >
              <Photo
                alt="Kate and Renzo walking together"
                index={10}
                sizes="(max-width: 768px) calc(100vw - 10rem), 768px"
              />
              <span className="absolute inset-0 bg-darkroom/10" />
              <span className="absolute inset-x-0 bottom-0 px-4 py-3 text-left text-sm font-semibold tracking-wide text-page sm:text-base">
                Our next chapter
              </span>
            </button>
            {photos.slice(0, 10).map((_, index) => (
              <motion.button
                aria-label={`View gallery photo ${index + 1}`}
                animate={
                  reduceMotion
                    ? { rotate: rotations[index], y: 0 }
                    : {
                        rotate: [
                          rotations[index],
                          rotations[index] + 2,
                          rotations[index],
                        ],
                        y: [0, index % 2 === 0 ? -5.6 : 5.6, 0],
                      }
                }
                className={`absolute z-20 h-24 w-20 shrink-0 overflow-hidden rounded-xl border border-ink/10 shadow-map focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss sm:h-36 sm:w-28 ${positions[index]}`}
                key={photos[index][1]}
                onClick={() => setSelected(index)}
                transition={{
                  delay: index * 0.12,
                  duration: 3.6 + index * 0.12,
                  ease: "easeInOut",
                  repeat: reduceMotion ? 0 : Infinity,
                }}
                type="button"
              >
                <Photo
                  alt="Kate and Renzo together"
                  index={index}
                  sizes="(max-width: 640px) 16vw, 112px"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            animate={{ opacity: 1 }}
            aria-label="Gallery image viewer"
            aria-modal="true"
            className="fixed inset-0 z-60 flex items-center justify-center bg-darkroom/95 p-5 sm:p-10"
            initial={{ opacity: 0 }}
            role="dialog"
          >
            <button
              aria-label="Close image viewer"
              className="absolute top-5 right-5 z-10 flex size-11 items-center justify-center rounded-full border border-page/30 text-2xl text-page sm:top-8 sm:right-8"
              onClick={() => setSelected(null)}
              type="button"
            >
              ×
            </button>
            <button
              aria-label="View previous photo"
              className="absolute left-3 z-10 flex size-11 items-center justify-center rounded-full border border-page/30 text-2xl text-page sm:left-8"
              onClick={() =>
                setSelected((current) =>
                  current === null
                    ? current
                    : (current - 1 + photos.length) % photos.length,
                )
              }
              type="button"
            >
              ‹
            </button>
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-full w-full max-w-6xl"
              initial={{ opacity: 0, scale: 0.97 }}
              key={photos[selected][1]}
              transition={{ duration: 0.25 }}
            >
              <Photo
                alt={`Gallery photo ${selected + 1} of ${photos.length}`}
                className="object-contain"
                index={selected}
                priority
                sizes="100vw"
              />
            </motion.div>
            <button
              aria-label="View next photo"
              className="absolute right-3 z-10 flex size-11 items-center justify-center rounded-full border border-page/30 text-2xl text-page sm:right-8"
              onClick={() =>
                setSelected((current) =>
                  current === null ? current : (current + 1) % photos.length,
                )
              }
              type="button"
            >
              ›
            </button>
            <p className="absolute bottom-5 text-sm tracking-wide text-page sm:bottom-8">
              {selected + 1} / {photos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
