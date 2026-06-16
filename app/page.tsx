'use client';

import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen">

      {/* NAV */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-white/10">
        <h1 className="font-bold tracking-widest">DIANA VALENTINA</h1>

        <div className="flex gap-6 text-sm text-white/70">
          <a href="#about">Sobre mí</a>
          <a href="#experience">Experiencia</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 px-10 py-20 items-center">

        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Estratega de <span className="text-purple-400">Marketing</span> & Diseño
          </h2>

          <p className="mt-6 text-white/70 text-lg">
            Transformo ideas en estrategias de comunicación y crecimiento digital.
          </p>

          {/* BOTONES */}
          <div className="flex flex-wrap gap-3 mt-8">

            <a
              href="/cv-diana-ortiz.pdf"
              className="px-5 py-3 bg-purple-500 rounded-xl font-medium"
            >
              Descargar CV
            </a>

            <a
              href="https://wa.me/000000000"
              className="px-5 py-3 bg-green-500 rounded-xl font-medium"
            >
              WhatsApp
            </a>

            <a
              href="https://linkedin.com"
              className="px-5 py-3 border border-white/20 rounded-xl"
            >
              LinkedIn
            </a>

          </div>
        </div>

        {/* FOTO */}
        <div className="flex justify-center">
          <Image
            src="/foto-perfil.jpg"
            alt="Foto perfil"
            width={350}
            height={350}
            className="rounded-2xl object-cover"
          />
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="px-10 py-20 bg-white text-black">
        <h3 className="text-3xl font-bold">Sobre mí</h3>

        <p className="mt-4 max-w-3xl text-gray-700">
          Profesional en marketing digital, diseño gráfico y comunicación estratégica,
          con experiencia en branding, campañas digitales y coordinación de equipos.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-10 py-20">
        <h3 className="text-3xl font-bold mb-10">Experiencia</h3>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-6 border border-white/10 rounded-2xl">
            <h4 className="font-bold">Marketing Digital</h4>
            <p className="text-white/60 mt-2">
              Estrategias de crecimiento, contenido y campañas.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-2xl">
            <h4 className="font-bold">Diseño Gráfico</h4>
            <p className="text-white/60 mt-2">
              Branding, piezas digitales y comunicación visual.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-2xl">
            <h4 className="font-bold">Estrategia</h4>
            <p className="text-white/60 mt-2">
              Planeación y dirección de comunicación de marca.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-2xl">
            <h4 className="font-bold">Gestión de Redes</h4>
            <p className="text-white/60 mt-2">
              Manejo de contenido y posicionamiento digital.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-10 py-20 bg-purple-500 text-white text-center">
        <h3 className="text-3xl font-bold">Hablemos</h3>

        <p className="mt-4">
          correo@ejemplo.com
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Diana Valentina Ortiz Ossa
      </footer>

    </main>
  );
}
