'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Download, Linkedin, MessageCircle,
  CheckCircle2, Rocket, Users, Target, Mail
} from 'lucide-react';

// Componentes reutilizables
const SectionTitle = ({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) => (
  <div className="mb-12 text-center">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-primary mb-4">
      {children}
    </h2>
    {subtitle && (
      <p className="text-brand-muted max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'outline';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const styles = {
    primary: "bg-brand-primary text-white hover:bg-brand-secondary transition-all",
    accent: "bg-brand-accent text-brand-primary font-bold hover:shadow-lg transition-all",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all"
  };

  return (
    <button
      className={`px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-medium ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default function Portfolio() {

  return (
    <div className="bg-brand-base min-h-screen text-brand-dark font-sans">

      {/* NAV */}
      <nav className="fixed w-full z-50 bg-brand-base/80 backdrop-blur-md border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-display font-bold text-brand-primary text-xl">
            DIANA VALENTINA
          </span>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-brand-primary leading-tight mb-6">
              Estrategia de marketing con enfoque creativo
            </h1>

            <p className="text-lg text-brand-muted mb-8">
              Portafolio profesional de marketing, comunicación y diseño.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary">
                <Download size={18} /> CV
              </Button>

              <Button variant="accent">
                <MessageCircle size={18} /> WhatsApp
              </Button>

              <Button variant="outline">
                <Linkedin size={18} /> LinkedIn
              </Button>
            </div>
          </motion.div>

          {/* imagen placeholder seguro */}
          <div className="w-full aspect-square bg-white rounded-2xl shadow-xl" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Sobre mí</SectionTitle>

          <p className="text-brand-muted">
            Estratega de marketing con experiencia en comunicación visual,
            gestión de redes y campañas digitales.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              "Estrategia Digital",
              "Marketing",
              "Diseño",
              "Comunicación"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle2 size={16} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-brand-muted">
        © {new Date().getFullYear()} Diana Valentina Ortiz Ossa
      </footer>

    </div>
  );
}
