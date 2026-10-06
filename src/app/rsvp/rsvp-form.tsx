"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Attendance = "yes" | "no" | null;
type Invitee = { id: string; name: string };
type SubmissionState = "error" | "idle" | "submitting" | "success";

function IvyCorners() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <Image
        alt=""
        className="absolute -top-9 -left-10 h-28 w-auto object-contain opacity-40 sm:h-40"
        src="/wedding-assets/ivy/00.svg"
        width={1142}
        height={1572}
      />
      <Image
        alt=""
        className="absolute -top-9 -right-10 h-28 w-auto object-contain opacity-40 sm:h-40"
        src="/wedding-assets/ivy/02.svg"
        width={1328}
        height={1404}
      />
      <Image
        alt=""
        className="absolute -bottom-9 -left-10 h-28 w-auto object-contain opacity-40 sm:h-40"
        src="/wedding-assets/ivy/01.svg"
        width={1418}
        height={1778}
      />
      <Image
        alt=""
        className="absolute -right-10 -bottom-9 h-28 w-auto object-contain opacity-40 sm:h-40"
        src="/wedding-assets/ivy/03.svg"
        width={1482}
        height={1742}
      />
    </div>
  );
}

export default function RsvpForm({
  initialInviteeId,
}: {
  initialInviteeId: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [attendance, setAttendance] = useState<Attendance>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [inviteeError, setInviteeError] = useState("");
  const [invitees, setInvitees] = useState<Invitee[]>([]);
  const [isLoadingInvitees, setIsLoadingInvitees] = useState(false);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedInvitee, setSelectedInvitee] = useState<Invitee | null>(null);
  const [previousAttendance, setPreviousAttendance] =
    useState<Attendance>(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!initialInviteeId) {
      return undefined;
    }

    const controller = new AbortController();

    const loadInvitee = async () => {
      try {
        const response = await fetch(
          `/api/invitees?id=${encodeURIComponent(initialInviteeId)}`,
          { signal: controller.signal },
        );
        const payload = (await response.json()) as { invitees?: Invitee[] };
        const invitee = payload.invitees?.[0];

        if (!response.ok || !invitee) {
          throw new Error();
        }

        setSelectedInvitee(invitee);
        setSearchQuery(invitee.name);
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          setInviteeError(
            "We couldn't find that invitation link. Please search for your name.",
          );
        }
      }
    };

    void loadInvitee();

    return () => controller.abort();
  }, [initialInviteeId]);

  useEffect(() => {
    if (!isPickerOpen) {
      return undefined;
    }

    if (searchQuery.trim().length < 3) {
      return undefined;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setIsLoadingInvitees(true);

      try {
        const response = await fetch(
          `/api/invitees?query=${encodeURIComponent(searchQuery.trim())}`,
          { signal: controller.signal },
        );
        const payload = (await response.json()) as { invitees?: Invitee[] };

        if (!response.ok) {
          throw new Error();
        }

        setInvitees(payload.invitees ?? []);
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          setInviteeError("We couldn't load invitees. Please try again.");
        }
      } finally {
        setIsLoadingInvitees(false);
      }
    }, 180);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [isPickerOpen, searchQuery]);

  useEffect(() => {
    if (!isPickerOpen) {
      return undefined;
    }

    const closeWhenPointerLeaves = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Node) || !pickerRef.current?.contains(target)) {
        setIsPickerOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeWhenPointerLeaves);

    return () =>
      document.removeEventListener("pointerdown", closeWhenPointerLeaves);
  }, [isPickerOpen]);

  const chooseInvitee = (invitee: Invitee) => {
    setInviteeError("");
    setIsPickerOpen(false);
    setSearchQuery(invitee.name);
    setSelectedInvitee(invitee);
    setSubmissionState("idle");
  };

  const saveRsvp = async (method: "PATCH" | "POST") => {
    if (!selectedInvitee || attendance === null) {
      return;
    }

    try {
      const response = await fetch("/api/rsvp", {
        body: JSON.stringify({
          going: attendance === "yes",
          inviteeId: selectedInvitee.id,
        }),
        headers: { "Content-Type": "application/json" },
        method,
      });
      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? "We couldn't save your RSVP.");
      }

      setSubmissionState("success");
      setIsSuccessModalOpen(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "We couldn't save your RSVP.",
      );
      setSubmissionState("error");
    }
  };

  const submitRsvp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedInvitee || attendance === null) {
      return;
    }

    setErrorMessage("");
    setSubmissionState("submitting");

    try {
      const response = await fetch(
        `/api/rsvp?inviteeId=${encodeURIComponent(selectedInvitee.id)}`,
      );

      if (response.ok) {
        const payload = (await response.json()) as { going?: boolean };
        setPreviousAttendance(payload.going ? "yes" : "no");
        setIsUpdateModalOpen(true);
        setSubmissionState("idle");
        return;
      }

      if (response.status !== 404) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error ?? "We couldn't check your RSVP.");
      }

      await saveRsvp("POST");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "We couldn't check your RSVP.",
      );
      setSubmissionState("error");
    }
  };

  const confirmUpdate = async () => {
    setIsUpdateModalOpen(false);
    setErrorMessage("");
    setSubmissionState("submitting");
    await saveRsvp("PATCH");
  };

  return (
    <main className="flex min-h-svh items-center justify-center bg-page p-5 text-ink sm:p-10">
      <motion.section
        animate={{ opacity: 1, y: 0 }}
        className="relative isolate w-full max-w-2xl overflow-hidden rounded-2xl border border-ink/10 bg-card px-6 py-12 shadow-card sm:px-12 sm:py-14"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
      >
        <IvyCorners />
        <div className="relative mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold tracking-eyebrow text-moss uppercase">
            RSVP
          </p>
          <h1 className="mt-3 font-serif text-4xl tracking-tighter text-ink sm:text-6xl">
            Will you join us?
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-7 text-guidance sm:text-lg">
            We can&apos;t wait to celebrate with you. Find your invitation, then
            let us know if you&apos;ll be there.
          </p>

          <form
            className="mt-10 space-y-8 text-left sm:mt-12"
            onSubmit={submitRsvp}
          >
            <div
              className="relative"
              ref={pickerRef}
              onBlur={(event) => {
                window.setTimeout(() => {
                  const activeElement = document.activeElement;

                  if (!event.currentTarget.contains(activeElement)) {
                    setIsPickerOpen(false);
                  }
                }, 0);
              }}
            >
              <label className="block" htmlFor="invitee-search">
                <span className="text-xs font-semibold tracking-eyebrow text-moss uppercase">
                  Find your invitation
                </span>
                <input
                  aria-autocomplete="list"
                  aria-controls="invitee-options"
                  aria-expanded={isPickerOpen}
                  className="mt-3 w-full rounded-xl border border-mint-border bg-page px-4 py-3 text-base text-ink outline-none placeholder:text-guidance/70 focus:border-moss focus:ring-2 focus:ring-moss/20 sm:text-lg"
                  id="invitee-search"
                  onChange={(event) => {
                    setInviteeError("");
                    setIsPickerOpen(true);
                    setSearchQuery(event.target.value);
                    setSelectedInvitee(null);
                    setSubmissionState("idle");
                  }}
                  onFocus={() => setIsPickerOpen(true)}
                  placeholder="Search your name"
                  role="combobox"
                  type="search"
                  value={searchQuery}
                />
              </label>
              {isPickerOpen && (
                <div
                  className="absolute z-10 mt-2 max-h-56 w-full overflow-y-auto rounded-xl border border-mint-border bg-page p-2 shadow-card"
                  id="invitee-options"
                  role="listbox"
                >
                  {isLoadingInvitees ? (
                    <p className="px-3 py-2 text-sm text-guidance">
                      Finding invitees...
                    </p>
                  ) : searchQuery.trim().length < 3 ? (
                    <p className="px-3 py-2 text-sm text-guidance">
                      Type at least 3 characters to search.
                    </p>
                  ) : invitees.length ? (
                    invitees.map((invitee) => (
                      <button
                        aria-selected={selectedInvitee?.id === invitee.id}
                        className="block w-full rounded-lg px-3 py-2 text-left text-base text-ink hover:bg-mint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
                        key={invitee.id}
                        onClick={() => chooseInvitee(invitee)}
                        role="option"
                        type="button"
                      >
                        {invitee.name}
                      </button>
                    ))
                  ) : (
                    <p className="px-3 py-2 text-sm text-guidance">
                      No invitees found.
                    </p>
                  )}
                </div>
              )}
              {inviteeError && (
                <p className="mt-2 text-sm text-moss" role="alert">
                  {inviteeError}
                </p>
              )}
            </div>

            <fieldset>
              <legend className="text-xs font-semibold tracking-eyebrow text-moss uppercase">
                Can you make it?
              </legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <label
                  className={`cursor-pointer rounded-xl border p-5 text-center ${
                    attendance === "yes"
                      ? "border-moss bg-mint text-ink"
                      : "border-mint-border bg-page text-guidance"
                  }`}
                >
                  <input
                    checked={attendance === "yes"}
                    className="sr-only"
                    name="attendance"
                    onChange={() => {
                      setAttendance("yes");
                      setSubmissionState("idle");
                    }}
                    required
                    type="radio"
                    value="yes"
                  />
                  <span className="block font-serif text-2xl">
                    Yes, with joy!
                  </span>
                  <span className="mt-1 block text-sm">
                    I&apos;ll be there.
                  </span>
                </label>
                <label
                  className={`cursor-pointer rounded-xl border p-5 text-center ${
                    attendance === "no"
                      ? "border-moss bg-mint text-ink"
                      : "border-mint-border bg-page text-guidance"
                  }`}
                >
                  <input
                    checked={attendance === "no"}
                    className="sr-only"
                    name="attendance"
                    onChange={() => {
                      setAttendance("no");
                      setSubmissionState("idle");
                    }}
                    required
                    type="radio"
                    value="no"
                  />
                  <span className="block font-serif text-2xl">
                    Regretfully, no
                  </span>
                  <span className="mt-1 block text-sm">
                    I can&apos;t make it.
                  </span>
                </label>
              </div>
            </fieldset>

            <button
              className="w-full rounded-full bg-moss px-6 py-3 text-base font-semibold tracking-label text-page disabled:cursor-not-allowed disabled:opacity-60"
              disabled={
                !selectedInvitee ||
                attendance === null ||
                submissionState === "submitting" ||
                submissionState === "success"
              }
              type="submit"
            >
              {submissionState === "submitting"
                ? "Saving your RSVP..."
                : "Save RSVP"}
            </button>
          </form>

          <p
            aria-live="polite"
            className="mt-8 text-sm leading-6 text-guidance"
          >
            {submissionState === "success"
              ? `Thank you, ${selectedInvitee?.name}. Your RSVP has been saved.`
              : submissionState === "error"
                ? errorMessage
                : "Please select your invitation and response when you're ready."}
          </p>
        </div>
      </motion.section>

      {isUpdateModalOpen &&
        selectedInvitee &&
        previousAttendance &&
        attendance && (
          <div
            aria-labelledby="rsvp-update-title"
            aria-modal="true"
            className="fixed inset-0 z-20 flex items-center justify-center bg-ink/40 p-5"
            role="dialog"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-ink/10 bg-card p-7 text-center shadow-card sm:p-9">
              <IvyCorners />
              <div className="relative">
                <p className="text-xs font-semibold tracking-eyebrow text-moss uppercase">
                  RSVP update
                </p>
                <h2
                  className="mt-3 font-serif text-3xl tracking-tight text-ink"
                  id="rsvp-update-title"
                >
                  {previousAttendance === attendance
                    ? "Your response is already saved"
                    : "Change your response?"}
                </h2>
                {previousAttendance === attendance ? (
                  <p className="mt-4 text-sm leading-6 text-guidance sm:text-base">
                    {selectedInvitee.name}, your existing response is already{" "}
                    <strong className="font-semibold text-ink">
                      {attendance === "yes"
                        ? "Yes, with joy!"
                        : "Regretfully, no"}
                    </strong>
                    . No changes are needed.
                  </p>
                ) : (
                  <p className="mt-4 text-sm leading-6 text-guidance sm:text-base">
                    {selectedInvitee.name}, you previously replied{" "}
                    <strong className="font-semibold text-ink">
                      {previousAttendance === "yes"
                        ? "Yes, with joy!"
                        : "Regretfully, no"}
                    </strong>
                    . This will change your answer to{" "}
                    <strong className="font-semibold text-moss">
                      {attendance === "yes"
                        ? "Yes, with joy!"
                        : "Regretfully, no"}
                    </strong>
                    .
                  </p>
                )}
                <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
                  <button
                    className="rounded-full border border-mint-border px-5 py-3 text-sm font-semibold text-ink"
                    onClick={() => setIsUpdateModalOpen(false)}
                    type="button"
                  >
                    {previousAttendance === attendance
                      ? "Close"
                      : "Keep previous response"}
                  </button>
                  {previousAttendance !== attendance && (
                    <button
                      className="rounded-full bg-moss px-5 py-3 text-sm font-semibold text-page"
                      onClick={() => void confirmUpdate()}
                      type="button"
                    >
                      Update RSVP
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      {isSuccessModalOpen && selectedInvitee && attendance && (
        <div
          aria-labelledby="rsvp-success-title"
          aria-modal="true"
          className="fixed inset-0 z-30 flex items-center justify-center bg-ink/40 p-5"
          role="dialog"
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-ink/10 bg-card p-7 text-center shadow-card sm:p-9">
            <IvyCorners />
            <div className="relative">
              <p className="text-xs font-semibold tracking-eyebrow text-moss uppercase">
                RSVP received
              </p>
              <h2
                className="mt-3 font-serif text-3xl tracking-tight text-ink"
                id="rsvp-success-title"
              >
                Thank you, {selectedInvitee.name}!
              </h2>
              <p className="mt-4 text-sm leading-6 text-guidance sm:text-base">
                {attendance === "yes"
                  ? "We're looking forward to having you join us for our special day."
                  : "Thank you for letting us know. We'll be thinking of you as we celebrate."}
              </p>
              <button
                className="mt-7 rounded-full bg-moss px-6 py-3 text-sm font-semibold text-page"
                onClick={() => setIsSuccessModalOpen(false)}
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
