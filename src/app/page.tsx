"use client";

import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
import DressCodeSection from "./component/dress-code";
import GallerySection from "./component/gallery";
import GiftsSection from "./component/gifts";
import HeroSection from "./component/hero";
import RsvpSection from "./component/rsvp";
import TimelineSection from "./component/timeline";
import VenueSection from "./component/venue";
import Navigation from "./navigation";

export default function Home() {
  const router = useRouter();
  const registerRsvp = (event: MouseEvent<HTMLAnchorElement>) => {
    const invitee = new URLSearchParams(window.location.search).get("invitee");

    if (invitee) {
      event.preventDefault();
      router.push(`/rsvp/?invitee=${encodeURIComponent(invitee)}`);
    }
  };

  return (
    <>
      <main
        data-invitation-scroll
        className="h-svh overflow-y-auto bg-page text-ink"
      >
        <HeroSection />
        <VenueSection />
        <TimelineSection />
        <DressCodeSection />
        <GallerySection />
        <RsvpSection onRegister={registerRsvp} />
        <GiftsSection />
      </main>
      <Navigation />
    </>
  );
}
