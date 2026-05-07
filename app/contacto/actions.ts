'use server';

export type FormState = {
  success?: boolean;
  error?: string;
  message?: string;
} | null;

export async function enviarMensaje(prevState: FormState, formData: FormData): Promise<FormState> {
  const nombre = formData.get('nombre') as string;
  const email = formData.get('email') as string;
  const mensaje = formData.get('mensaje') as string;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!nombre || !email || !mensaje) {
    return { error: "Todos los campos son obligatorios." };
  }

  console.log(`Mensaje de: ${nombre} (${email}) - ${mensaje}`);

  return { success: true, message: "¡Gracias! Tu mensaje ha sido enviado correctamente." };
}