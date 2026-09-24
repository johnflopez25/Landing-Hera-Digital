import type { Metadata } from "next";
import { Barlow_Condensed, Inter, IBM_Plex_Mono } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sala de Estrategia — Hera Digital",
  description:
    "Si paras, no facturas. Cada lunes a las 6:00 p. m. (hora Colombia) descubre en vivo tu techo real -conocimiento, oferta o sistema- y aprende a convertir tu experiencia profesional en activos propios.",
  alternates: {
    // Canonical hacia el subdominio dedicado, para evitar contenido duplicado con /lives
    canonical: "https://saladeestrategia.heradigital.co",
  },
  openGraph: {
    title: "Sala de Estrategia: el live semanal de Hera Digital para profesionales",
    description: "Cada lunes en vivo por YouTube: estrategias reales para convertir tu experiencia en oferta, sistema y activos propios, sin depender solo de vender tu tiempo.",
    type: "website",
    locale: "es_CO",
  },
};

export default function LivesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .font-serif {
          font-family: var(--font-display) !important;
        }
        .font-sans {
          font-family: var(--font-sans) !important;
        }
        .font-mono {
          font-family: var(--font-mono) !important;
        }
      `}} />
      <div
        className={inter.className}
        style={{
          "--font-display": barlowCondensed.style.fontFamily,
          "--font-sans": inter.style.fontFamily,
          "--font-mono": ibmPlexMono.style.fontFamily,
        } as React.CSSProperties}
      >
        {children}
      </div>
    </>
  );
}
