import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="border-b border-industrial/20 bg-white sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        
        <Link href="/" className="text-2xl font-playfair font-bold text-madera-900">
          Los Artesanos
        </Link>
        
        <div className="hidden md:flex gap-8 items-center font-inter">
          <Link href="/proyectos" className="text-industrial hover:text-madera-900 transition font-medium">
            Proyectos
          </Link>
          <Link href="/sobre-nosotros" className="text-industrial hover:text-madera-900 transition font-medium">
            Nuestra Historia
          </Link>
          <Button asChild className="bg-madera-900 text-white hover:bg-madera-800">
            <Link href="/contacto">Hablemos</Link>
          </Button>
        </div>

      </nav>
    </header>
  );
}