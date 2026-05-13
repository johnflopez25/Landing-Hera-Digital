import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
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
        
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Política de Privacidad</h1>
        <p className="text-hera-white/40 text-sm mb-12 uppercase tracking-widest">Última actualización: 13 de mayo de 2026</p>

        <div className="space-y-8 text-hera-white/70 leading-relaxed">
          <p>
            Hera Digital LLC recopila información personal como nombre, correo electrónico, número de teléfono y datos de contacto cuando los usuarios completan formularios, agendan sesiones, compran productos digitales o solicitan información sobre nuestros servicios.
          </p>

          <p>
            Utilizamos esta información para responder solicitudes, prestar nuestros servicios, enviar comunicaciones relacionadas con nuestros productos, procesar pagos, mejorar la experiencia del usuario y cumplir obligaciones legales.
          </p>

          <p className="font-bold text-hera-white">
            No vendemos información personal a terceros.
          </p>

          <p>
            Podemos compartir información con proveedores tecnológicos necesarios para operar nuestro negocio, como plataformas de pago, herramientas de email marketing, automatización, analítica, hosting y gestión de formularios.
          </p>

          <p>
            Los usuarios pueden solicitar acceso, corrección o eliminación de sus datos escribiendo a <a href="mailto:soporte@heradigital.co" className="text-hera-magenta hover:underline">soporte@heradigital.co</a>.
          </p>

          <p>
            Hera Digital LLC puede actualizar esta política en cualquier momento. Los cambios serán publicados en esta página.
          </p>
        </div>
      </div>
    </main>
  );
}
