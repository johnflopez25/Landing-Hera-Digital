import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regístrate al Live Exclusivo — Hera Digital",
  description:
    "Descubre cómo posicionar tu marca personal y monetizar tu autoridad en nuestro próximo live exclusivo para profesionales.",
  openGraph: {
    title: "Live Exclusivo — Hera Digital",
    description: "Aprende las estrategias de personal branding y growth marketing.",
    type: "website",
    locale: "es_CO",
  },
};

export default function LivesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Aquí no hay <body> ni <html> porque se heredan del layout raíz.
  // Este layout existe únicamente para inyectar los metadatos específicos arriba.
  return <>{children}</>;
}
