import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="relative w-full h-150 flex items-center justify-center">
        <Image
          src="http://googleusercontent.com/image_collection/image_retrieval/12621170662060542177_0"
          alt="Taller de Carpintería Los Artesanos"
          fill
          priority
          className="object-cover z-0"
        />
        
        <div className="absolute inset-0 bg-madera-900/60 z-10"></div>

        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6">
            Maestros Artesanales
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-inter">
            Especialistas en muebles a medida y restauración artesanal desde 1996.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-madera-500 hover:bg-madera-900 text-white">
              <Link href="/proyectos">Ver Proyectos</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-madera-900 border-white hover:bg-white">
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
        </div>        
      </section>

      <section className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl text-center font-playfair text-industrial-dark mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 border border-industrial/20 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-playfair font-bold text-madera-900 mb-3">Muebles a Medida</h3>
            <p className="text-industrial">Diseñamos y construimos piezas únicas que se adaptan perfectamente a tu espacio y estilo.</p>
          </div>
          <div className="p-6 border border-industrial/20 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-playfair font-bold text-madera-900 mb-3">Restauración</h3>
            <p className="text-industrial">Devolvemos la vida y el esplendor a tus muebles antiguos respetando su historia y materiales.</p>
          </div>
          <div className="p-6 border border-industrial/20 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-playfair font-bold text-madera-900 mb-3">Carpintería Estructural</h3>
            <p className="text-industrial">Pérgolas, vigas y estructuras robustas en maderas tratadas para interiores y exteriores.</p>
          </div>
        </div>
      </section>

    </main>
  );
}