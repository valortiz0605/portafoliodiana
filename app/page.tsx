"use client";

import Image from "next/image";
import { Download, Linkedin, MessageCircle } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">

      {/* NAV */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-6">
        <h1 className="font-[Poppins] font-bold text-[var(--primary)]">
          Diana Valentina
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-[var(--muted)]">
          <a href="#about">Sobre mí</a>
          <a href="#experience">Experiencia</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 px-6 py-24 items-center">

        {/* TEXTO */}
        <div>
          <p className="text-[var(--accent)] uppercase tracking-widest text-sm font-semibold">
            Marketing & Estrategia
          </p>

          <h2 className="font-[Poppins] text-4xl md:text-5xl font-bold leading-tight mt-4">
            Transformo ideas en estrategias que construyen marcas.
          </h2>

          <p className="mt-5 text-[var(--muted)] leading-relaxed">
            Estrategia, diseño y comunicación enfocada en crecimiento y resultados reales.
          </p>

          {/* BOTONES */}
          <div className="flex flex-wrap gap-3 mt-8">

            <a
              href="/cv-diana-ortiz.pdf"
              className="bg-[var(--primary)] text-white px-6 py-3 rounded-xl text-sm flex items-center gap-2"
            >
              <Download size={18} /> Descargar CV
            </a>

            <a
              href="https://wa.me/573000000000"
              className="bg-[var(--accent)] text-[var(--primary)] px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>

            <a
              href="https://linkedin.com"
              className="border border-[var(--border)] px-6 py-3 rounded-xl text-sm flex items-center gap-2"
            >
              <Linkedin size={18} /> LinkedIn
            </a>

          </div>
        </div>

        {/* FOTO PERFECTA (NO ESTIRADA) */}
        <div className="flex justify-center">
          <div className="w-[340px] h-[420px] rounded-2xl overflow-hidden border border-[var(--border)] shadow-md bg-white">
            <Image
              src="/foto-perfil.jpg"
              alt="Diana Valentina"
              width={600}
              height={800}
              className="w-full h-full object-cover object-center"
              priority
            />
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="font-[Poppins] text-2xl font-bold text-[var(--primary)] mb-6">
          Sobre mí
        </h3>

        <p className="text-[var(--muted)] leading-relaxed text-lg">
          Profesional en marketing digital y diseño gráfico con enfoque estratégico,
          comunicación y dirección creativa.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-10">
        <h3 className="font-[Poppins] text-2xl font-bold text-[var(--primary)] mb-6">
          Experiencia
        </h3>

        <div className="grid gap-3 text-[var(--muted)]">
          <div className="p-4 bg-white border border-[var(--border)] rounded-xl">
            Coordinación de marketing digital
          </div>
          <div className="p-4 bg-white border border-[var(--border)] rounded-xl">
            Gestión de redes sociales
          </div>
          <div className="p-4 bg-white border border-[var(--border)] rounded-xl">
            Branding y diseño gráfico
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center py-20">
        <h3 className="font-[Poppins] text-2xl font-bold text-[var(--primary)]">
          Contacto
        </h3>
        <p className="text-[var(--muted)] mt-2">
          Disponible para nuevas oportunidades
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} Diana Valentina Ortiz Ossa
      </footer>

    </main>
  );
}
