import Image from "next/image";

export default function VenueSection() {
  return (
    <section
      id="venue"
      className="flex min-h-svh items-center justify-center p-5 sm:p-10"
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
        <div className="relative z-10 grid w-full items-center gap-10 lg:items-stretch lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="relative order-2 min-h-64 overflow-hidden rounded-2xl border border-ink/10 bg-page shadow-map sm:aspect-video lg:h-full lg:aspect-auto">
            <Image
              alt="Illustration of Ville Sommet venue"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              src="/wedding-assets/venue/ville-sommet-sketch.png"
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
            <address className="mx-auto mt-3 max-w-md text-lg leading-7 text-ink/65 italic lg:mx-0 lg:text-xl">
              Ville Sommet, 5 J.P. Rizal Street, Sicat, Alfonso, Cavite,
              Philippines
            </address>
            <div className="mt-20 flex justify-center gap-6 lg:justify-start">
              <a
                aria-label="Open Ville Sommet in Google Maps"
                className="flex flex-col items-center gap-2 text-ink"
                href="https://www.google.com/maps/search/?api=1&query=Ville%20Sommet%20Tagaytay%2C%205%20JP%20Rizal%20St%2C%20Sicat%2C%20Alfonso%2C%20Cavite"
                rel="noreferrer"
                target="_blank"
              >
                <span className="flex size-14 items-center justify-center rounded-full border border-mint-border bg-mint sm:size-16">
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
                </span>
                <span className="text-xs font-semibold tracking-label sm:text-sm">
                  Google Maps
                </span>
              </a>
              <a
                aria-label="Open Ville Sommet in Waze"
                className="flex flex-col items-center gap-2 text-ink"
                href="https://www.waze.com/ul?q=Ville%20Sommet%20Tagaytay&navigate=yes"
                rel="noreferrer"
                target="_blank"
              >
                <span className="flex size-14 items-center justify-center rounded-full border border-mint-border bg-mint sm:size-16">
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
                </span>
                <span className="text-xs font-semibold tracking-label sm:text-sm">
                  Waze
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
