"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const metrics = [
  { value: "+120", label: "Proyectos ejecutados" },
  { value: "+3.8M", label: "Impresiones generadas" },
  { value: "340%", label: "Retorno promedio en publicidad" },
];

const testimonials = [
  {
    quote:
      "Hera Digital transformó mi presencia digital en 90 días. Pasé de ser desconocido a recibir invitaciones a hablar en conferencias.",
    name: "Carlos Mendoza",
    role: "CEO & Consultor Estratégico",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    quote:
      "El ROI de mis campañas de Meta Ads creció 280% en el primer mes. Esto no es marketing, es ingeniería de crecimiento.",
    name: "Ana Restrepo",
    role: "Directora Comercial",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  },
];

export default function SocialProof() {
  return (
    <section id="prueba-social" className="bg-hera-black section-pad pt-12 md:pt-24 border-t border-hera-border">
      <div className="max-content">
        {/* Metrics bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-hera-border mb-20">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-8 md:py-10 first:pt-0 md:first:pt-10 md:px-8 md:first:pl-0 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <p className="font-serif text-5xl md:text-6xl font-black text-hera-white mb-2">
                {m.value}
              </p>
              <p className="font-sans text-sm text-hera-muted uppercase tracking-widest text-balance">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="eyebrow block mb-4">Lo que dicen nuestros clientes</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-hera-white">
            Resultados que hablan por sí solos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-hera-surface border border-hera-border p-8 flex flex-col gap-6"
            >
              <Quote size={28} className="text-hera-magenta flex-shrink-0" />
              <p className="font-sans text-base text-hera-white/90 leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-hera-border">
                <div
                  className="w-11 h-11 rounded-full bg-center bg-cover grayscale flex-shrink-0"
                  style={{ backgroundImage: `url(${t.img})` }}
                />
                <div>
                  <p className="font-sans text-sm font-semibold text-hera-white">
                    {t.name}
                  </p>
                  <p className="font-sans text-xs text-hera-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
