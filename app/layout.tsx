export const metadata = {
  title: 'Diana Valentina Ortiz Ossa | Estratega de Marketing & Diseño',
  description:
    'Portafolio profesional de marketing, diseño y comunicación estratégica',
};
import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700"],
  variable: "--font-poppins" 
});

const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["300", "400", "700"],
  variable: "--font-lato" 
});

export const metadata: Metadata = {
  title: "Diana Valentina Ortiz Ossa | Estrategia de Marketing & Diseño",
  description: "Estratega de marketing, comunicación y diseño gráfico. Especialista en transformar objetivos comerciales en estrategias accionables.",
  keywords: ["Marketing Digital", "Comunicación Estratégica", "Diseño Gráfico", "Coordinación de Mercadeo"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${poppins.variable} ${lato.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
