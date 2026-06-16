"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  Linkedin,
  MessageCircle,
  Mail,
  ArrowRight,
} from "lucide-react";

/* ---------------- BUTTON ---------------- */
const Button = ({ children, href, variant = "primary" }: any) => {
  const base =
    "px-5 py-3 rounded-xl font-medium flex items-center gap-2 transition-all hover:scale-[1.03]";

  const styles = {
    primary: "bg-black text-white hover:opacity-80",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    accent: "bg-yellow-400 text-black hover:brightness-110",
  };

  if (href) {
    return (
      <a href={href} className={`${base} ${styles[variant]}`}>
        {children}
      </a>
    );
  }

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
};

/* ---------------- ANIMATIONS ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* NAV */}
      <header className="flex justify-between items-center px-10 py-6">
        <h1 className="font-bold text-lg">Diana Valentina</h1>

        <nav className="flex gap-6 text-sm">
          <a href="#about">Sobre mí</a>
          <a href="#experience">Experiencia</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-12 px-10 py-16 items-center">

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold leading-tight">
            Estrategia, diseño y marketing que convierten ideas en resultados
          </h2>

          <p className="mt-5 text-gray-600">
            Construyo marcas con visión estratégica, diseño y comunicación.
          </p>

          {/* BOTONES */}
          <div className="flex flex-wrap gap-3 mt-6">
            <Button href="/cv-diana-ortiz.pdf" variant="primary">
              <Download size={18} /> Descargar CV
            </Button>

            <Button href="https://wa.me/573000000000" variant="accent">
              <MessageCircle size={18} /> WhatsApp
            </Button>

            <Button href="https://linkedin.com" variant="outline">
              <Linkedin size={18} /> LinkedIn
            </Button>
          </div>

          {/* CTA extra */}
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
            Ver proyectos <ArrowRight size={16} />
          </div>
        </motion.div>

        {/* FOTO PERFECTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-[340px] h-[340px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/foto-perfil.jpg"
              alt="Perfil"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="px-10 py-20 bg-white"
      >
        <h3 className="text-3xl font-bold mb-6">Sobre mí</h3>
        <p className="max-w-3xl text-gray-600 leading-relaxed">
          Soy diseñadora gráfica y estratega de marketing con experiencia en
          comunicación visual, branding y campañas digitales orientadas a resultados.
        </p>
      </motion.section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-10 py-20">
        <h3 className="text-3xl font-bold mb-10">Experiencia</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Marketing Digital",
            "Diseño Gráfico",
            "Estrategia de Marca",
            "Redes Sociales",
            "Campañas ADS",
            "Dirección Creativa",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <h4 className="font-bold">{item}</h4>
              <p className="text-sm text-gray-600 mt-2">
                Experiencia aplicada en proyectos reales.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-10 py-20 bg-black text-white text-center"
      >
        <h3 className="text-3xl font-bold mb-6">
          ¿Trabajamos juntas?
        </h3>

        <p className="text-white/70 mb-6">
          Escríbeme para proyectos de marketing, diseño o estrategia.
        </p>

        <Button href="mailto:tuemail@gmail.com" variant="accent">
          <Mail size={18} /> Enviar correo
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm">
        © {new Date().getFullYear()} Diana Valentina
      </footer>
    </main>
  );
}
