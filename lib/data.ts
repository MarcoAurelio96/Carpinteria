export interface Proyecto {
  slug: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  materiales: string[];
}

export const proyectosDB: Proyecto[] = [
  {
    slug: "mesa-roble-macizo",
    titulo: "Mesa de Roble Macizo",
    descripcion: "Mesa de comedor para 8 personas tallada a mano con bordes naturales.",
    imagen: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=2500&auto=format&fit=crop",
    materiales: ["Roble Macizo", "Aceite de linaza", "Acero (patas)"]
  },
  {
    slug: "reforma-loft-industrial",
    titulo: "Reforma Loft",
    descripcion: "Diseño y fabricación de mobiliario a medida para loft de estilo industrial.",
    imagen: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=2500&auto=format&fit=crop",
    materiales: ["Madera reciclada", "Hierro forjado", "Cristal templado"]
  },
  {
    slug: "silla-clasica-nogal",
    titulo: "Silla Clásica en Nogal",
    descripcion: "Restauración completa de un juego de sillas del siglo XIX.",
    imagen: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=2500&auto=format&fit=crop",
    materiales: ["Madera de Nogal", "Barniz natural", "Tela de lino"]
  }
];

export async function getProyectos(): Promise<Proyecto[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(proyectosDB);
    }, 2000);
  });
}