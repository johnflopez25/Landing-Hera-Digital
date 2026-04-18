"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      className="relative bg-hera-black section-pad overflow-hidden"
    >
      {/* ─── SPOTLIGHT LIGHT BEAM (the star of this section) ─────────────── */}

      {/* 1. The thin glowing bar at the very top — like a neon strip light */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width:  "520px",
          height: "2px",
          background: "linear-gradient(90deg, transparent 0%, #7b2fff 20%, #E13083 50%, #7b2fff 80%, transparent 100%)",
          boxShadow: "0 0 12px 3px rgba(225,48,131,0.8), 0 0 40px 10px rgba(123,47,255,0.5)",
          filter: "blur(0.5px)",
        }}
      />

      {/* 2. Wide cone glow spreading downward — the "spotlight" fan */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width:  "900px",
          height: "600px",
          background: "conic-gradient(from 270deg at 50% 0%, transparent 35%, rgba(123,47,255,0.18) 45%, rgba(225,48,131,0.22) 50%, rgba(123,47,255,0.18) 55%, transparent 65%)",
          filter: "blur(2px)",
        }}
      />

      {/* 3. Soft radial bloom right at the center of the bar (the hotspot) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width:  "320px",
          height: "280px",
          background: "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(225,48,131,0.30) 0%, rgba(123,47,255,0.12) 55%, transparent 100%)",
        }}
      />

      {/* 4. Subtle ambient fill across the whole section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(100,30,200,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ─── CONTENT ──────────────────────────────────────────────────────── */}
      <div className="max-content relative z-10 text-center">

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow block mb-6"
        >
          Próximo Paso
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl font-black text-hera-white mb-6 text-balance mx-auto max-w-3xl leading-tight"
        >
          ¿Listo para que tu expertise{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(90deg, #F5F5F5, #E13083)" }}
          >
            trabaje para ti?
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-sans text-base md:text-lg text-hera-muted mb-10 max-w-xl mx-auto"
        >
          30 minutos. Sin compromisos. Con claridad total sobre tu próximo paso estratégico.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="mailto:hola@heradigital.co"
            className="relative inline-flex items-center gap-3 text-hera-white font-sans text-base font-semibold px-10 py-5 overflow-hidden group transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #E13083, #7b2fff)",
              boxShadow: "0 0 30px rgba(225,48,131,0.35), 0 0 60px rgba(123,47,255,0.15)",
            }}
          >
            {/* Shine sweep on hover */}
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)" }}
            />
            <span className="relative z-10 flex items-center gap-3">
              Agenda tu sesión gratuita
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </a>

          <p className="font-sans text-xs text-hera-muted">
            Sin costo. Sin presión. Solo claridad.
          </p>
        </motion.div>
      </div>

    </section>
  );
}
