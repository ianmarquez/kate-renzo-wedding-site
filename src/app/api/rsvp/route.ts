import { rsvpPool } from "@/lib/database";

export const runtime = "nodejs";

type RsvpRequest = {
  going?: unknown;
  inviteeId?: unknown;
};

const uuidPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function GET(request: Request) {
  const inviteeId =
    new URL(request.url).searchParams.get("inviteeId")?.trim() ?? "";

  if (!uuidPattern.test(inviteeId)) {
    return Response.json(
      { error: "Please select a valid invitee." },
      { status: 400 },
    );
  }

  const result = await rsvpPool.query<{ going: boolean }>(
    "SELECT going FROM public.rsvp_responses WHERE invitee_id = $1",
    [inviteeId],
  );

  if (!result.rows[0]) {
    return Response.json({ error: "No RSVP found." }, { status: 404 });
  }

  return Response.json({ going: result.rows[0].going });
}

export async function POST(request: Request) {
  let body: RsvpRequest;

  try {
    body = (await request.json()) as RsvpRequest;
  } catch {
    return Response.json({ error: "Invalid RSVP request." }, { status: 400 });
  }

  const inviteeId =
    typeof body.inviteeId === "string" ? body.inviteeId.trim() : "";
  const going = body.going;

  if (!uuidPattern.test(inviteeId) || typeof going !== "boolean") {
    return Response.json(
      { error: "Please select a valid invitee and attendance response." },
      { status: 400 },
    );
  }

  try {
    await rsvpPool.query(
      "INSERT INTO public.rsvp_responses (invitee_id, going) VALUES ($1, $2)",
      [inviteeId, going],
    );
  } catch (error) {
    if (typeof error === "object" && error && "code" in error) {
      if (error.code === "23503") {
        return Response.json({ error: "Invitee not found." }, { status: 404 });
      }

      if (error.code === "23505") {
        return Response.json(
          { error: "An RSVP has already been submitted for this invitee." },
          { status: 409 },
        );
      }
    }

    console.error("Unable to save RSVP.", error);
    return Response.json(
      { error: "We couldn't save your RSVP. Please try again." },
      { status: 500 },
    );
  }

  return Response.json({ success: true }, { status: 201 });
}

export async function PATCH(request: Request) {
  let body: RsvpRequest;

  try {
    body = (await request.json()) as RsvpRequest;
  } catch {
    return Response.json({ error: "Invalid RSVP request." }, { status: 400 });
  }

  const inviteeId =
    typeof body.inviteeId === "string" ? body.inviteeId.trim() : "";
  const going = body.going;

  if (!uuidPattern.test(inviteeId) || typeof going !== "boolean") {
    return Response.json(
      { error: "Please select a valid invitee and attendance response." },
      { status: 400 },
    );
  }

  const result = await rsvpPool.query(
    "UPDATE public.rsvp_responses SET going = $2 WHERE invitee_id = $1 RETURNING id",
    [inviteeId, going],
  );

  if (!result.rowCount) {
    return Response.json(
      { error: "No RSVP found for this invitee." },
      { status: 404 },
    );
  }

  return Response.json({ success: true });
}
