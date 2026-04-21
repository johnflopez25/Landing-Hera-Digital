"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Mail, User, Clock } from "lucide-react";

export default function LivesLanding() {
  // Estado para el contador simulado
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 13,
    minutes: 34,
    seconds: 10,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-hera-black text-hera-white font-sans flex flex-col relative overflow-hidden">
      {/* Glow de fondo simulando el estilo de luz de la landing principal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hera-magenta/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ── BARRA SUPERIOR (Cuentadown) ── */}
      <header className="w-full bg-[#0a0a0a] border-b border-white/5 py-4 px-6 fixed top-0 z-50 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 backdrop-blur-md">
        <div className="flex items-center gap-2 text-hera-white/70 text-xs font-medium tracking-wider uppercase">
          <Clock className="w-4 h-4 text-hera-magenta" />
          La clase en directo comienza en...
        </div>

        {/* Bloques de tiempo */}
        <div className="flex items-center gap-4 text-center">
          {[
            { label: "DÍAS", value: timeLeft.days },
            { label: "HORAS", value: timeLeft.hours },
            { label: "MINUTOS", value: timeLeft.minutes },
            { label: "SEGUNDOS", value: timeLeft.seconds },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-serif text-2xl md:text-3xl font-bold leading-none text-hera-white">
                {item.value.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-hera-white/50 mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* ── CONTENIDO PRINCIPAL (Card Central) ── */}
      <section className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-2xl"
        >
          {/* Card Principal - Diseño Glassmorphism Premium */}
          <div className="bg-[#151515] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Pequeño acento de color en la parte superior de la tarjeta */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hera-black via-hera-magenta to-hera-black opacity-50" />

            <div className="text-center mb-8">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Aprende a construir{" "}
                <span className="text-hera-magenta inline-block italic">autoridad digital</span>{" "}
                y posicionar tu marca.
              </h1>
              <div className="flex items-center justify-center gap-2 text-hera-white/80 font-medium">
                <Check className="w-5 h-5 text-hera-magenta" />
                <p className="text-[15px] md:text-base">
                  Clases <span className="text-hera-magenta">gratuitas</span> en directo todos los martes a las 19:00.
                </p>
              </div>
            </div>

            {/* Formulario */}
            <form className="flex flex-col gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-hera-white/30" />
                <input 
                  type="text" 
                  placeholder="Ingresa tu nombre *" 
                  required
                  className="w-full bg-hera-black border border-white/10 focus:border-hera-magenta rounded-lg py-4 pl-12 pr-4 text-hera-white placeholder:text-hera-white/30 outline-none transition-colors duration-200"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-hera-white/30" />
                <input 
                  type="email" 
                  placeholder="Tu mejor correo electrónico *" 
                  required
                  className="w-full bg-hera-black border border-white/10 focus:border-hera-magenta rounded-lg py-4 pl-12 pr-4 text-hera-white placeholder:text-hera-white/30 outline-none transition-colors duration-200"
                />
              </div>

              <button 
                type="submit"
                className="group relative w-full rounded-lg bg-hera-magenta py-4 px-8 font-sans text-[13px] font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-opacity-90 overflow-hidden mt-2"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Regístrate ahora y asegura tu lugar
                </span>
              </button>
            </form>
          </div>

          {/* Banner Flotante Inferior superpuesto a la tarjeta */}
          <div className="relative -mt-6 mx-4 md:mx-8">
            <div className="bg-[#1A1A1A] border border-white/5 rounded-b-xl py-5 px-6 text-center shadow-lg">
              <p className="text-sm md:text-[15px] text-hera-white/70 leading-relaxed max-w-[90%] mx-auto">
                Las clases estarán disponibles de forma gratuita <strong className="text-hera-white font-semibold">solo durante 7 días</strong> después de la transmisión. Regístrate ahora para no perderte la próxima.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── SECCIÓN: TRES PILARES / AULAS ── */}
      <section className="w-full pt-16 pb-24 px-4 z-10 relative">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-hera-white text-center mb-10 max-w-3xl">
            Conoce las estrategias que están redefiniendo el{" "}
            <span className="text-hera-magenta italic">marketing de autoridad</span>
          </h2>

          {/* Fila de logos/plataformas */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 focus-within:opacity-100 hover:opacity-100 transition-opacity duration-300 mb-16 grayscale">
            {[
              {
                name: "INSTAGRAM",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                )
              },
              {
                name: "FACEBOOK",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                )
              },
              {
                name: "YOUTUBE",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.17c.22-1.8 1.6-3.19 3.4-3.41C8.75 3.5 12 3.5 12 3.5s3.25 0 6.1.26c1.8.22 3.18 1.61 3.4 3.41.26 2.83.26 4.83.26 4.83s0 2-.26 4.83c-.22 1.8-1.6 3.19-3.4 3.41-2.85.26-6.1.26-6.1.26s-3.25 0-6.1-.26c-1.8-.22-3.18-1.61-3.4-3.41C2.24 14 2.24 12 2.24 12s0-2 .26-4.83z"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
                )
              },
              {
                name: "TIKTOK",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M9 0h1.98c.144 2.096 1.522 3.69 3.659 3.905v3.134c-1.29-.028-2.457-.45-3.483-1.126V11.23c0 3.32-2.613 6.012-5.836 6.012S-.516 14.549-.516 11.23 2.193 5.218 5.418 5.218c.348 0 .685.032 1.01.092v3.298a2.76 2.76 0 0 0-.616-.07c-1.488 0-2.694 1.25-2.694 2.793 0 1.543 1.206 2.792 2.694 2.792 1.488 0 2.695-1.25 2.695-2.792V0h.493Z"/></svg>
                )
              },
              {
                name: "GOOGLE",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/></svg>
                )
              },
              {
                name: "LINKEDIN",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                )
              },
              {
                name: "X",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                )
              }
            ].map((platform) => (
              <div key={platform.name} className="flex items-center gap-2 text-[11px] md:text-[13px] tracking-[0.15em] font-sans font-bold text-hera-white hover:text-hera-magenta transition-colors duration-200">
                <span className="opacity-80 flex items-center justify-center">{platform.icon}</span>
                {platform.name}
              </div>
            ))}
          </div>

          {/* Grid de 3 tarjetas estilo "brutalismo premium" oscuro */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 p-px rounded-xl overflow-hidden w-full max-w-5xl">
            {/* Card 1 */}
            <div className="bg-[#121212] p-8 md:p-10 text-center flex flex-col items-center justify-center">
              <p className="text-hera-white/80 font-sans leading-relaxed text-[15px] md:text-base">
                Contenido gratuito con todo lo que necesitas para escalar tu marca en{" "}
                <strong className="text-hera-magenta font-semibold">cualquier plataforma</strong>.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#121212] p-8 md:p-10 text-center flex flex-col items-center justify-center">
              <p className="text-hera-white/80 font-sans leading-relaxed text-[15px] md:text-base">
                Conocimiento real extraído directamente de la construcción de marcas de{" "}
                <strong className="text-hera-magenta font-semibold">alto impacto y autoridad</strong>.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#121212] p-8 md:p-10 text-center flex flex-col items-center justify-center">
              <p className="text-hera-white/80 font-sans leading-relaxed text-[15px] md:text-base">
                Entregando de forma 100% libre lo que los cursos de pago y masterclasses{" "}
                <strong className="text-hera-magenta font-semibold">no se atreven</strong> a enseñarte.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECCIÓN: SOBRE EL EXPERTO ── */}
      <section className="w-full pt-12 pb-32 px-4 z-10 relative bg-hera-black overflow-hidden border-t border-white/5">
        <div className="max-w-6xl mx-auto relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            
            {/* Columna Izquierda (Card Principal) */}
            <div className="lg:col-span-7 z-20">
              <div className="bg-[#151515] border border-white/5 shadow-2xl rounded-2xl overflow-hidden relative">
                
                {/* Contenido principal de texto */}
                <div className="p-8 md:p-12 text-center lg:text-left">
                  <span className="font-sans text-[11px] md:text-xs tracking-[0.2em] uppercase font-bold text-hera-white/50 mb-4 block">
                    Aprende directamente con el...
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-hera-white leading-tight mb-8">
                    Especialista en creación de <span className="text-hera-magenta italic">autoridad premium</span>.
                  </h2>

                  <div className="space-y-6 text-hera-white/70 font-sans leading-relaxed text-[15px] md:text-base">
                    <p>
                      <strong>Líder de Estrategia</strong> es el responsable de dictar el rumbo del posicionamiento élite en la región con sus metodologías exclusivas. Ha asesorado a marcas que superan límites de facturación y es creador de la {" "}
                      <strong className="text-hera-magenta">comunidad de growth marketing más activa del sector</strong>.
                    </p>
                    <p>
                      Tras años trabajando en las sombras para CEOs, conferencistas y ejecutivos de alto perfil, hoy abre sus conocimientos avanzados a través de estas clases gratuitas en vivo.
                    </p>
                  </div>
                </div>

                {/* Banner Inferior dentro de la card (Con diseño responsivo adaptado) */}
                <div className="relative mt-4 md:mt-0">
                  {/* IMAGEN MÓVIL: Muestra un placeholder de avatar superpuesto a la izquierda del banner SOLO en versión móvil/tablet */}
                  <div className="lg:hidden absolute bottom-0 left-0 w-[45%] max-w-[180px] h-[130%] flex items-end z-10">
                    <div className="w-full h-full bg-[#0a0a0a] border-t border-r border-dashed border-white/20 rounded-tr-2xl flex flex-col items-center justify-end pb-4 text-center relative overflow-hidden shadow-[10px_0_20px_rgba(0,0,0,0.5)] bg-gradient-to-t from-hera-black to-[#0f0f0f]">
                      <User className="w-10 h-10 text-hera-white/10 mb-2 relative z-10" />
                      <p className="text-hera-white/30 font-sans text-[10px] uppercase font-bold px-2 relative z-10">
                        Foto Experto
                      </p>
                      {/* Fade negro sutil en la base para disolver la imagen si fuera real */}
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Barra oscura de membresía */}
                  <div className="bg-gradient-to-r from-[#1A1A1A] to-[#121212] border-t border-white/5 pt-10 pb-6 pr-6 pl-[45%] md:pl-[40%] lg:pl-12 lg:py-8 lg:pt-8 flex flex-col lg:flex-row items-end lg:items-center lg:justify-start gap-2 lg:gap-4 relative overflow-hidden z-0">
                    
                    {/* Icono de hashtag oculto en móvil por espacio */}
                    <div className="hidden lg:flex items-center justify-center text-hera-magenta/20">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><path d="M4 9h16"/><path d="M4 15h16"/><path d="M10 3L8 21"/><path d="M16 3l-2 18"/></svg>
                    </div>

                    <div className="text-right lg:text-left w-full">
                      <h3 className="font-sans text-xl md:text-3xl font-bold text-hera-white tracking-tight">
                        +10.000 miembros
                      </h3>
                      <p className="font-sans text-[10px] md:text-xs tracking-[0.1em] text-hera-white/50 uppercase mt-1">
                        Comunidad de Autoridad
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Columna de Imagen DESKTOP (Derecha) - Oculta en móvil */}
            <div className="hidden lg:flex lg:col-span-5 relative mt-8 lg:mt-0 justify-center block z-10 lg:-ml-12">
              <div className="w-full max-w-none aspect-[3/4] rounded-2xl bg-[#0a0a0a] border border-dashed border-white/20 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden shadow-2xl shadow-black/50">
                <User className="w-16 h-16 text-hera-white/10 mb-4" />
                <p className="text-hera-white/30 font-sans text-sm tracking-wide z-10">
                  [Espacio para foto del experto] <br />
                  <span className="text-xs opacity-50 mt-2 block">Se sugiere PNG transparente recortado,<br/>en escala de grises para max. contraste.</span>
                </p>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-hera-black to-transparent pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-hera-magenta/10 blur-[80px]" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECCIÓN FINAL (CTA Cierre + Minimal Footer) ── */}
      <section className="w-full bg-hera-black pt-20 flex flex-col items-center relative z-10 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center px-4 mb-20 w-full">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-hera-white mb-10">
            Asegura tu acceso a la <span className="text-hera-magenta italic">próxima masterclass</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
            {/* Íconos Izquierda */}
            <div className="hidden md:flex items-center gap-6 text-hera-white/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.17c.22-1.8 1.6-3.19 3.4-3.41C8.75 3.5 12 3.5 12 3.5s3.25 0 6.1.26c1.8.22 3.18 1.61 3.4 3.41.26 2.83.26 4.83.26 4.83s0 2-.26 4.83c-.22 1.8-1.6 3.19-3.4 3.41-2.85.26-6.1.26-6.1.26s-3.25 0-6.1-.26c-1.8-.22-3.18-1.61-3.4-3.41C2.24 14 2.24 12 2.24 12s0-2 .26-4.83z"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
            </div>

            {/* BOTÓN CTA */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group relative w-full md:w-auto rounded-lg bg-hera-magenta py-4 px-12 font-sans text-[13px] font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-opacity-90 overflow-hidden shadow-2xl shadow-hera-magenta/20"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20" />
              </div>
              <span className="relative z-10">¡Quiero Registrarme!</span>
            </button>

            {/* Íconos Derecha */}
            <div className="hidden md:flex items-center gap-6 text-hera-white/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor"><path d="M9 0h1.98c.144 2.096 1.522 3.69 3.659 3.905v3.134c-1.29-.028-2.457-.45-3.483-1.126V11.23c0 3.32-2.613 6.012-5.836 6.012S-.516 14.549-.516 11.23 2.193 5.218 5.418 5.218c.348 0 .685.032 1.01.092v3.298a2.76 2.76 0 0 0-.616-.07c-1.488 0-2.694 1.25-2.694 2.793 0 1.543 1.206 2.792 2.694 2.792 1.488 0 2.695-1.25 2.695-2.792V0h.493Z"/></svg>
            </div>
          </div>
        </div>

        {/* Minimal Footer Legal */}
        <div className="w-full bg-[#0a0a0a] py-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-[11px] md:text-xs text-hera-white/40 font-sans tracking-wide">
              © {new Date().getFullYear()} Hera Digital. Todos los derechos reservados.
            </span>
            
            <span className="font-serif font-black text-xl tracking-widest text-hera-white opacity-80 mx-auto md:mx-0">
              HERA
            </span>

            <div className="flex items-center gap-4 text-[11px] md:text-xs text-hera-white/40 font-sans">
              <a href="#" className="hover:text-hera-white/80 transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-hera-white/80 transition-colors">Términos de Uso</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
