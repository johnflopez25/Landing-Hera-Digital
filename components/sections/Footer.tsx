import { Linkedin, Instagram } from "lucide-react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-hera-black border-t border-hera-border">
      <div className="max-content px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Logo + tagline */}
          <div>
            <a href="#" className="flex items-center gap-1 mb-2">
              <span className="font-serif text-xl font-black text-hera-white">
                HERA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-hera-magenta" />
            </a>
            <p className="font-sans text-xs text-hera-muted tracking-widest uppercase">
              Marketing de Autoridad
            </p>
          </div>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-hera-muted hover:text-hera-white transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hera-muted hover:text-hera-magenta transition-colors duration-200 cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hera-muted hover:text-hera-magenta transition-colors duration-200 cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-hera-border pt-6">
          <p className="font-sans text-xs text-hera-muted text-center">
            © {new Date().getFullYear()} Hera Digital. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
