'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, Linkedin, MessageCircle, ArrowRight, 
  CheckCircle2, Rocket, Users, Target, Search, 
  Layout, Briefcase, Award, Mail 
} from 'lucide-react';

// Componentes Reutilizables
const SectionTitle = ({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) => (
  <div className="mb-12 text-center">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-primary mb-4">{children}</h2>
    {subtitle && <p className="text-brand-muted max-w-2xl mx-auto">{subtitle}</p>}
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
    <button className={`px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-medium ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default function Portfolio() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-brand-base min-h-screen text-brand-dark font-sans">
      <Head>
        <title>Diana Valentina Ortiz Ossa | Estratega de Marketing & Diseño</title>
        <meta name="description" content="Portafolio profesional de Diana Valentina Ortiz Ossa - Coordinación de Marketing y Comunicación Estratégica" />
      </Head>

      {/* --- NAV BAR --- */}
      <nav className="fixed w-full z-50 bg-brand-base/80 backdrop-blur-md border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-display font-bold text-brand-primary text-xl tracking-tight">DIANA VALENTINA</span>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-brand-primary uppercase tracking-widest">
            <a href="#about" className="hover:text-brand-secondary">Sobre mí</a>
            <a href="#experience" className="hover:text-brand-secondary">Experiencia</a>
            <a href="#contact" className="hover:text-brand-secondary">Contacto</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-brand-primary leading-tight mb-6">
              Transformo ideas y objetivos comerciales en <span className="text-brand-secondary">estrategias de marketing accionables.</span>
            </h1>
            <p className="text-lg text-brand-muted mb-8 leading-relaxed">
              Profesional en Diseño Gráfico con formación de maestría y experiencia en marketing digital, comunicación estratégica y coordinación de iniciativas orientadas al crecimiento y posicionamiento de marcas.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {/* REEMPLAZAR: href con link real al PDF */}
              <Button variant="primary"><Download size={20} /> Descargar CV</Button>
              <a href="#experience"><Button variant="outline">Ver experiencia</Button></a>
              {/* REEMPLAZAR: href con link de WhatsApp */}
              <Button variant="accent"><MessageCircle size={20} /> WhatsApp</Button>
              {/* REEMPLAZAR: href con link de LinkedIn */}
              <a href="https://linkedin.com/in/dianavalentinaortizossa" target="_blank"><Button variant="outline"><Linkedin size={20} /></Button></a>
            </div>
            <p className="italic text-brand-primary/80 border-l-4 border-brand-accent pl-4 font-medium">
              "Creo en el poder de las ideas bien ejecutadas para generar experiencias que conectan personas, marcas y objetivos."
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* REEMPLAZAR: src con tu fotografía profesional */}
            <div className="w-full aspect-square bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-white">
              <img src="/api/placeholder/600/600" alt="Diana Valentina Ortiz Ossa" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-accent p-6 rounded-xl shadow-xl hidden md:block">
              <p className="font-display font-bold text-brand-primary text-xl">100%</p>
              <p className="text-xs uppercase font-bold tracking-tighter">Orientada a Objetivos</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SOBRE MÍ & TIMELINE --- */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <SectionTitle>Sobre mí</SectionTitle>
              <p className="text-brand-muted leading-relaxed mb-6">
                Mi trayectoria se define por la intersección entre la comunicación visual y la visión estratégica. No solo diseño piezas; construyo puentes entre las necesidades del negocio y la percepción del consumidor. He liderado equipos multidisciplinarios y coordinado campañas de marketing digital, email marketing y trade marketing con un enfoque implacable en la organización y el cumplimiento de objetivos.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Estrategia Digital", "Gestión de Redes", "Liderazgo de Equipos", 
                  "Trade Marketing", "Comunicación Visual", "Coordinación Comercial"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-semibold text-brand-primary">
                    <CheckCircle2 size={16} className="text-brand-complement" /> {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="relative pl-8 border-l-2 border-brand-base">
               <h3 className="font-display font-bold text-xl mb-8 text-brand-primary">Trayectoria Profesional</h3>
               {/* Línea de tiempo visual simplificada */}
               <div className="space-y-8">
                 {[
                   { year: "Actualidad", title: "Coordinación y Estrategia", desc: "Liderando iniciativas de marketing integral y comunicación estratégica." },
                   { year: "Formación", title: "Maestría en Marketing / Comunicación", desc: "Especialización en visión de negocio y análisis de mercado." },
                   { year: "Inicios", title: "Diseño Gráfico Profesional", desc: "Fundamentos visuales aplicados a marcas de alto impacto." }
                 ].map((item, i) => (
                   <div key={i} className="relative">
                     <div className="absolute -left-10 w-4 h-4 bg-brand-secondary rounded-full border-4 border-white shadow-sm" />
                     <span className="text-xs font-bold text-brand-secondary uppercase">{item.year}</span>
                     <h4 className="font-bold text-brand-dark">{item.title}</h4>
                     <p className="text-sm text-brand-muted">{item.desc}</p>
                   </div>
                 ))}
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- LO QUE APORTO (Propuesta de Valor) --- */}
      <section className="py-20 px-6 bg-brand-base">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Mi enfoque garantiza que la creatividad siempre esté al servicio de los resultados.">
            Lo que aporto a tu organización
          </SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Visión Integral", text: "Conecto la estrategia de alto nivel con la ejecución detallada en el día a día.", icon: <Target className="text-brand-secondary" /> },
              { title: "Capacidad de Mando", text: "Coordino equipos y múltiples iniciativas simultáneamente sin perder el foco.", icon: <Users className="text-brand-secondary" /> },
              { title: "Adaptabilidad Real", text: "Experiencia probada en sectores como salud, retail, moda y deporte.", icon: <Rocket className="text-brand-secondary" /> }
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-primary/5">
                <div className="mb-4">{item.icon}</div>
                <h4 className="font-display font-bold text-brand-primary mb-2 text-lg">{item.title}</h4>
                <p className="text-brand-muted text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ASÍ TRABAJO (Metodología) --- */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle><span className="text-white">Así Trabajo</span></SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { n: "01", t: "Escuchar", d: "Entender necesidades y objetivos comerciales." },
              { n: "02", t: "Planear", d: "Estructurar la hoja de ruta estratégica." },
              { n: "03", t: "Crear", d: "Ejecución visual y narrativa con propósito." },
              { n: "04", t: "Coordinar", d: "Gestión de recursos, tiempos y equipos." },
              { n: "05", t: "Optimizar", d: "Medición de resultados y mejora continua." }
            ].map((step, i) => (
              <div key={i} className="text-center p-4">
                <div className="text-brand-accent font-display font-bold text-3xl mb-2">{step.n}</div>
                <h4 className="font-bold mb-2">{step.t}</h4>
                <p className="text-xs text-white/70">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCIA DESTACADA --- */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Gestión y resultados en diversas industrias">Experiencia Destacada</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { sector: "Salud y Bienestar", role: "Coordinación de Comunicaciones", desc: "Liderazgo de campañas digitales y alineación de mensajes institucionales." },
              { sector: "Retail y Consumo Masivo", role: "Especialista en Marketing Digital", desc: "Desarrollo de piezas y estrategias de conversión para puntos de venta." },
              { sector: "Moda y Comercio", role: "Líder de Contenido & Visual", desc: "Creación de identidad visual y gestión de presencia omnicanal." },
              { sector: "Deporte y Entrenamiento", role: "Gestión de Marca", desc: "Posicionamiento de marca y engagement con comunidades digitales." }
            ].map((exp, i) => (
              <motion.div key={i} {...fadeIn} className="group p-8 rounded-2xl border-2 border-brand-base hover:border-brand-secondary transition-all">
                <span className="text-xs font-bold text-brand-complement uppercase tracking-widest">{exp.sector}</span>
                <h4 className="font-display font-bold text-2xl text-brand-primary mt-2 mb-4">{exp.role}</h4>
                <div className="space-y-3 text-sm text-brand-muted">
                  <p><strong>Contexto:</strong> Gestión de marca en entorno competitivo.</p>
                  <p><strong>Mi rol:</strong> Planificación estratégica y supervisión de ejecución.</p>
                  <p><strong>Valor aportado:</strong> {exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FORTALEZAS & HERRAMIENTAS --- */}
      <section className="py-20 px-6 bg-brand-base">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-display font-bold text-2xl text-brand-primary mb-8">Fortalezas Clave</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Estrategia de Marketing", "Comunicación Estratégica", "Diseño Gráfico", 
                "Gestión de Redes", "Publicidad Digital", "Trade Marketing", 
                "Liderazgo", "Gestión de Proyectos", "Analítica"
              ].map((skill, i) => (
                <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-brand-primary/5">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display font-bold text-2xl text-brand-primary mb-8">Herramientas</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-bold uppercase tracking-tighter">
              {[
                "Meta Ads", "Google Ads", "Adobe Illustrator", "Adobe Photoshop", 
                "Mailchimp", "Google Analytics", "Microsoft Office", "CapCut"
              ].map((tool, i) => (
                <div key={i} className="flex items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                  <div className="w-2 h-2 bg-brand-complement rounded-full" /> {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACTO --- */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto bg-brand-primary rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">¿Hablamos de tu próximo gran proyecto?</h2>
            <p className="mb-10 text-white/80">Estoy abierta a nuevas oportunidades donde pueda aportar una visión estratégica, creativa y orientada a la ejecución.</p>
            
            <div className="flex flex-col gap-4 items-center">
              <a href="mailto:tu-correo@ejemplo.com" className="flex items-center gap-3 text-brand-accent text-xl font-bold hover:underline">
                <Mail /> tu-correo@ejemplo.com
              </a>
              <div className="flex gap-4 mt-4">
                <Button variant="accent">Contactar por WhatsApp</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary">LinkedIn</Button>
              </div>
            </div>
          </div>
          {/* Círculos decorativos de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/20 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-complement/20 rounded-full -ml-32 -mb-32 blur-3xl" />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 text-center text-brand-muted text-sm border-t border-brand-base bg-white">
        <p>© {new Date().getFullYear()} Diana Valentina Ortiz Ossa — Estratega de Marketing & Comunicación</p>
      </footer>
    </div>
  );
}
