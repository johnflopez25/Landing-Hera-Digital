"use client";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { useState, useEffect } from "react";

// ─── Bezier Math ──────────────────────────────────────────────────────────────
// viewBox 1440 × 420: curve zone y=0..300, label zone y=300..420
const P = [
  { x: 0,    y: 285 }, // start deep-bottom (more dramatic arc)
  { x: 500,  y: 285 }, // flat zone ends earlier
  { x: 950,  y: 170 }, // steep rise begins
  { x: 1440, y: 5   }, // exit near the very top
];
const VW       = 1440;
const VH       = 420;   // extra 120px for label zone inside SVG
const LINE_Y2  = 310;   // dashes end just inside label zone → clear gap
const TITLE_Y  = 338;   // SVG text baseline – title
const DESC_Y   = 362;   // SVG text baseline – description

function bx(t: number) {
  const u = 1 - t;
  return u*u*u*P[0].x + 3*u*u*t*P[1].x + 3*u*t*t*P[2].x + t*t*t*P[3].x;
}
function by(t: number) {
  const u = 1 - t;
  return u*u*u*P[0].y + 3*u*u*t*P[1].y + 3*u*t*t*P[2].y + t*t*t*P[3].y;
}

const NODES_DEF = [
  { t: 0.15, title: "Diagnóstico",  desc: "Auditoría estratégica",   delay: 0.9 },
  { t: 0.35, title: "Estrategia",   desc: "Posicionamiento táctico",  delay: 1.1 },
  { t: 0.58, title: "Growth",       desc: "Ejecución de canales",    delay: 1.3 },
  { t: 0.78, title: "Autoridad",    desc: "Monetización y escala",   delay: 1.5 },
];

const NODES = NODES_DEF.map(n => ({
  ...n,
  cx: bx(n.t),
  cy: by(n.t),
}));

const CURVE_PATH =
  `M ${P[0].x} ${P[0].y} C ${P[1].x} ${P[1].y}, ${P[2].x} ${P[2].y}, ${P[3].x} ${P[3].y}`;

