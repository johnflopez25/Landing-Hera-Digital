"use client";
import { motion } from "framer-motion";
import { Layers, User, TrendingUp, Target } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Layers,
    title: "Branding Estratégico",
    desc: "No es un logo. Es cómo te percibe el mercado.",
  },
  {
    num: "02",
    icon: User,
    title: "Personal Brand",
    desc: "De experto invisible a referente reconocido.",
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "Growth Marketing",
    desc: "Crecimiento medible, no promesas vacías.",
  },
  {
    num: "04",
    icon: Target,
    title: "Paid Ads",
    desc: "Meta Ads y Google Ads. Cada peso invertido debe traer retorno. Sin excepciones.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

export default function Services() {
  return (
    <section id="servicios" className="bg-hera-black section-pad border-t border-hera-border">
      <div className="max-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="eyebrow block mb-4">Nuestros Servicios</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-hera-white text-balance">
            Expertise que se convierte en resultados
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hera-border">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative bg-hera-black p-8 group cursor-pointer overflow-hidden transition-all duration-250 hover:-translate-y-1"
              >
                {/* Background number */}
                <span className="absolute top-4 right-6 font-serif text-7xl font-black text-hera-white/5 select-none leading-none">
                  {s.num}
                </span>

                {/* Icon */}
                <div className="mb-6">
                  <Icon
                    size={22}
                    className="text-hera-magenta transition-transform duration-200 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-hera-white mb-3">
                  {s.title}
                </h3>
                <p className="font-sans text-sm text-hera-muted leading-relaxed">
                  {s.desc}
                </p>

                {/* Bottom magenta accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-hera-magenta scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
