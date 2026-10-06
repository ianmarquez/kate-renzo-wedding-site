import type { Metadata } from "next";
import RsvpForm from "./rsvp-form";

export const metadata: Metadata = {
  title: "RSVP | Kate & Renzo",
  description:
    "Let Kate and Renzo know whether you can join their celebration.",
};

export default async function RsvpPage(props: PageProps<"/rsvp">) {
  const { invitee } = await props.searchParams;
  const initialInviteeId = typeof invitee === "string" ? invitee : "";

  return <RsvpForm initialInviteeId={initialInviteeId} />;
}
