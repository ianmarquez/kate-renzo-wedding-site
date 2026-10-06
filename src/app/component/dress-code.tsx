import Image from "next/image";
import { IvyCorners } from "./shared";

const looks = [
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
const palette = [
  { className: "bg-dress-berry", name: "Berry" },
  { className: "bg-dress-rose", name: "Rose" },
  { className: "bg-dress-coral", name: "Coral" },
  { className: "bg-dress-peach", name: "Peach" },
  { className: "bg-dress-lime", name: "Lime" },
  { className: "bg-dress-olive", name: "Olive" },
];

export default function DressCodeSection() {
  return (
    <section
      id="dress-code"
      className="flex items-center justify-center px-5 py-16 sm:px-10 sm:py-24"
    >
      <div className="relative isolate w-full max-w-5xl overflow-hidden rounded-2xl border border-ink/10 bg-card px-6 py-12 shadow-card sm:px-12 sm:py-14">
        <IvyCorners />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto grid max-w-xl grid-cols-4 items-end gap-1 sm:gap-5">
            {looks.map((look) => (
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
            {palette.map((color) => (
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
