export default function ContactoPage() {
  
  async function enviarMensaje(formData: FormData) {
    'use server'; 

    const nombre = formData.get('nombre');
    const email = formData.get('email');
    const mensaje = formData.get('mensaje');

    if (!nombre || !email || !mensaje) {
      console.warn("⚠️ Intento de envío con campos vacíos bloqueado.");
      return; 
    }

    console.log("=== NUEVO MENSAJE RECIBIDO ===");
    console.log(`Nombre: ${nombre}`);
    console.log(`Email: ${email}`);
    console.log(`Mensaje: ${mensaje}`);
    console.log("==============================");
  }

  return (
    <main className="max-w-3xl mx-auto px-8 py-20">
      <h1 className="text-5xl font-playfair font-bold text-madera-900 mb-8 text-center">
        Hablemos de tu proyecto
      </h1>
      <p className="text-industrial text-center mb-12 font-inter text-lg">
        ¿Tienes una idea en mente? Cuéntanosla y la haremos realidad en madera.
      </p>

      <form action={enviarMensaje} className="space-y-6 bg-madera-100 p-8 rounded-xl shadow-sm">
        
        <div>
          <label htmlFor="nombre" className="block text-madera-900 font-bold mb-2 font-inter">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            required
            className="w-full border border-industrial/20 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-madera-500"
            placeholder="Tu nombre completo"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-madera-900 font-bold mb-2 font-inter">Correo Electrónico</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required
            className="w-full border border-industrial/20 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-madera-500"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-madera-900 font-bold mb-2 font-inter">Mensaje</label>
          <textarea 
            id="mensaje" 
            name="mensaje" 
            rows={5}
            required
            className="w-full border border-industrial/20 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-madera-500"
            placeholder="Cuéntanos los detalles del mueble que necesitas..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-madera-900 text-white font-bold py-4 rounded-md hover:bg-madera-800 transition font-inter"
        >
          Enviar Mensaje
        </button>

      </form>
    </main>
  );
}