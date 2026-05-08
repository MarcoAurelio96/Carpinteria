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
    titulo: "Mesa de Roble",
    descripcion: "Mesa de comedor artesanal en roble macizo para 8 comensales. Sus bordes tallados a mano.",
    imagen: "https://images.unsplash.com/photo-1605635544350-5796fb1622d1?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    materiales: ["Madera de roble macizo europeo", "Tratamiento natural con aceite de linaza", "Ensamblaje artesanal tradicional"]
  },
  {
    slug: "reforma",
    titulo: "Reformas Loft",
    descripcion: "Diseño, fabricación y montaje de mobiliario industrial. Ideal para optimizar los espacios del loft.",
    imagen: "https://images.unsplash.com/photo-1626081063434-79a2169791b1?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    materiales: ["Tableros de madera recuperada y tratada", "Soportes de acero oscuro", "Ensamblajes y acabados pulidos a mano"]
  },
  {
    slug: "silla-clasica-nogal",
    titulo: "Restauración sillas Clásicas",
    descripcion: "Trabajo de ebanistería y tapizado tradicional. Restauración conjunto histórico del siglo XIX.",
    imagen: "https://images.unsplash.com/photo-1635763122529-fb38c52a8160?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    materiales: ["Madera de nogal original restaurada", "Tratamiento protector con barniz natural", "Textil de lino con patrón de rayas"]
  }
];

export async function getProyectos(): Promise<Proyecto[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(proyectosDB);
    }, 2000);
  });
}