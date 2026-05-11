import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProyectos } from "@/lib/data";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  const proyectos = await getProyectos();
  
  return proyectos.map((proyecto) => ({
    slug: proyecto.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const proyectos = await getProyectos();
  const proyecto = proyectos.find((p) => p.slug === slug);

  if (!proyecto) {
    return { title: "Proyecto no encontrado" };
  }

  return {
    title: `${proyecto.titulo} | Los Artesanos`,
    description: proyecto.descripcion,
  };
}

export default async function DetalleProyecto({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  

  const { slug } = await params;
  const proyectos = await getProyectos();
  const proyecto = proyectos.find((p) => p.slug === slug);

  if (!proyecto) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-playfair mb-4 text-madera-900">Proyecto no encontrado</h1>
        <Button asChild variant="outline" className="border-industrial/30 text-industrial hover:text-madera-900 hover:bg-madera-100 font-inter">
          <Link href="/proyectos">
            &larr; Volver a la galería
          </Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-8 py-20">
      
      <Button asChild variant="ghost" className="mb-8 -ml-4 text-industrial hover:text-madera-900 hover:bg-madera-100 font-inter">
        <Link href="/proyectos">
          &larr; Volver a la galería
        </Link>
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative h-125 w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src={proyecto.imagen}
            alt={proyecto.titulo}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-madera-900 mb-6">
            {proyecto.titulo}
          </h1>
          <p className="text-industrial text-lg mb-8 leading-relaxed font-inter">
            {proyecto.descripcion}
          </p>

          <div className="bg-madera-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold font-playfair text-madera-900 mb-4">
              Materiales Utilizados:
            </h3>
            <ul className="list-disc list-inside text-industrial space-y-2 font-inter">
              {proyecto.materiales.map((material, index) => (
                <li key={index}>{material}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </main>
  );
}