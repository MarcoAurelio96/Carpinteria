import Image from "next/image";
import Link from "next/link";
import { getProyectos } from "@/lib/data";

export const revalidate = 60;

export default async function ProyectosPage() {
  const proyectos = await getProyectos();

  return (
    <main className="max-w-7xl mx-auto px-8 py-20">
      <h1 className="text-5xl font-playfair font-bold text-madera-900 mb-12 text-center">
        Nuestros Proyectos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {proyectos.map((proyecto) => (
 
          <div key={proyecto.slug} className="border border-industrial/20 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            
            <div className="relative h-64 w-full">
              <Image
                src={proyecto.imagen}
                alt={proyecto.titulo}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
              />
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-playfair font-bold text-madera-900 mb-2">
                {proyecto.titulo}
              </h2>
              <p className="text-industrial mb-4 line-clamp-2 font-inter">
                {proyecto.descripcion}
              </p>
              
              <Link href={`/proyectos/${proyecto.slug}`} className="text-madera-500 font-bold hover:underline">
                Ver detalles &rarr;
              </Link>
            </div>

          </div>
        ))}

      </div>
    </main>
  );
}