import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="relative w-full h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=2500&auto=format&fit=crop"
          alt="Taller de Carpintería Los Artesanos"
          fill
          priority
          sizes="100vw" 
          className="object-cover z-0"
        />
        
        <div className="absolute inset-0 bg-madera-900/60 z-10"></div>

        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6">
            Maestros Artesanales
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-inter max-w-2xl mx-auto">
            Especialistas en muebles a medida y restauración artesanal desde 1996.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-madera-500 hover:bg-madera-600 text-white font-inter">
              <Link href="/proyectos">Ver Proyectos</Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-madera-900 font-inter">
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
        </div>        
      </section>

      <section className="bg-madera-100 py-20 px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-madera-900 mb-6">
            Artesanía con Historia
          </h2>
          <p className="text-industrial text-lg font-inter mb-8 leading-relaxed">
            Cada mueble que sale de nuestro taller cuenta una historia. Descubre cómo nuestra pasión por la madera se ha transmitido de generación en generación, combinando técnicas tradicionales con la máxima precisión.
          </p>
          <Button asChild size="lg" variant="outline" className="border-madera-900 text-madera-900 hover:bg-madera-900 hover:text-white font-inter">
            <Link href="/sobre-nosotros">Conoce nuestra historia</Link>
          </Button>
        </div>
      </section>

      <section className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl text-center font-playfair font-bold text-madera-900 mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 border border-industrial/20 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-playfair font-bold text-madera-900 mb-3">Muebles a Medida</h3>
            <p className="text-industrial font-inter">Diseñamos y construimos piezas únicas que se adaptan perfectamente a tu espacio y estilo.</p>
          </div>
          <div className="p-6 border border-industrial/20 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-playfair font-bold text-madera-900 mb-3">Restauración</h3>
            <p className="text-industrial font-inter">Devolvemos la vida y el esplendor a tus muebles antiguos respetando su historia y materiales.</p>
          </div>
          <div className="p-6 border border-industrial/20 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-playfair font-bold text-madera-900 mb-3">Carpintería Estructural</h3>
            <p className="text-industrial font-inter">Pérgolas, vigas y estructuras robustas en maderas tratadas para interiores y exteriores.</p>
          </div>
        </div>
      </section>

    </main>
  );
}