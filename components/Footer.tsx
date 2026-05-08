import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-madera-900 text-white py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        <div className="md:col-span-1">
          <h3 className="text-2xl font-playfair font-bold mb-4">Los Artesanos.</h3>
          <p className="text-madera-100/70 font-inter leading-relaxed text-sm">
            Maestros carpinteros desde 1896. Diseñamos y fabricamos mobiliario a medida, fusionando técnicas centenarias con un diseño atemporal para espacios con alma.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 font-inter text-lg tracking-wide">Navegación</h4>
          <ul className="space-y-4 font-inter text-madera-100/70 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors duration-200">Inicio</Link></li>
            <li><Link href="/proyectos" className="hover:text-white transition-colors duration-200">Nuestra Obra</Link></li>
            <li><Link href="/sobre-nosotros" className="hover:text-white transition-colors duration-200">Nuestra Historia</Link></li>
            <li><Link href="/contacto" className="hover:text-white transition-colors duration-200">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 font-inter text-lg tracking-wide">El Taller</h4>
          <ul className="space-y-4 font-inter text-madera-100/70 text-sm">
            <li>
              Av. de los Ebanistas, Nave 14<br />
              Polígono Industrial El Robledal<br />
              28045 Madrid, España
            </li>
            <li className="pt-2">
              <a href="mailto:info@tallerlosartesanos.es" className="hover:text-white transition-colors duration-200">
                info@tallerlosartesanos.es
              </a>
            </li>
            <li>
              <a href="tel:+34915552348" className="hover:text-white transition-colors duration-200">
                +34 91 555 23 48
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 font-inter text-lg tracking-wide">Atención al Cliente</h4>
          <ul className="space-y-2 font-inter text-madera-100/70 text-sm mb-8">
            <li className="flex justify-between"><span>Lunes - Jueves:</span> <span>08:00 - 18:00</span></li>
            <li className="flex justify-between"><span>Viernes:</span> <span>08:00 - 14:00</span></li>
            <li className="flex justify-between text-madera-100/40"><span>Sábados y Domingos:</span> <span>Cerrado</span></li>
          </ul>
          
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-madera-100/40 font-inter">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Taller Los Artesanos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}