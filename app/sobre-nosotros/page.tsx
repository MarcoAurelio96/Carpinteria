import Image from "next/image";

export default function SobreNosotros() {
  return (
    <main className="max-w-5xl mx-auto px-8 py-20">
      
      <h1 className="text-5xl font-playfair font-bold text-madera-900 mb-10 text-center">
        Nuestra Historia
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-playfair text-industrial-dark mb-4">
            Generaciones de Pasión por la Madera
          </h2>
          <p className="text-industrial text-lg mb-4 leading-relaxed font-inter">
            Fundada en 1996, la Carpintería Los Artesanos comenzó como un pequeño taller familiar y blablabla...
          </p>
          <p className="text-industrial text-lg leading-relaxed font-inter">
            Nuestro compromiso siempre ha sido mantener vivas las técnicas tradicionales mientras abrazamos las herramientas modernas para ofrecer acabados perfectos y duraderos.
          </p>
        </div>
        
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image 
            src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=2500&auto=format&fit=crop"
            alt="Fundadores trabajando la madera"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-madera-100 p-10 rounded-xl">
        <h2 className="text-3xl font-playfair text-madera-900 mb-6 text-center">
          Nuestro Proceso Artesanal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="text-center">
             <div className="w-16 h-16 bg-madera-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
             <h3 className="text-xl font-bold mb-2">Selección</h3>
             <p className="text-industrial">Elegimos las mejores materias primas de bosques sostenibles.</p>
           </div>
        </div>
      </section>

    </main>
  );
}