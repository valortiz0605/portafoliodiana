'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Download, Linkedin, MessageCircle, Mail,
  CheckCircle2, Rocket, Users, Target
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Page() {
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <motion.div {...fadeIn}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Estratega de marketing & diseño
          </h1>

          <p className="mt-6 text-gray-300">
            Transformo ideas en estrategias digitales con enfoque en crecimiento y branding.
          </p>

          <div className="flex gap-3 mt-8 flex-wrap">
            
            <a
              href="/cv-diana-ortiz.pdf"
              className="bg-purple-500 px-5 py-3 rounded-lg flex items-center gap-2"
            >
              <Download size={18}/> CV
            </a>

            <a
              href="https://wa.me/573000000000"
              className="border px-5 py-3 rounded-lg flex items-center gap-2"
            >
              <MessageCircle size={18}/> WhatsApp
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="border px-5 py-3 rounded-lg flex items-center gap-2"
            >
              <Linkedin size={18}/> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* FOTO */}
        <motion.div {...fadeIn} className="flex justify-center">
          <Image
            src="/foto-perfil.jpg"
            alt="Perfil"
            width={400}
            height={400}
            className="rounded-2xl object-cover"
          />
        </motion.div>

      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>

        <p className="text-gray-300">
          Diseñadora gráfica con maestría y experiencia en marketing digital, branding y estrategia.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white/5 p-6 rounded-xl">
            <Target className="mb-3"/>
            Estrategia
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <Users className="mb-3"/>
            Gestión de equipos
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <Rocket className="mb-3"/>
            Crecimiento
          </div>

        </div>
      </section>

      {/* CONTACTO */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold">Hablemos</h2>

        <a
          href="mailto:tu-correo@correo.com"
          className="mt-6 inline-flex items-center gap-2 text-purple-400"
        >
          <Mail /> Enviar correo
        </a>
      </section>

    </main>
  );
}
