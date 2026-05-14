"use client";
import { X } from "lucide-react";
import { useEffect } from "react";
import { Standard } from "@typebot.io/react";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormModal({ isOpen, onClose }: FormModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Box */}
      <div className="relative w-full max-w-lg bg-[#121212] border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl z-10 animate-fade-in flex flex-col">
        {/* Glow de fondo para mantener estética */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-hera-magenta/10 blur-[50px] pointer-events-none" />

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-hera-white/50 hover:text-hera-white transition-colors bg-hera-white/5 p-2 rounded-full z-20"
        >
          <X size={20} />
        </button>

        {/* Typebot Chat Incrustado */}
        <div className="w-full h-[600px] rounded-xl overflow-hidden bg-black/40 relative z-10 border border-white/5">
          <Standard
            typebot="hera-digital"
            apiHost="https://typebot.io"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
