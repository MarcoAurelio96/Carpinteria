'use client';

import Link from "next/link";
import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { enviarMensaje } from "./actions";

export default function ContactoPage() {
  const [state, formAction, isPending] = useActionState(enviarMensaje, null);

  return (
    <main className="max-w-3xl mx-auto px-8 py-20">


      <h1 className="text-5xl font-playfair font-bold text-madera-900 mb-8 text-center">
        Hablemos de tu proyecto
      </h1>
      
      {state?.success ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-8 rounded-xl text-center mb-8">
          <h3 className="text-2xl font-bold font-playfair mb-2">¡Mensaje enviado!</h3>
          <p className="font-inter">{state.message}</p>
        </div>
      ) : (
        <>
          <p className="text-industrial text-center mb-12 font-inter text-lg">
            ¿Tienes una idea en mente? Cuéntanosla y la haremos realidad en madera.
          </p>

          <form action={formAction} className="space-y-6 bg-madera-100 p-8 rounded-xl shadow-sm">
            
            {state?.error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-md font-inter text-sm text-center">
                {state.error}
              </div>
            )}

            <div>
              <label htmlFor="nombre" className="block text-madera-900 font-bold mb-2 font-inter">Nombre</label>
              <Input type="text" id="nombre" name="nombre" required placeholder="Tu nombre completo" className="bg-white border-industrial/30" />
            </div>

            <div>
              <label htmlFor="email" className="block text-madera-900 font-bold mb-2 font-inter">Correo Electrónico</label>
              <Input type="email" id="email" name="email" required placeholder="tu@email.com" className="bg-white border-industrial/30" />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-madera-900 font-bold mb-2 font-inter">Mensaje</label>
              <Textarea id="mensaje" name="mensaje" rows={5} required placeholder="Cuéntanos los detalles..." className="bg-white border-industrial/30 resize-none" />
            </div>

            <Button type="submit" disabled={isPending} className="w-full bg-madera-900 text-white font-bold py-6 hover:bg-madera-800 transition font-inter">
              {isPending ? "Enviando..." : "Enviar Mensaje"}
            </Button>

          </form>
        </>
      )}
    </main>
  );
}