// ─── Mobile cards ─────────────────────────────────────────────────────────────
const STEPS_MOBILE = [
  { num: "01", title: "Diagnóstico",  desc: "Auditoría estratégica" },
  { num: "02", title: "Estrategia",   desc: "Posicionamiento táctico" },
  { num: "03", title: "Growth",       desc: "Ejecución de canales" },
  { num: "04", title: "Autoridad",    desc: "Monetización y escala" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const h = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  return (
    <section className="relative bg-hera-black overflow-hidden min-h-screen flex flex-col">

      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "linear-gradient(to right,  rgba(255,255,255,0.07) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 90% 90% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 40%, black 30%, transparent 100%)",
          opacity: 0.5,
        }}
      />

      {/* Mouse Glow – desktop only */}
      <motion.div
        className="absolute inset-0 pointer-events-none hidden md:block"
        animate={{
          background: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, rgba(225,48,131,0.07), transparent 70%)`,
        }}
        transition={{ type: "tween", duration: 0.4 }}
      />

      {/* ── TOP BLOCK: natural height, curve fills the rest ─────────────── */}
      <div className="relative z-10 flex-shrink-0 flex flex-col items-center justify-center text-center px-5 pt-28 pb-6 md:pt-20 md:pb-4">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-hera-border bg-hera-surface/60 backdrop-blur-md mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-hera-magenta animate-pulse" />
          <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-hera-white/70 font-medium">
            Escuela de negocios digitales para profesionales
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif font-bold text-hera-white leading-[1.08] tracking-tight max-w-4xl mb-4"
          style={{ fontSize: "clamp(36px, 5.5vw, 68px)" }}
        >
          Tu marca personal,<br />
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(90deg, #F5F5F5 0%, #E13083 100%)" }}>
            tu activo más poderoso
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-sans text-sm md:text-base text-hera-muted max-w-sm md:max-w-lg mx-auto mb-7 font-light leading-relaxed"
        >
          Convertimos expertos invisibles en referentes indiscutibles. Ejecución táctica con impacto medible.
        </motion.p>

        {/* Input CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative w-full max-w-sm md:max-w-md mx-auto group"
        >
          <div className="absolute inset-0 rounded-full bg-hera-magenta/20 blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

          {/* Mobile: stacked */}
          <div className="flex flex-col gap-2 sm:hidden">
            <input type="text" placeholder="URL de tu perfil de LinkedIn..."
              className="w-full bg-hera-surface/70 backdrop-blur-xl border border-hera-border rounded-full px-5 py-3 font-sans text-hera-white placeholder:text-hera-muted text-sm outline-none text-center" />
            <button className="w-full flex items-center justify-center gap-2 text-hera-white px-6 py-3 rounded-full font-sans text-sm font-semibold"
              style={{ background: "linear-gradient(135deg,#E13083,#9b1f5c)", boxShadow: "0 0 20px rgba(225,48,131,0.35)" }}>
              Auditar Marca <ArrowRight size={14} />
            </button>
          </div>

          {/* sm+: inline pill */}
          <div className="hidden sm:flex items-center bg-hera-surface/70 backdrop-blur-xl border border-hera-border rounded-full p-1.5">
            <div className="pl-5 text-hera-muted"><Search size={16} /></div>
            <input type="text" placeholder="URL de tu perfil de LinkedIn..."
              className="flex-1 bg-transparent border-none outline-none px-4 py-2 font-sans text-hera-white placeholder:text-hera-muted text-sm focus:ring-0" />
            <button className="flex items-center gap-2 text-hera-white px-5 py-2.5 rounded-full font-sans text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(135deg,#E13083,#9b1f5c)", boxShadow: "0 0 20px rgba(225,48,131,0.35)" }}>
              Auditar Marca <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* ── MOBILE STEPS ─────────────────────────────────────────────────── */}
      <div className="md:hidden relative z-10 px-5 py-8 flex-1">
        <div className="w-16 h-px bg-hera-magenta/50 mx-auto mb-8" />
        <div className="grid grid-cols-2 gap-4">
          {STEPS_MOBILE.map((step, i) => (
            <motion.div key={step.num}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              className="bg-hera-surface/50 border border-hera-border p-4 flex flex-col gap-2"
            >
              <span className="font-serif text-2xl font-black text-hera-magenta/25 leading-none select-none">{step.num}</span>
              <h3 className="font-serif text-sm font-bold text-hera-white leading-tight">{step.title}</h3>
              <p className="font-sans text-[11px] text-hera-muted leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP CURVE (everything inside one SVG) ─────────────────────── */}
      <div
        className="hidden md:block relative w-full flex-shrink-0"
        style={{ height: "400px" }}
      >
        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          style={{ fontFamily: "'Inter', 'Playfair Display', sans-serif" }}
        >
          <defs>
            {/* Curve gradient: dark-purple → magenta → pink */}
            <linearGradient id="cg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="#2d0d55" stopOpacity="0.7" />
              <stop offset="25%"  stopColor="#7b1fa2" stopOpacity="1" />
              <stop offset="60%"  stopColor="#E13083" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff80b3" stopOpacity="1" />
            </linearGradient>
            {/* Glow for the curve line */}
            <filter id="lg" x="-2%" y="-100%" width="104%" height="300%">
              <feGaussianBlur stdDeviation="3" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            {/* Glow for dots */}
            <filter id="dg" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="5" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* Animated curve line */}
          <motion.path
            d={CURVE_PATH}
            stroke="url(#cg)" strokeWidth="2.5" fill="none"
            filter="url(#lg)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.0, ease: "easeInOut", delay: 0.5 }}
          />

          {/* For each node: halo → dot → dashed line → title → desc */}
          {NODES.map((n) => (
            <motion.g
              key={n.title}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: n.delay, duration: 0.5, type: "spring", stiffness: 200 }}
            >
              {/* Outer glow halo */}
              <circle cx={n.cx} cy={n.cy} r="16" fill="rgba(225,48,131,0.12)" />

              {/* Dot on the curve */}
              <circle cx={n.cx} cy={n.cy} r="5" fill="white"
                style={{ filter: "drop-shadow(0 0 8px #E13083)" }} />

              {/* Dashed vertical drop line → ends at LINE_Y2 (inside label zone) */}
              <motion.line
                x1={n.cx} y1={n.cy + 12}
                x2={n.cx} y2={LINE_Y2}
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="1"
                strokeDasharray="4 6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: n.delay + 0.15, duration: 0.4 }}
              />

              {/* Thin horizontal tick at line bottom */}
              <motion.line
                x1={n.cx - 6} y1={LINE_Y2}
                x2={n.cx + 6} y2={LINE_Y2}
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: n.delay + 0.2, duration: 0.3 }}
              />

              {/* Label – title */}
              <motion.text
                x={n.cx} y={TITLE_Y}
                textAnchor="middle"
                fill="#F5F5F5"
                fontSize="20"
                fontWeight="700"
                fontFamily="'Playfair Display', Georgia, serif"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: n.delay + 0.25, duration: 0.5 }}
              >
                {n.title}
              </motion.text>

              {/* Label – description */}
              <motion.text
                x={n.cx} y={DESC_Y}
                textAnchor="middle"
                fill="#6B7280"
                fontSize="14"
                fontFamily="'Inter', system-ui, sans-serif"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: n.delay + 0.35, duration: 0.5 }}
              >
                {n.desc}
              </motion.text>
            </motion.g>
          ))}
        </svg>
      </div>

    </section>
  );
}
