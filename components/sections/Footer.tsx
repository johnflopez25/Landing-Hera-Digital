import { Youtube, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-hera-black border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Logo + Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-1 mb-2">
              <span className="font-serif text-2xl font-black text-hera-white">
                HERA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-hera-magenta" />
            </a>
            <p className="font-sans text-xs text-hera-white/50 tracking-widest uppercase mb-6">
              Marketing de Autoridad
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.youtube.com/@heradigital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hera-white/50 hover:text-hera-magenta transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.instagram.com/escuelaheradigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hera-white/50 hover:text-hera-magenta transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contacto & Empresa */}
          <div className="lg:col-span-1">
            <h4 className="font-sans text-xs font-bold text-hera-white uppercase tracking-widest mb-6">
              Empresa
            </h4>
            <div className="font-sans text-sm text-hera-white/60 flex flex-col gap-3">
              <p className="text-hera-white">Hera Digital LLC</p>
              <p>Florida, United States</p>
              <a href="mailto:soporte@heradigital.co" className="hover:text-hera-magenta transition-colors">
                soporte@heradigital.co
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div className="lg:col-span-1">
            <h4 className="font-sans text-xs font-bold text-hera-white uppercase tracking-widest mb-6">
              Servicios
            </h4>
            <p className="font-sans text-sm text-hera-white/60 leading-relaxed pr-4">
              Educación online, consultoría en marketing digital, mentorías, workshops y productos digitales para profesionales y emprendedores hispanohablantes.
            </p>
          </div>

          {/* Horario */}
          <div className="lg:col-span-1">
            <h4 className="font-sans text-xs font-bold text-hera-white uppercase tracking-widest mb-6">
              Horario de Atención
            </h4>
            <p className="font-sans text-sm text-hera-white/60 leading-relaxed">
              Lunes a viernes,<br />
              9:00 a.m. – 5:00 p.m.<br />
              Hora Colombia.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <p className="font-sans text-[11px] md:text-xs text-hera-white/40 leading-relaxed">
            © 2026 Hera Digital LLC. Todos los derechos reservados.<br />
            Hera Digital LLC es una compañía registrada en Florida, Estados Unidos.
          </p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] md:text-xs text-hera-white/40 font-sans tracking-wide uppercase">
            <Link href="/privacy-policy" className="hover:text-hera-white transition-colors">Política de Privacidad</Link>
            <Link href="/terminos-y-condiciones" className="hover:text-hera-white transition-colors">Términos y Condiciones</Link>
            <Link href="/politica-de-reembolsos" className="hover:text-hera-white transition-colors">Política de Reembolsos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
