<div align="center">

# Aldair Canul · Portafolio

**Desarrollo de videojuegos y experiencias web**

Portafolio personal con los proyectos que realicé durante el semestre en la
Universidad Autónoma de Campeche (UACAM).

[![Ver sitio en vivo](https://img.shields.io/badge/Ver%20sitio-en%20vivo-e8895a?style=for-the-badge&logo=cloudflare&logoColor=white)](https://mi-portafolio.canuleddiel5.workers.dev/)

![React](https://img.shields.io/badge/React-18-20232a?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=flat-square&logo=cloudflare&logoColor=white)

</div>

---

## Sobre el proyecto

Sitio de una sola página hecho con **React** y **Vite**. Presenta mis proyectos,
habilidades y certificación, con un diseño sobrio y adaptable a computadora y celular.

**Secciones**

- **Portada:** presentación, foto y cifras del trabajo realizado.
- **Proyectos:** lista con filtros por tipo; cada proyecto se despliega con imágenes, descripción y enlace.
- **Habilidades:** herramientas y conocimientos practicados.
- **Certificación:** insignia de Cisco Networking Academy (CCNA: Introducción a las redes).
- **Contacto:** correo y perfil de GitHub.

## Proyectos que se muestran

| Proyecto | Descripción |
| --- | --- |
| [Fora de Lugar · Sitio informativo](https://fora-pagina-informativa.pages.dev/) | Sitio del proyecto: historia, personajes, minijuegos, encuestas y documentación. |
| [Fora de Lugar · Videojuego](https://github.com/Aldair-Canul/Facultad-de-Ingenieria---Fora-de-Lugar) | Videojuego narrativo 2D en pixel art hecho con Godot 4. |
| [fora/commit · Guía de Godot, Git y GitHub](https://aldair-canul.github.io/Guia-informativa-del-flujo-de-trabajo-de-fora-de-lugar/) | Guía en español con simulador de ramas y buscador de comandos. |
| [Lona interactiva · Infomatrix 2026](https://aldair-canul.github.io/Pagina-Lona-Interactiva/) | Lona científica en web para Infomatrix Campeche 2026. |
| [Escapa de Gordito](https://aldair-canul.github.io/Escapa-de-Gordito/) | Minijuego web de reflejos. |

## Tecnologías

- [React](https://react.dev/) para la interfaz y los componentes
- [Vite](https://vite.dev/) como herramienta de desarrollo y compilación
- CSS propio, sin librerías de estilos
- [Cloudflare Workers](https://workers.cloudflare.com/) para el hospedaje

## Estructura

```
portafolio-web/
├── .github/workflows/   Publicación automática en GitHub Pages
├── public/img/          Imágenes del sitio
├── src/
│   ├── components/      Componentes React (Header, Hero, Projects, Skills...)
│   ├── data.js          Contenido: proyectos, habilidades y datos personales
│   ├── hooks.js         Efectos reutilizables
│   ├── assets.js        Ayuda para rutas de imágenes
│   ├── styles.css       Estilos
│   └── main.jsx         Punto de entrada
├── index.html           Documento base
├── vite.config.js       Configuración de Vite
└── wrangler.jsonc       Configuración de Cloudflare
```

## Cómo correrlo en tu computadora

Necesitas [Node.js](https://nodejs.org/) 18 o superior.

```bash
# 1. Clonar el repositorio
git clone https://github.com/Aldair-Canul/-Mi-portafolio.git
cd -Mi-portafolio

# 2. Instalar dependencias
npm install

# 3. Abrir en modo desarrollo
npm run dev
```

Después abre la dirección que muestre la terminal, normalmente `http://localhost:5173`.

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la versión final en la carpeta `dist/` |
| `npm run preview` | Muestra la versión compilada en local |

## Cómo editar el contenido

Casi todo el texto del sitio está en **`src/data.js`**: proyectos, habilidades, cifras y
datos de contacto. Para agregar un proyecto, copia uno de los existentes en la lista
`PROJECTS`, cambia sus datos y guarda una imagen en `public/img/`.

## Despliegue

El sitio se publica en Cloudflare Workers cada vez que se hace `git push` a la rama
`main`: Cloudflare ejecuta `npm run build` y sube la carpeta `dist/` según
`wrangler.jsonc`.

El repositorio también incluye un workflow de GitHub Actions
(`.github/workflows/deploy.yml`) para publicar en GitHub Pages.

## Autor

**Aldair Eddiel Canul Cabrera**
Ingeniería en Tecnología de Software · Universidad Autónoma de Campeche

[![GitHub](https://img.shields.io/badge/GitHub-Aldair--Canul-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Aldair-Canul)
