import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SobreNosotros() {
  return (
    <main className="max-w-5xl mx-auto px-8 py-20">
      
      <h1 className="text-5xl font-playfair font-bold text-madera-900 mb-10 text-center">
        Nuestra Historia
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-playfair text-industrial mb-4 font-bold">
            Generaciones de Pasión por la Madera
          </h2>
          <p className="text-industrial text-lg mb-4 leading-relaxed font-inter">
            Fundada en 1896, la Carpintería Los Artesanos comenzó como un pequeño taller familiar. A lo largo de más de un siglo y cuatro generaciones, hemos transmitido el amor por la ebanistería de padres a hijos, perfeccionando el arte de dar vida a la nobleza de la madera.
          </p>
          <p className="text-industrial text-lg leading-relaxed font-inter">
            Nuestro compromiso siempre ha sido mantener vivas las técnicas tradicionales mientras abrazamos las herramientas modernas para ofrecer acabados perfectos y duraderos.
          </p>
        </div>
        
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image 
            src="https://images.unsplash.com/photo-1659930087003-2d64e33181f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fundadores trabajando la madera"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      <section className="bg-madera-100 p-10 rounded-xl mb-16">
        <h2 className="text-3xl font-playfair text-madera-900 mb-8 text-center font-bold">
          Nuestro Proceso Artesanal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="text-center">
             <div className="w-16 h-16 bg-madera-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-md">1</div>
             <h3 className="text-xl font-bold mb-2 font-playfair text-madera-900">Selección</h3>
             <p className="text-industrial font-inter">Elegimos las mejores materias primas de bosques sostenibles.</p>
           </div>
           <div className="text-center">
             <div className="w-16 h-16 bg-madera-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-md">2</div>
             <h3 className="text-xl font-bold mb-2 font-playfair text-madera-900">Diseño</h3>
             <p className="text-industrial font-inter">Trazamos cada línea pensando en la funcionalidad y la estética, adaptándonos milimétricamente a tu espacio.</p>
           </div>
           <div className="text-center">
             <div className="w-16 h-16 bg-madera-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-md">3</div>
             <h3 className="text-xl font-bold mb-2 font-playfair text-madera-900">Elaboración</h3>
             <p className="text-industrial font-inter">Nuestros maestros ebanistas cortan, ensamblan y tallan la madera utilizando técnicas centenarias.</p>
           </div>
        </div>
      </section>

      <section className="text-center bg-white border border-industrial/20 p-12 rounded-xl shadow-sm">
        <h2 className="text-3xl font-playfair text-madera-900 mb-4 font-bold">
          ¿Listo para crear algo único?
        </h2>
        <p className="text-industrial text-lg mb-8 font-inter max-w-2xl mx-auto">
          Cuéntanos tu idea y nuestro equipo de artesanos se encargará de hacerla realidad con la máxima dedicación.
        </p>
        <Button asChild size="lg" className="bg-madera-900 text-white hover:bg-madera-800 text-lg px-8 py-6">
          <Link href="/contacto">
            Habla con nosotros
          </Link>
        </Button>
      </section>

    </main>
  );
}