import Link from "next/link";
import { IvyCorners, InstagramIcon, MessengerIcon, PhoneIcon } from "./shared";

export default function RsvpSection({
  onRegister,
}: {
  onRegister: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <section
      id="rsvp"
      className="flex items-center justify-center px-5 py-16 sm:px-10 sm:py-24"
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
          <Link
            className="mt-8 inline-flex items-center rounded-full bg-moss px-6 py-3 text-sm font-semibold tracking-label text-page focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss sm:text-base"
            href="/rsvp/"
            onClick={onRegister}
          >
            Register your RSVP
          </Link>
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
