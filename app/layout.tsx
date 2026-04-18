import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// ─── Cambia este valor por tu Pixel ID real de Meta ───────────────────────────
const META_PIXEL_ID = "TU_PIXEL_ID";

export const metadata: Metadata = {
  title: "Hera Digital — Marketing de Autoridad",
  description:
    "Convertimos expertos en referentes. Personal branding y growth marketing para profesionales y ejecutivos que buscan posicionamiento de alto nivel.",
  keywords: [
    "personal branding",
    "growth marketing",
    "paid ads",
    "meta ads",
    "google ads",
    "agencia marketing",
    "posicionamiento personal",
    "marca personal",
  ],
  openGraph: {
    title: "Hera Digital — Marketing de Autoridad",
    description:
      "Convertimos expertos en referentes. Agencia premium de personal branding y growth marketing.",
    type: "website",
    locale: "es_CO",
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
