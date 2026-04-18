"use client";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Analizamos dónde estás, cómo te percibe el mercado y cuál es tu diferenciador real.",
  },
  {
    num: "02",
    title: "Estrategia",
    desc: "Diseñamos tu posicionamiento único, tu narrativa de autoridad y el plan de acción.",
  },
  {
    num: "03",
    title: "Ejecución",
    desc: "Implementamos con precisión: contenido, campañas, presencia digital. Sin improvisación.",
  },
  {
    num: "04",
    title: "Escala",
    desc: "Medimos, optimizamos y amplificamos todo lo que genera resultados. Siempre con datos.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="bg-hera-black section-pad border-t border-hera-border">
      <div className="max-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <span className="eyebrow block mb-4">Cómo Trabajamos</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-hera-white text-balance">
            Un proceso diseñado para resultados, no para reuniones
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-hera-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="lg:pr-10"
              >
                {/* Number with magenta dot above line */}
                <div className="relative mb-8">
                  <span className="font-serif text-5xl font-black text-hera-magenta leading-none">
                    {step.num}
                  </span>
                  {/* Dot on the connector line */}
                  <div className="hidden lg:block absolute top-8 -right-0 w-2 h-2 rounded-full bg-hera-magenta" />
                </div>

                <h3 className="font-serif text-xl font-bold text-hera-white mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-hera-muted leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
