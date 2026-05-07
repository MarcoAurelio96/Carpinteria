import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-madera-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-2xl font-playfair font-bold mb-4">Los Artesanos.</h3>
          <p className="text-madera-100/70 font-inter leading-relaxed">
            Maestros carpinteros desde 1996. Creando piezas únicas con pasión, tradición y precisión.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 font-inter text-lg">Navegación</h4>
          <ul className="space-y-3 font-inter text-madera-100/70">
            <li><Link href="/" className="hover:text-white transition">Inicio</Link></li>
            <li><Link href="/proyectos" className="hover:text-white transition">Nuestros Proyectos</Link></li>
            <li><Link href="/sobre-nosotros" className="hover:text-white transition">Sobre Nosotros</Link></li>
            <li><Link href="/contacto" className="hover:text-white transition">Contacto</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 font-inter text-lg">Contacto</h4>
          <ul className="space-y-3 font-inter text-madera-100/70">
            <li>Taller: Calle de la Madera, 123</li>
            <li>Teléfono: +34 900 123 456</li>
            <li>Email: hola@losartesanos.com</li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-white/20 text-center text-sm text-madera-100/50 font-inter">
        &copy; {new Date().getFullYear()} Carpintería Los Artesanos. Todos los derechos reservados.
      </div>
    </footer>
  );
}