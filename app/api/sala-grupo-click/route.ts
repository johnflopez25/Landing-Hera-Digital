import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(
      "https://heradigital.app.n8n.cloud/webhook/hera-sala-grupo-click",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: body.email,
          evento: "CLICK_WHATSAPP",
          source: "sala_estrategia",
        }),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, error: "n8n_error" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500 }
    );
  }
}
