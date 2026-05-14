import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// ─── Cambia este valor por tu Pixel ID real de Meta ───────────────────────────
const META_PIXEL_ID = "TU_PIXEL_ID";

export const metadata: Metadata = {
  metadataBase: new URL("https://heradigital.co"), // Cambia esto si el dominio es diferente
  title: {
    default: "Hera Digital | Impulsa tu Profesión y Escala tus Ventas",
    template: "%s | Hera Digital",
  },
  description:
    "Ayudamos a profesionales y emprendedores a construir autoridad, escalar ventas y monetizar su conocimiento a través de consultoría estratégica, mentorías y Growth Marketing.",
  keywords: [
    "consultoría estratégica marketing",
    "mentorías para profesionales",
    "marca personal",
    "productos digitales",
    "growth marketing",
    "paid ads",
    "escuela de negocios digitales",
    "posicionamiento digital",
  ],
  authors: [{ name: "Hera Digital LLC" }],
  creator: "Hera Digital LLC",
  publisher: "Hera Digital LLC",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://heradigital.co",
    title: "Hera Digital | Escuela de Negocios y Consultoría Digital",
    description:
      "Ayudamos a profesionales y emprendedores a construir autoridad, escalar ventas y crear productos digitales rentables.",
    siteName: "Hera Digital",
    images: [
      {
        url: "/og-image.jpg", // Asegúrate de tener una imagen en la carpeta 'public' llamada og-image.jpg (tamaño recomendado: 1200x630px)
        width: 1200,
        height: 630,
        alt: "Hera Digital - Marketing y Consultoría",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hera Digital | Impulsa tu Profesión",
    description:
      "Convertimos expertos invisibles en referentes indiscutibles con estrategias de marketing probadas.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-hera-black text-hera-white antialiased">
        {children}

        {/* ── Meta Pixel ─────────────────────────────────────────────────── */}
        {/* strategy="afterInteractive" → carga después del hydration, sin bloquear render */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Noscript fallback para navegadores sin JS */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
