![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=fff)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=FFF)
![Next](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

# 🪚 Taller Los Artesanos
> Maestros carpinteros desde 1896. Ebanistería y mobiliario a medida.

Aplicación web moderna y de diseño premium desarrollada para un taller de ebanistería tradicional. El proyecto hace uso de las últimas características de Next.js (App Router, Server Components) para ofrecer una experiencia de usuario fluida, destacando la optimización de imágenes de alta resolución y el manejo avanzado de estados de carga mediante *Streaming* y *Suspense*.

| Despliegue | URL |
|------------|-----|
| Frontend | [Visitar Web en Vercel](https://carpinteria-ecru.vercel.app/) |

---

## Características

- **Enrutamiento Dinámico:** Sistema de rutas dinámicas (`/proyectos/[slug]`) para la generación de páginas de detalles de cada producto o mueble.
- **Optimización de Medios:** Uso del componente `next/image` con calidad ajustada, pre-carga (`priority`) y efecto *placeholder blur* codificado en base64 para evitar saltos de diseño (CLS).
- **Streaming y Suspense UI:** Simulación de latencia de red con renderizado del lado del servidor (`force-dynamic`) para la exhibición de esqueletos de carga (`loading.tsx`), mejorando la percepción de rendimiento (UX).
- **Diseño Premium y Responsivo:** Interfaz construida con Tailwind CSS, implementando un diseño de alta costura, tipografías personalizadas (Playfair Display e Inter) y componentes reutilizables (`shadcn/ui`).

---

## Tecnologías

| Frontend | Uso |
|----------|-----|
| **Next.js (App Router)** | Framework principal para la arquitectura web y enrutamiento. |
| **React 18** | Biblioteca base para la construcción de interfaces de usuario. |
| **Tailwind CSS** | Framework de utilidades CSS para el diseño ágil y responsivo. |
| **TypeScript** | Tipado estático para asegurar la integridad de los datos de la galería. |

| Backend (Simulado) | Uso |
|---------|-----|
| **Next.js Server Components** | Lógica de obtención de datos ejecutada directamente en el servidor. |
| **Local Data Module** | Base de datos local simulada (`lib/data.ts`) para alimentar la galería. |

| Auxiliares | Uso |
|------------|-----|
| **Vercel** | Plataforma de alojamiento y despliegue continuo (CI/CD). |
| **Git / GitHub** | Control de versiones y almacenamiento del código fuente. |

---

## Estructura del proyecto

## Estructura del proyecto

```text
Carpinteria/
├── app/                      # Lógica principal del App Router de Next.js
│   ├── contacto/             # Sección de contacto
│   │   ├── actions.ts        # Server Actions para el manejo seguro de formularios
│   │   └── page.tsx          # Interfaz de usuario de contacto
│   ├── proyectos/            # Sección de la galería
│   │   ├── [slug]/           # Ruta dinámica para detalles de cada mueble
│   │   │   ├── loading.tsx   # Suspense UI (esqueleto) individual
│   │   │   └── page.tsx      # Detalles específicos del proyecto
│   │   ├── loading.tsx       # Suspense UI (esqueleto) para la galería
│   │   └── page.tsx          # Listado general de la obra
│   ├── sobre-nosotros/       # Página de historia y proceso artesanal
│   │   └── page.tsx
│   ├── error.tsx             # Manejo de errores global
│   ├── globals.css           # Estilos globales y directivas de Tailwind
│   ├── layout.tsx            # Plantilla global (fuentes, estructura y Navbar/Footer)
│   ├── middleware.ts         # Middleware para control de rutas y peticiones
│   └── page.tsx              # Landing page (Hero, historia y servicios destacados)
├── components/               # Componentes modulares y de interfaz
│   ├── ui/                   # Componentes base instalados (shadcn/ui)
│   ├── Footer.tsx            # Pie de página con datos de contacto realistas
│   ├── Navbar.tsx            # Barra de navegación principal
│   └── SkeletonCard.tsx      # Componente visual para los estados de carga
├── lib/                      # Lógica de negocio y utilidades
│   ├── data.ts               # Base de datos local simulada (muebles, materiales y links)
│   └── utils.ts              # Funciones auxiliares (ej. fusión de clases de Tailwind)
├── README.md