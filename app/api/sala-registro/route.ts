export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(
      "https://heradigital.app.n8n.cloud/webhook/hera-sala-registro",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: body.nombre,
          email: body.email,
          telefono: body.telefono,
          profesion: body.profesion,
          source: "sala_estrategia",
        }),
      }
    );

    if (!response.ok) {
      return Response.json(
        { ok: false, error: "n8n_error" },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Error enviando lead a n8n:", error);

    return Response.json(
      { ok: false, error: "server_error" },
      { status: 500 }
    );
  }
}