"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-hera-black/80 backdrop-blur-xl border-b border-hera-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-content px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 group">
          <span className="font-serif text-xl font-black text-hera-white tracking-tight">
            HERA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-hera-magenta group-hover:scale-125 transition-transform duration-200" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
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

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 bg-hera-magenta hover:bg-hera-magenta-dark text-hera-white font-sans text-sm font-semibold px-5 py-2.5 transition-all duration-200 cursor-pointer hover:shadow-[0_0_20px_rgba(225,48,131,0.3)]"
        >
          Agenda tu sesión →
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-hera-white p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-hera-black border-b border-hera-border px-6 pb-6 pt-2"
          >
            <ul className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-sans text-base text-hera-muted hover:text-hera-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="block text-center bg-hera-magenta text-hera-white font-sans text-sm font-semibold px-5 py-3 cursor-pointer"
            >
              Agenda tu sesión →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
