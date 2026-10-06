import Image from "next/image";
import { IvyCorners } from "./shared";

const qrCodes = [
  {
    alt: "BDO InstaPay QR code",
    height: 720,
    label: "BDO",
    src: "/wedding-assets/gift/bdo-qr.png",
    width: 720,
  },
  {
    alt: "BPI InstaPay QR code",
    height: 500,
    label: "BPI",
    src: "/wedding-assets/gift/bpi-qr.png",
    width: 500,
  },
  {
    alt: "GCash InstaPay QR code",
    height: 620,
    label: "GCash",
    src: "/wedding-assets/gift/gcash-qr.png",
    width: 620,
  },
];

export default function GiftsSection() {
  return (
    <section
      id="gifts"
      className="flex min-h-svh items-center justify-center px-5 pt-5 pb-28 sm:px-10 sm:pt-10 sm:pb-32"
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
          <div className="mt-10 border-t border-ink/10 pt-6 sm:mt-12 sm:pt-8">
            <p className="text-xs font-semibold tracking-eyebrow text-moss uppercase">
              Scan to send your love
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {qrCodes.map((code) => (
                <figure
                  className="flex flex-col items-center gap-3 rounded-xl border border-mint-border bg-mint p-3 text-center sm:block sm:p-4"
                  key={code.src}
                >
                  <div className="flex h-44 w-32 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-page p-2 sm:h-48 sm:w-full sm:p-3">
                    <Image
                      alt={code.alt}
                      className="h-full w-full object-contain"
                      height={code.height}
                      sizes="(max-width: 640px) 128px, 220px"
                      src={code.src}
                      width={code.width}
                    />
                  </div>
                  <figcaption className="font-serif text-2xl text-ink sm:mt-3 sm:text-xl">
                    {code.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
