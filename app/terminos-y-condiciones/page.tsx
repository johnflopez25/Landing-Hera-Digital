import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-hera-white py-24 px-6 md:px-12 font-sans relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-hera-magenta/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-hera-magenta hover:text-white transition-colors mb-12 text-xs font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Volver al inicio
        </Link>
        
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Términos y Condiciones</h1>
        <p className="text-hera-white/40 text-sm mb-12 uppercase tracking-widest">Última actualización: 13 de mayo de 2026</p>

        <div className="space-y-8 text-hera-white/70 leading-relaxed">
          <p>
            Este sitio web es operado por Hera Digital LLC.
          </p>

          <p>
            Al acceder a este sitio, agendar una sesión, comprar un producto digital, contratar una consultoría, participar en una mentoría o utilizar nuestros servicios, aceptas estos términos y condiciones.
          </p>

          <p>
            Hera Digital LLC ofrece educación online, consultoría en marketing digital, mentorías, workshops y productos digitales dirigidos a profesionales y emprendedores.
          </p>

          <p>
            Nuestros contenidos tienen fines educativos y estratégicos. No garantizamos resultados específicos, ingresos determinados ni retornos financieros concretos. Los resultados dependen de la implementación, contexto, mercado, experiencia previa y otros factores externos.
          </p>

          <p>
            El usuario se compromete a proporcionar información veraz, usar los contenidos de forma legal y no reproducir, distribuir o revender materiales sin autorización escrita.
          </p>

          <p>
            Hera Digital LLC se reserva el derecho de modificar servicios, precios, contenidos y condiciones comerciales en cualquier momento.
          </p>

          <p>
            Para consultas, puedes escribir a <a href="mailto:soporte@heradigital.co" className="text-hera-magenta hover:underline">soporte@heradigital.co</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
