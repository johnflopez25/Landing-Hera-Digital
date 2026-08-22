import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─── Subdominio dedicado a la Sala de Estrategia ───────────────────────────
// Sirve internamente el contenido de /lives cuando la petición llega por este
// host, sin cambiar la URL visible para el usuario (rewrite, no redirect).
const LIVES_SUBDOMAIN = "saladeestrategia.heradigital.co";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  const isLivesSubdomain =
    hostname === LIVES_SUBDOMAIN || hostname.startsWith(`${LIVES_SUBDOMAIN}:`);

  if (isLivesSubdomain && !pathname.startsWith("/lives")) {
    const url = request.nextUrl.clone();
    url.pathname = `/lives${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Excluye internos de Next.js y cualquier archivo estático (los que tienen extensión,
    // ej. /experto.png, /og-image.jpg) para que sigan sirviéndose desde /public sin reescribir.
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
