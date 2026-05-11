import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap", 
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taller Los Artesanos | Ebanistería y Restauración",
  description: "Maestros carpinteros desde 1896. Especialistas en muebles a medida, restauración artesanal y diseño de espacios únicos.",
  keywords: ["carpintería", "ebanistería", "muebles a medida", "restauración", "madera"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white antialiased">
        
        <Navbar />
        
        <div className="flex-grow">
          {children}
        </div>

        <Footer />
        
      </body>
    </html>
  );
}