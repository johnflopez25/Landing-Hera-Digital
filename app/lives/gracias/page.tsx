import { Check } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-hera-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* ── Evento de conversión (Registro completado) ──────────────────── */}
      {/* Se dispara aquí porque esta página solo se alcanza tras un envío exitoso del formulario */}
      <Script
        id="lead-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (window.fbq) { fbq('track', 'Lead'); }
            if (window.gtag) { gtag('event', 'generate_lead', { event_category: 'Sala de Estrategia', event_label: 'Registro completado' }); }
          `,
        }}
      />

      {/* Background Glow Premium */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-hera-red/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl w-full z-10 text-center flex flex-col items-center pt-10 pb-20">

        {/* Ícono animado de WhatsApp — recurso visual que anticipa la acción a completar */}
        <div className="relative mb-6 flex items-center justify-center w-20 h-20">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366]/30 animate-ping" />
          <span className="absolute inline-flex h-14 w-14 rounded-full bg-[#25D366]/20 animate-pulse" />
          <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_0_35px_rgba(37,211,102,0.5)]">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
            </svg>
          </div>
        </div>

        {/* Etiqueta de Éxito */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 mb-8">
          <Check className="w-4 h-4 text-green-500" />
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-green-500">Registro Casi Completo</span>
        </div>

        {/* Título Principal */}
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-hera-white leading-tight mb-4">
          Casi listo. <span className="text-hera-red italic">Falta un paso más.</span>
        </h1>
        <p className="text-hera-white/70 font-sans text-[15px] md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Tu registro para la Sala de Estrategia quedó confirmado. Recibirás el enlace de acceso y los recordatorios en el grupo de WhatsApp y correo electrónico. Antes de irte, únete al grupo para concluir este paso.
        </p>

        {/* Botón Call to Action Final / Siguiente Paso */}
        <Link
          href="https://chat.whatsapp.com/BDGxUIHordc5yZJLAsUZDp"
          target="_blank"
          className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 rounded-lg bg-[#25D366] py-5 px-12 font-sans text-xs md:text-[14px] font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-[#1EBE57] overflow-hidden shadow-2xl shadow-[#25D366]/30"
        >
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative h-full w-8 bg-white/20" />
          </div>
          <svg viewBox="0 0 24 24" className="relative z-10 w-5 h-5 fill-white shrink-0" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
          </svg>
          <span className="relative z-10">ENTRAR AL GRUPO DE WHATSAPP</span>
        </Link>
        
        {/* Anti-marketing final */}
        <p className="mt-6 text-[11px] text-hera-white/40 tracking-widest uppercase font-mono border-t border-white/5 pt-4">
          Asegura tu participación antes de que se agoten los cupos.
        </p>

      </div>
    </main>
  );
}
