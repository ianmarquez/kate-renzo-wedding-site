import Link from "next/link";
import { IvyCorners } from "./component/shared";
import NotFoundGallery from "./component/not-found-gallery";

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-page px-5 text-ink sm:px-10">
      <div className="relative flex min-h-svh w-full max-w-6xl items-center justify-center">
        <div className="relative w-fit max-w-full">
          <NotFoundGallery />
          <section className="relative z-10 isolate w-fit max-w-2xl overflow-hidden rounded-2xl border border-ink/10 bg-card px-6 py-10 text-center shadow-card sm:px-12 sm:py-14">
            <IvyCorners />
            <div className="relative">
              <p className="text-xs font-semibold tracking-eyebrow text-moss uppercase">
                A little detour
              </p>
              <h1 className="mt-3 font-serif text-5xl tracking-tighter text-ink sm:text-7xl">
                There&apos;s nothing to see here
              </h1>
              <p className="mx-auto mt-8 max-w-lg text-base leading-7 text-guidance sm:text-lg">
                This page wandered off before the big day. Click below to find
                your way back to the garden.
              </p>
              <Link
                className="mt-7 inline-flex rounded-full bg-moss px-6 py-3 text-sm font-semibold tracking-label text-page focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss sm:text-base"
                href="/"
              >
                Take me home
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
