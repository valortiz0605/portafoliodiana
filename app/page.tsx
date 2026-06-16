'use client';

import { motion } from "framer-motion";
import {
  Download,
  Linkedin,
  MessageCircle,
  Mail,
} from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="px-6 py-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Diana Valentina Ortiz Ossa
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Estratega de marketing, diseño gráfico y comunicación digital.
          </p>

          {/* BOTONES */}
          <div className="flex flex-wrap gap-3 mt-6">

            <a
              href="/cv.pdf"
              className="px-5 py-3 bg-black text-white rounded-lg flex items-center gap-2"
            >
              <Download size={18} /> Descargar CV
            </a>

            <a
              href="https://wa.me/000000000"
              className="px-5 py-3 bg-green-500 text-white rounded-lg flex items-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="px-5 py-3 border rounded-lg flex items-center gap-2"
            >
              <Linkedin size={18} /> LinkedIn
            </a>

          </div>
        </motion.div>

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >
          <div className="w-80 h-80 bg-gray-200 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
              className="w-full h-full object-cover"
              alt="perfil"
            />
          </div>
        </motion.div>

      </section>

      {/* ABOUT */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
          <p className="text-gray-600 leading-relaxed">
            Profesional en marketing y diseño con experiencia en estrategia digital,
            gestión de redes sociales, branding y comunicación corporativa.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Habilidades</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Marketing Digital",
              "Diseño Gráfico",
              "Redes Sociales",
              "Branding",
              "Estrategia",
              "Comunicación",
            ].map((item) => (
              <div
                key={item}
                className="p-3 border rounded-lg text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-20 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>

        <a
          href="mailto:correo@ejemplo.com"
          className="inline-flex items-center gap-2 text-lg"
        >
          <Mail /> correo@ejemplo.com
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Diana Valentina Ortiz Ossa
      </footer>

    </main>
  );
}
