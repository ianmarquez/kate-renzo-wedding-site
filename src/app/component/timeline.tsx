import Image from "next/image";
import { IvyCorners } from "./shared";

function Moment({
  time,
  title,
  children,
}: {
  time: string;
  title: string;
  children: React.ReactNode;
}) {
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

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="flex items-center justify-center px-5 py-16 sm:px-10 sm:py-24"
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
                15:00
              </p>
              <p className="mt-1 text-sm tracking-label text-timeline sm:text-lg">
                Ceremony
              </p>
            </div>
          </div>
          <div className="my-7 h-px bg-ink/25 sm:my-9" />
          <div className="grid grid-cols-3 gap-3 sm:gap-8">
            <Moment time="16:30" title="Cocktails">
              <Image
                alt="Two cocktail glasses"
                className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                height={1254}
                sizes="(max-width: 640px) 64px, 80px"
                src="/wedding-assets/timeline/toasting-martini-glasses.png"
                width={1254}
              />
            </Moment>
            <Moment time="18:00" title="Dinner">
              <Image
                alt="Dinner place setting"
                className="h-16 w-20 object-contain sm:h-20 sm:w-24"
                height={1134}
                sizes="(max-width: 640px) 80px, 96px"
                src="/wedding-assets/timeline/elegant-floral-centerpiece.png"
                width={1387}
              />
            </Moment>
            <Moment time="20:00" title="After-party">
              <Image
                alt="Disco ball"
                className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                height={1254}
                sizes="(max-width: 640px) 64px, 80px"
                src="/wedding-assets/timeline/minimalist-disco-ball.png"
                width={1254}
              />
            </Moment>
          </div>
        </div>
      </div>
    </section>
  );
}
