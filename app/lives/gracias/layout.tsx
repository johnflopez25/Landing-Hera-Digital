import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casi listo — Hera Digital",
  description: "Paso final para completar tu registro.",
  robots: {
    index: false, // ¡Súper importante! Evita que Google indexe esta página secreta
    follow: false,
  },
};

export default function GraciasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
