import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clases en Vivo para Profesionales — Hera Digital",
  description:
    "Descubre cómo estructurar y monetizar tu conocimiento en un negocio digital rentable. Estrategias semanales en vivo para psicólogos, médicos y profesionales.",
  openGraph: {
    title: "Clases en Vivo: Negocios Digitales para Profesionales — Hera Digital",
    description: "Cada jueves en vivo: estrategias reales para convertir tu experiencia en una oferta digital clara y escalable, sin depender de la consulta 1 a 1.",
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
