import type { Metadata } from "next";
import { Encode_Sans_Semi_Expanded } from "next/font/google";

const encodeSans = Encode_Sans_Semi_Expanded({
  weight: ["700"],
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
          font-family: ${encodeSans.style.fontFamily} !important;
        }
      `}} />
      <div className={encodeSans.className}>
        {children}
      </div>
    </>
  );
}
