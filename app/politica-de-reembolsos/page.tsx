import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RefundPolicyPage() {
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
        
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Política de Reembolsos</h1>
        <p className="text-hera-white/40 text-sm mb-12 uppercase tracking-widest">Última actualización: 13 de mayo de 2026</p>

        <div className="space-y-8 text-hera-white/70 leading-relaxed">
          <p>
            En Hera Digital LLC ofrecemos productos digitales, consultorías, mentorías, workshops y servicios educativos online.
          </p>

          <p>
            Debido a la naturaleza digital de algunos productos, las condiciones de reembolso pueden variar según el tipo de compra.
          </p>

          <div>
            <h2 className="text-xl font-bold text-hera-white mb-3">Productos digitales:</h2>
            <p>
              Los productos digitales descargables o de acceso inmediato podrán no ser reembolsables una vez entregado el acceso, salvo que se indique lo contrario en la página de venta correspondiente.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-hera-white mb-3">Consultorías y mentorías:</h2>
            <p>
              Las consultorías, sesiones estratégicas y mentorías podrán ser reprogramadas con aviso previo razonable. Los reembolsos serán evaluados caso por caso según el avance del servicio, acceso entregado y condiciones específicas de la oferta adquirida.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-hera-white mb-3">Workshops o eventos online:</h2>
            <p>
              Si el usuario no puede asistir en vivo, podrá recibir acceso a la grabación cuando esta haga parte de la oferta. Los reembolsos dependerán de las condiciones indicadas en la página de venta del evento.
            </p>
          </div>

          <p className="mt-12 pt-8 border-t border-white/10">
            Para solicitar revisión de un caso, escribe a <a href="mailto:soporte@heradigital.co" className="text-hera-magenta hover:underline">soporte@heradigital.co</a> indicando tu nombre, correo de compra, producto adquirido y motivo de la solicitud.
          </p>
        </div>
      </div>
    </main>
  );
}
