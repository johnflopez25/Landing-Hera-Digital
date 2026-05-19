import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Contacto() {
  return (
    <main>
      <Navbar />
      <section className="bg-hera-black pt-32 pb-24 min-h-[80vh] relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Link href="/" className="inline-flex items-center gap-2 text-hera-white/60 hover:text-hera-magenta transition-colors mb-8 text-sm uppercase tracking-widest font-semibold">
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
          <h1 className="font-serif text-4xl md:text-6xl font-black text-hera-white mb-12">
            Contacto
          </h1>
          <div className="font-sans text-base md:text-lg text-hera-white/80 leading-relaxed space-y-8 bg-hera-surface border border-hera-border p-8 md:p-12">
            <p className="text-xl text-hera-white mb-8">
              Para soporte, consultas comerciales o información sobre nuestros servicios, puedes escribirnos a:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="font-bold text-hera-white text-sm uppercase tracking-widest mb-2 opacity-50">Email</p>
                <p><a href="mailto:soporte@heradigital.co" className="text-hera-magenta hover:underline transition-colors text-lg">soporte@heradigital.co</a></p>
              </div>

              <div>
                <p className="font-bold text-hera-white text-sm uppercase tracking-widest mb-2 opacity-50">Teléfono / WhatsApp</p>
                <p><a href="https://wa.me/573132285648" target="_blank" rel="noopener noreferrer" className="text-hera-magenta hover:underline transition-colors text-lg">+57 3132285648</a></p>
              </div>

              <div>
                <p className="font-bold text-hera-white text-sm uppercase tracking-widest mb-2 opacity-50">Horario de atención</p>
                <p className="text-sm">Lunes a viernes,<br/>9:00 a.m. – 5:00 p.m. hora Colombia.</p>
              </div>
            </div>

            <div className="border-t border-hera-border pt-8 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-bold text-hera-white text-sm uppercase tracking-widest mb-2 opacity-50">Empresa</p>
                <p className="text-hera-white mb-1">Hera Digital LLC</p>
                <p className="text-sm text-hera-white/60">Ubicación: Florida, United States</p>
              </div>

              <div>
                <p className="font-bold text-hera-white text-sm uppercase tracking-widest mb-2 opacity-50">Servicios</p>
                <p className="text-sm">Educación online, consultoría en marketing digital, mentorías, workshops y productos digitales para profesionales y emprendedores hispanohablantes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
