import { NextResponse } from "next/server";

export const runtime = "nodejs"; // safe for server-side fetch

type Payload = {
  email?: string;
  name?: string;
};

export async function POST(req: Request) {
  try {
    const { email, name }: Payload = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ ok: false, error: "Missing email" }, { status: 400 });
    }

    const token = process.env.MAILERLITE_API_TOKEN;
    const groupId = process.env.MAILERLITE_GROUP_ID;

    if (!token || !groupId) {
      return NextResponse.json(
        { ok: false, error: "Server misconfigured: missing MailerLite env vars" },
        { status: 500 }
      );
    }

    const res = await fetch(`https://connect.mailerlite.com/api/subscribers`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        fields: name ? { name } : undefined,
        groups: [groupId],
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "MailerLite error", details: data },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
