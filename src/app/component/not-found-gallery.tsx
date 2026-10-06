"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const gallery = [
  {
    alt: "Kate and Renzo together",
    height: 6337,
    src: "/wedding-assets/gallery/0.jpg",
    width: 4225,
  },
  {
    alt: "Kate and Renzo celebrating together",
    height: 6767,
    src: "/wedding-assets/gallery/1.jpg",
    width: 4511,
  },
  {
    alt: "A favorite moment from Kate and Renzo's wedding gallery",
    height: 7008,
    src: "/wedding-assets/gallery/2.jpg",
    width: 4672,
  },
  {
    alt: "A favorite moment from Kate and Renzo's wedding gallery",
    height: 4672,
    src: "/wedding-assets/gallery/3.jpg",
    width: 7008,
  },
  {
    alt: "A favorite moment from Kate and Renzo's wedding gallery",
    height: 4672,
    src: "/wedding-assets/gallery/4.jpg",
    width: 7008,
  },
  {
    alt: "A favorite moment from Kate and Renzo's wedding gallery",
    height: 7008,
    src: "/wedding-assets/gallery/5.jpg",
    width: 4672,
  },
  {
    alt: "A favorite moment from Kate and Renzo's wedding gallery",
    height: 7008,
    src: "/wedding-assets/gallery/6.jpg",
    width: 4672,
  },
  {
    alt: "A favorite moment from Kate and Renzo's wedding gallery",
    height: 7008,
    src: "/wedding-assets/gallery/7.jpg",
    width: 4672,
  },
  {
    alt: "A favorite moment from Kate and Renzo's wedding gallery",
    height: 7008,
    src: "/wedding-assets/gallery/8.jpg",
    width: 4672,
  },
  {
    alt: "A favorite moment from Kate and Renzo's wedding gallery",
    height: 4672,
    src: "/wedding-assets/gallery/9.jpg",
    width: 7008,
  },
  {
    alt: "Kate and Renzo walking together",
    height: 4672,
    src: "/wedding-assets/gallery/10.jpg",
    width: 7008,
  },
];

const positions = [
  "not-found-frame-top left-2",
  "not-found-frame-top left-1/2",
  "not-found-frame-top right-2",
  "not-found-frame-left top-1/4",
  "not-found-frame-left top-2/3",
  "not-found-frame-right top-1/4",
  "not-found-frame-right top-2/3",
  "not-found-frame-bottom left-2",
  "not-found-frame-bottom left-1/3",
  "not-found-frame-bottom right-1/3",
  "not-found-frame-bottom right-2",
];

const rotations = [-12, -5, 7, 13, -9, 10, -14, 5, -7, 11, -4];

export default function NotFoundGallery() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {gallery.map((photo, index) => (
        <motion.div
          animate={
            shouldReduceMotion
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
          className={`absolute z-10 h-24 w-20 overflow-hidden rounded-xl border border-ink/10 shadow-map sm:h-36 sm:w-28 ${positions[index]}`}
          key={photo.src}
          transition={{
            delay: index * 0.12,
            duration: 3.6 + index * 0.12,
            ease: "easeInOut",
            repeat: shouldReduceMotion ? 0 : Infinity,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="size-6 rounded-full border-2 border-mint-border border-t-moss opacity-60" />
          </div>
          <Image
            alt={photo.alt}
            className="object-cover"
            fill
            sizes="(max-width: 640px) 80px, 112px"
            src={photo.src}
          />
        </motion.div>
      ))}
    </div>
  );
}
