import { rsvpPool } from "@/lib/database";

export const runtime = "nodejs";

const uuidPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const inviteeId = searchParams.get("id")?.trim() ?? "";
  const query = searchParams.get("query")?.trim() ?? "";

  try {
    if (inviteeId) {
      if (!uuidPattern.test(inviteeId)) {
        return Response.json({ error: "Invalid invitee." }, { status: 400 });
      }

      const result = await rsvpPool.query(
        "SELECT id::text, name FROM public.invitees WHERE id = $1",
        [inviteeId],
      );

      return Response.json({ invitees: result.rows });
    }

    const result = await rsvpPool.query(
      "SELECT id::text, name FROM public.invitees WHERE name ILIKE $1 ORDER BY name ASC LIMIT 12",
      [`%${query}%`],
    );

    return Response.json({ invitees: result.rows });
  } catch (error) {
    console.error("Unable to load invitees.", error);
    return Response.json(
      { error: "We couldn't load invitees. Please try again." },
      { status: 500 },
    );
  }
}
