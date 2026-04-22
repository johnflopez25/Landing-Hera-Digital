import { Check } from "lucide-react";
import Link from "next/link";

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-hera-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Glow Premium */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-hera-magenta/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl w-full z-10 text-center flex flex-col items-center pt-10 pb-20">
        
        {/* Etiqueta de Éxito */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 mb-8">
          <Check className="w-4 h-4 text-green-500" />
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-green-500">Registro Casi Completo</span>
        </div>

        {/* Título Principal */}
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-hera-white leading-tight mb-4">
          Casi listo. <span className="text-hera-magenta italic">Falta un paso más.</span>
        </h1>
        <p className="text-hera-white/70 font-sans text-[15px] md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Hacer las cosas bien requiere atención. Mira este video obligatorio (dura solo un par de minutos) donde te revelo las reglas de la clase en vivo.
        </p>

        {/* Contenedor del Video (Placeholder Dinámico) */}
        <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(225,48,131,0.05)] bg-[#0a0a0a] aspect-video flex items-center justify-center group mb-12">
          {/* Este overlay es el placeholder. Cuando pongas el Youtube Iframe, borra o comenta este overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-hera-white/30 group-hover:text-hera-magenta/60 transition-colors cursor-pointer bg-[#121212]">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <span className="font-sans text-xs tracking-widest uppercase font-bold text-center px-4">
              El Embed de tu Video de YouTube va justo aquí
            </span>
          </div>

          {/* ESTE ES EL FORMATO PARA EL VIDEO DE YOUTUBE:
          <iframe 
            className="absolute top-0 left-0 w-full h-full z-10"
            src="https://www.youtube.com/embed/RemplazarIDYoutube?autoplay=1&controls=1&rel=0&modestbranding=1" 
            title="Video de Bienvenida" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
           */}
        </div>

        {/* Botón Call to Action Final / Siguiente Paso */}
        <Link 
          href="https://chat.whatsapp.com/TU_GRUPO_DE_WHATSAPP" 
          target="_blank"
          className="group relative w-full md:w-auto rounded-lg bg-hera-magenta py-5 px-12 font-sans text-xs md:text-[14px] font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-opacity-90 overflow-hidden shadow-2xl shadow-hera-magenta/20"
        >
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative h-full w-8 bg-white/20" />
          </div>
          <span className="relative z-10">UNIRSE AL GRUPO VIP EXCLUSIVO</span>
        </Link>
        
        {/* Anti-marketing final */}
        <p className="mt-6 text-[11px] text-hera-white/40 tracking-widest uppercase font-mono border-t border-white/5 pt-4">
          Cerraremos acceso al grupo 24 horas antes del live.
        </p>

      </div>
    </main>
  );
}
