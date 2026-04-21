"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Mail, User, Clock } from "lucide-react";

export default function LivesLanding() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const nowMs = new Date().getTime();
      const nowUTC = new Date();
      const dayUTC = nowUTC.getUTCDay(); // 5 = Friday
      
      let daysUntilFriday = (5 - dayUTC + 7) % 7;
      
      // Target is Friday 00:00:00 UTC (which equals Thursday 19:00 COT/UTC-5)
      const targetUTC = new Date(Date.UTC(
         nowUTC.getUTCFullYear(),
         nowUTC.getUTCMonth(),
         nowUTC.getUTCDate() + daysUntilFriday,
         0, 0, 0
      ));

      if (nowMs >= targetUTC.getTime()) {
        targetUTC.setUTCDate(targetUTC.getUTCDate() + 7);
      }

      const diff = targetUTC.getTime() - nowMs;

      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
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

            <div className="text-center mb-10">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-6">
                Descubre cómo convertir tu conocimiento profesional en un{" "}
                <span className="text-hera-magenta inline-block italic">negocio digital rentable</span>.
              </h1>
              <div className="flex justify-center text-hera-white/70 font-sans leading-relaxed">
                <p className="text-[15px] md:text-[17px] max-w-2xl px-4 md:px-0">
                  Cada jueves a las 7:00 p. m. (hora Colombia) comparto en vivo estrategias, sistemas y decisiones reales para que psicólogos, médicos, odontólogos y otros profesionales construyan un negocio digital <strong className="text-hera-white font-semibold">sin depender todo el tiempo de consultas 1 a 1.</strong>
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
                <span className="relative z-10 flex items-center justify-center gap-2 text-[11px] md:text-xs">
                  QUIERO MI ACCESO AL LIVE
                </span>
              </button>
            </form>
          </div>

          {/* Banner Flotante Inferior superpuesto a la tarjeta */}
          <div className="relative -mt-6 mx-4 md:mx-8">
            <div className="bg-[#1A1A1A] border border-white/5 rounded-b-xl py-5 px-6 text-center shadow-lg">
              <p className="text-sm md:text-[15px] text-hera-white/80 leading-relaxed max-w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse hidden md:block"></span>
                Recibirás acceso, recordatorios y novedades por WhatsApp y correo electrónico.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── SECCIÓN: TRES PILARES / AULAS ── */}
      <section className="w-full pt-16 pb-24 px-4 z-10 relative">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-hera-white text-center mb-12 md:mb-16 max-w-3xl leading-snug">
            ¿Sientes que tu conocimiento <span className="text-hera-magenta italic">vale mucho más</span> de lo que hoy estás monetizando?
          </h2>

          {/* Grid de 3 tarjetas estilo "brutalismo premium" oscuro */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 p-px rounded-xl overflow-hidden w-full max-w-5xl text-left md:text-center">
            {/* Card 1 */}
            <div className="bg-[#121212] p-8 md:p-10 flex flex-col items-start md:items-center justify-start md:justify-center transition-colors hover:bg-[#151515] group">
              <span className="text-hera-magenta font-serif text-5xl mb-4 opacity-30 group-hover:opacity-100 transition-opacity">1</span>
              <p className="text-hera-white/70 font-sans leading-relaxed text-[15px] md:text-base">
                Esto es para ti si eres profesional y sientes que tu conocimiento <strong className="text-hera-white font-semibold">vale más de lo que hoy estás monetizando.</strong>
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#121212] p-8 md:p-10 flex flex-col items-start md:items-center justify-start md:justify-center transition-colors hover:bg-[#151515] group">
              <span className="text-hera-magenta font-serif text-5xl mb-4 opacity-30 group-hover:opacity-100 transition-opacity">2</span>
              <p className="text-hera-white/70 font-sans leading-relaxed text-[15px] md:text-base">
                Tal vez ya tienes experiencia, resultados y criterio profesional. Pero todavía no has logrado convertir eso en <strong className="text-hera-white font-semibold">una oferta digital clara, rentable y escalable.</strong>
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#121212] p-8 md:p-10 flex flex-col items-start md:items-center justify-start md:justify-center transition-colors hover:bg-[#151515] group">
              <span className="text-hera-magenta font-serif text-5xl mb-4 opacity-30 group-hover:opacity-100 transition-opacity">3</span>
              <p className="text-hera-white/70 font-sans leading-relaxed text-[15px] md:text-base">
                En estos lives vas a entender cómo estructurar un <strong className="text-hera-white font-semibold">modelo de negocio digital serio</strong>, simple y alineado con tu perfil profesional.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECCIÓN: QUÉ VAS A VER (NUEVO BLOQUE DE AUTORIDAD) ── */}
      <section className="w-full pt-12 pb-32 px-4 z-10 relative bg-[#0a0a0a] overflow-hidden border-t border-white/5">
        <div className="max-w-6xl mx-auto relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Columna Izquierda (Contenido y Checklist) */}
            <div className="lg:col-span-7 z-20 flex flex-col">
              <div className="bg-[#151515] border border-white/5 shadow-2xl rounded-t-2xl overflow-hidden relative flex-1 p-8 md:p-12">
                <span className="font-sans text-[11px] md:text-xs tracking-[0.2em] uppercase font-bold text-hera-white/50 mb-4 block">
                  El Programa en Vivo
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-hera-white leading-tight mb-10">
                  ¿Qué vas a ver en <span className="text-hera-magenta italic">estos lives?</span>
                </h2>

                <ul className="space-y-6 text-hera-white/80 font-sans text-[15px] md:text-base">
                  {[
                    "Cómo transformar tu experiencia profesional en una oferta digital de alto valor",
                    "Qué modelo de negocio digital funciona mejor para profesionales",
                    "Cómo vender mentorías, consultorías o programas sin volverte influencer",
                    "Qué errores frenan a la mayoría cuando intenta monetizar su conocimiento",
                    "Cómo construir un sistema más liviano, rentable y estratégico",
                    "Cómo empezar aunque todavía no tengas una audiencia grande"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 bg-hera-magenta/10 p-1 rounded-full border border-hera-magenta/30 shadow-[0_0_10px_rgba(225,48,131,0.2)]">
                        <Check className="w-4 h-4 text-hera-magenta" strokeWidth={3} />
                      </div>
                      <span className="leading-relaxed opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Banner Inferior: AUTORIDAD */}
              <div className="bg-gradient-to-r from-[#1A1A1A] to-[#121212] border border-t-0 border-white/5 rounded-b-2xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-1 h-full bg-hera-magenta" />
                <h3 className="font-sans text-[13px] tracking-[0.2em] uppercase font-bold text-hera-white/50 mb-4">
                  
                </h3>
                <h4 className="font-serif text-2xl md:text-3xl font-bold text-hera-white mb-6">
                  No es teoría. Es lo que estamos construyendo en Hera Digital.
                </h4>
                <div className="text-hera-white/60 font-sans text-sm md:text-[15px] space-y-4">
                  <p>
                    Estos lives están diseñados desde la experiencia real de construir ofertas, contenidos y sistemas de adquisición para profesionales que quieren independencia, posicionamiento y mejores ingresos.
                  </p>
                  <p className="text-hera-white font-semibold italic border-l-2 border-hera-magenta/50 pl-4 py-1">
                    "No vas a entrar a escuchar motivación vacía. Vas a entrar a entender estructura, estrategia y ejecución."
                  </p>
                </div>
              </div>
            </div>

            {/* Columna Derecha (Agenda Destacada) */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex">
              <div className="w-full h-full min-h-[400px] rounded-2xl bg-[#0a0a0a] border border-white/5 flex flex-col items-center justify-between p-10 text-center relative overflow-hidden shadow-2xl shadow-black/50 group">
                
                {/* Glow de fondo reaccionando al hover */}
                <div className="absolute inset-0 bg-gradient-to-tl from-hera-magenta/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-hera-magenta/10 blur-[100px] rounded-full group-hover:bg-hera-magenta/20 transition-colors duration-700" />
                
                {/* 1. Etiqueta Superior */}
                <div className="relative z-10 w-full mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-hera-magenta/20 bg-hera-magenta/5 mb-6">
                    <span className="w-2 h-2 rounded-full bg-hera-magenta animate-pulse" />
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-hera-magenta/90">Transmisión Semanal</span>
                  </div>
                  
                  <h4 className="font-serif text-2xl font-bold text-hera-white leading-tight mb-2">
                    Reserva este espacio <br className="hidden lg:block" /> cada semana
                  </h4>
                </div>

                {/* 2. Bloque Central: El "Ticket" de Fecha/Hora */}
                <div className="relative z-10 mb-8 w-full max-w-[280px]">
                  {/* YouTube Icon interactivo */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#121212] border border-white/10 rounded-xl flex items-center justify-center shadow-xl z-20 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(225,48,131,0.2)] transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hera-magenta"><path d="M2.5 7.17c.22-1.8 1.6-3.19 3.4-3.41C8.75 3.5 12 3.5 12 3.5s3.25 0 6.1.26c1.8.22 3.18 1.61 3.4 3.41.26 2.83.26 4.83.26 4.83s0 2-.26 4.83c-.22 1.8-1.6 3.19-3.4 3.41-2.85.26-6.1.26-6.1.26s-3.25 0-6.1-.26c-1.8-.22-3.18-1.61-3.4-3.41C2.24 14 2.24 12 2.24 12s0-2 .26-4.83z"/><polygon points="10 15 15 12 10 9 10 15" fill="currentColor" /></svg>
                  </div>

                  {/* Cuerpo del ticket */}
                  <div className="bg-[#151515] border border-white/10 rounded-2xl p-8 pt-10 shadow-2xl relative overflow-hidden group-hover:border-hera-magenta/30 transition-colors duration-500">
                    {/* Grid/Raya decorativa */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-hera-magenta to-transparent opacity-50" />
                    
                    <div className="flex flex-col gap-1 items-center">
                      <span className="font-serif text-3xl font-bold text-hera-white uppercase tracking-wider">Jueves</span>
                      <span className="font-sans text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-hera-white to-hera-white/50 tracking-tighter drop-shadow-md my-2">
                        7:00 <span className="text-2xl text-hera-white/60">P.M.</span>
                      </span>
                      <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-hera-magenta mt-1">
                        Hora Colombia
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Párrafo descriptivo base */}
                <div className="relative z-10 w-full flex-1 flex items-end">
                  <p className="text-[13px] md:text-[14px] text-hera-white/50 font-sans leading-relaxed px-4 text-balance">
                    Un horario pensado para que puedas conectarte después de tu jornada y aterrizar, con calma, decisiones importantes para tu negocio digital.
                  </p>
                </div>
                
                {/* Sombra base */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECCIÓN: FILTRO DE AUDIENCIA ── */}
      <section className="w-full pt-20 pb-28 px-4 z-10 relative bg-hera-black border-t border-white/5">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-hera-white text-center mb-12 md:mb-16 leading-tight">
            Estos lives <span className="text-hera-magenta italic">no son</span> para todo el mundo
          </h2>

          <div className="flex flex-col gap-6 w-full">
            {/* NO 1 */}
            <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 md:p-8 flex items-start gap-4 md:gap-6 hover:bg-[#151515] transition-colors">
              <div className="mt-1 bg-white/5 p-2 rounded-full text-hera-white/40 shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </div>
              <p className="text-hera-white/70 font-sans text-[15px] md:text-[17px] leading-relaxed">
                No es para personas que buscan <strong className="text-hera-white font-semibold">dinero rápido</strong> sin construir nada sólido.
              </p>
            </div>

            {/* NO 2 */}
            <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 md:p-8 flex items-start gap-4 md:gap-6 hover:bg-[#151515] transition-colors">
              <div className="mt-1 bg-white/5 p-2 rounded-full text-hera-white/40 shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </div>
              <p className="text-hera-white/70 font-sans text-[15px] md:text-[17px] leading-relaxed">
                No es para quien quiere seguir consumiendo contenido <strong className="text-hera-white font-semibold">sin ejecutar</strong>.
              </p>
            </div>

            {/* SÍ (Destacado) */}
            <div className="relative mt-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-hera-magenta/50 to-hera-magenta/0 rounded-2xl blur opacity-20"></div>
              <div className="bg-[#151515] border border-hera-magenta/30 rounded-2xl p-6 md:p-8 lg:p-10 flex items-start gap-4 md:gap-6 relative shadow-[0_10px_40px_rgba(225,48,131,0.15)]">
                <div className="mt-1 bg-hera-magenta/10 p-2 rounded-full text-hera-magenta shrink-0 border border-hera-magenta/20 shadow-[0_0_15px_rgba(225,48,131,0.2)]">
                  <Check strokeWidth={3} className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-sans text-[11px] md:text-xs tracking-[0.2em] uppercase font-bold text-hera-magenta mb-3 block">
                    Esto SÍ es para ti
                  </span>
                  <p className="text-hera-white/90 font-sans text-[15px] md:text-[17px] leading-relaxed">
                    Sí es para profesionales que quieren <strong className="text-hera-white font-bold">pensar mejor, estructurar mejor y construir un negocio digital con criterio.</strong>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECCIÓN FINAL (CTA Cierre + Minimal Footer) ── */}
      <section className="w-full bg-hera-black pt-20 flex flex-col items-center relative z-10 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center px-4 mb-20 w-full">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-hera-white mb-6 leading-tight max-w-3xl mx-auto">
            Cada jueves puede convertirse en una <span className="text-hera-magenta italic">decisión importante</span> para tu futuro profesional
          </h2>
          <p className="text-hera-white/70 font-sans text-[15px] md:text-[17px] leading-relaxed max-w-2xl mx-auto mb-12">
            Si quieres dejar de improvisar y empezar a construir un negocio digital con dirección, este espacio es para ti.
          </p>

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
              className="group relative w-full md:w-auto rounded-lg bg-hera-magenta py-4 px-10 font-sans text-xs md:text-[13px] font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-opacity-90 overflow-hidden shadow-2xl shadow-hera-magenta/20"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20" />
              </div>
              <span className="relative z-10">QUIERO ENTRAR AL LIVE DEL JUEVES</span>
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
