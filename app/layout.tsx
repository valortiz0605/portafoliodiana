import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Diana Valentina Ortiz Ossa | Marketing & Diseño",
  description:
    "Portafolio profesional en marketing digital, diseño y comunicación estratégica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${poppins.className} bg-[#0B0F19] text-white`}>
        {children}
      </body>
    </html>
  );
}
