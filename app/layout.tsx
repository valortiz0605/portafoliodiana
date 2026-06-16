import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Diana Valentina Ortiz Ossa | Marketing & Diseño",
  description:
    "Portafolio profesional en marketing, diseño y comunicación estratégica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-sans bg-[#E9DDF4] text-black`}>
        {children}
      </body>
    </html>
  );
}
