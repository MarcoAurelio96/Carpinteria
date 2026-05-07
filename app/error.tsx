'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-8 text-center">
      <h2 className="text-4xl font-playfair font-bold text-madera-900 mb-4">
        ¡Ups! Algo ha salido mal
      </h2>
      <p className="text-industrial mb-8 font-inter max-w-md">
        Lo sentimos, parece que hubo un error al cargar esta parte del taller. 
        Estamos trabajando para arreglarlo.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} className="bg-madera-900 text-white">
          Intentar de nuevo
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </main>
  );
}