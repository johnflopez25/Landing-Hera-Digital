"use client";
import { motion } from "framer-motion";
import { Target, GraduationCap, Package, Video, TrendingUp } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Target,
    title: "Consultoría estratégica",
    desc: "Sesiones personalizadas para diagnosticar, estructurar y optimizar modelos de negocio digitales.",
  },
  {
    num: "02",
    icon: GraduationCap,
    title: "Mentorías y formación",
    desc: "Programas educativos para profesionales que desean construir autoridad, vender servicios de alto valor y crear productos digitales.",
  },
  {
    num: "03",
    icon: Package,
    title: "Productos digitales",
    desc: "Recursos, plantillas, frameworks y entrenamientos online de aplicación práctica.",
  },
  {
    num: "04",
    icon: Video,
    title: "Workshops y eventos",
    desc: "Entrenamientos en vivo sobre posicionamiento, marca personal, ventas, embudos, contenido y publicidad digital.",
  },
  {
    num: "05",
    icon: TrendingUp,
    title: "Paid Ads & Growth",
    desc: "Estrategia y acompañamiento para campañas de adquisición, medición y optimización.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-px bg-hera-border">
          {services.map((s, i) => {
            const Icon = s.icon;
            
            // Asignación de columnas para simetría:
            // Escritorio (lg): 3 arriba (span-2 c/u), 2 abajo (span-3 c/u)
            // Tablet (md): 2 arriba, 2 medio, 1 centrado abajo (span-2)
            const colSpanClass = 
              i < 3 ? "md:col-span-1 lg:col-span-2" :
              i === 3 ? "md:col-span-1 lg:col-span-3" :
              "md:col-span-2 lg:col-span-3";

            return (
              <motion.div
                key={s.num}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className={`relative bg-hera-black p-8 group cursor-pointer overflow-hidden transition-all duration-250 hover:-translate-y-1 ${colSpanClass}`}
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
