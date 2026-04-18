"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, User, TrendingUp, Target } from "lucide-react";

// Service pills (colored accent icons like the reference)
const SERVICES = [
  { icon: User,        color: "#E13083", label: "Personal Brand"    },
  { icon: Layers,      color: "#7c3aed", label: "Branding Digital"  },
  { icon: TrendingUp,  color: "#10b981", label: "Growth Marketing"  },
  { icon: Target,      color: "#f59e0b", label: "Paid Ads"          },
];

// Team avatars (inline with text — grayscale to match brand)
const AVATARS = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="nosotros" className="bg-hera-black section-pad border-t border-hera-border">
      <div className="max-content">

        {/* ── Eyebrow pill ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 border border-hera-border rounded-full px-5 py-2 bg-hera-surface/50 backdrop-blur-sm">
            <span className="font-sans text-xs text-hera-white/70 tracking-widest uppercase">
              Sobre Hera Digital
            </span>
          </div>
        </motion.div>

        {/* ── Large editorial paragraph (the hero of this section) ─────── */}
        <div ref={ref} className="max-w-5xl mx-auto text-center mb-16 md:mb-20">

          {/* Line 1 — bright white, with inline avatars */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif font-bold leading-tight text-balance"
            style={{ fontSize: "clamp(24px, 3.8vw, 52px)" }}
          >
            <span className="text-hera-white">Somos un equipo </span>
            
            {/* Inline overlapping avatars */}
            <span className="inline-flex items-center relative mx-2" style={{ verticalAlign: "middle" }}>
              {AVATARS.map((src, i) => (
                <span
                  key={i}
                  className="inline-block rounded-full border-2 border-hera-black overflow-hidden grayscale"
                  style={{
                    width:  "clamp(28px, 3vw, 44px)",
                    height: "clamp(28px, 3vw, 44px)",
                    marginLeft: i === 0 ? 0 : "clamp(-12px, -1.2vw, -16px)",
                    backgroundImage: `url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ))}
            </span>

            <span className="text-hera-white"> de estrategas, creadores de marca</span>
          </motion.p>

          {/* Line 2 — slightly dimmer, transitioning */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif font-bold leading-tight text-balance"
            style={{ fontSize: "clamp(24px, 3.8vw, 52px)", color: "rgba(245,245,245,0.75)" }}
          >
            y especialistas en crecimiento digital dedicados a
          </motion.p>

          {/* Line 3 — fading further */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-serif font-bold leading-tight text-balance"
            style={{ fontSize: "clamp(24px, 3.8vw, 52px)", color: "rgba(245,245,245,0.45)" }}
          >
            <span style={{ color: "rgba(225,48,131,0.85)" }}>posicionarte como referente indiscutible.</span>
          </motion.p>

          {/* Line 4 — dimmest, body-style serif */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-serif leading-relaxed text-balance mt-4"
            style={{ fontSize: "clamp(16px, 2vw, 26px)", color: "rgba(245,245,245,0.30)" }}
          >
            Entendemos que el mercado evoluciona sin pausa. Por eso aplicamos metodología, datos y creatividad sin concesiones para que cada peso invertido en tu marca genere autoridad real y oportunidades concretas.
          </motion.p>
        </div>

        {/* ── Service pills row ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 + i * 0.08, duration: 0.4, type: "spring" }}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-hera-surface border border-hera-border cursor-default
                           hover:border-opacity-60 transition-all duration-200 group"
                style={{ borderColor: `${s.color}30` }}
              >
                <Icon
                  size={15}
                  style={{ color: s.color }}
                  className="transition-transform duration-200 group-hover:scale-110"
                />
                <span className="font-sans text-sm text-hera-white/80 font-medium group-hover:text-hera-white transition-colors duration-200">
                  {s.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Differentiators strip ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-10 border-t border-hera-border grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          {[
            { stat: "+120", label: "Proyectos ejecutados" },
            { stat: "0px",  label: "Tolerancia a lo mediocre" },
            { stat: "100%", label: "Foco en resultados reales" },
          ].map((item) => (
            <div key={item.stat} className="flex flex-col items-center gap-1">
              <span className="font-serif text-3xl font-black text-hera-white">{item.stat}</span>
              <span className="font-sans text-xs text-hera-muted tracking-widest uppercase">{item.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
