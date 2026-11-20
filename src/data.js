export const PROFILE = {
  photo: "aldair.jpg",
  name: "Aldair Eddiel Canul Cabrera",
  email: "al075462@uacam.mx",
  github: "https://github.com/Aldair-Canul",
  roles: ["videojuegos", "experiencias web", "flujos con Git", "proyectos en equipo"],
};

export const STATS = [
  { value: 128, label: "commits en el repo de Fora" },
  { value: 61, label: "pull requests fusionados" },
  { value: 5, label: "proyectos publicados" },
  { value: 14, label: "semanas de desarrollo" },
];

export const FILTERS = ["Todos", "Videojuego", "Web", "Git", "Investigación"];

export const PROJECTS = [
  {
    id: 1,
    level: "1-1",
    title: "Fora de Lugar · Sitio informativo",
    icon: "🌐",
    cover: "escena-01a.jpg", gallery: ["fora-logo.png", "retrato-pepe.jpg"],
    colors: ["#1d4ed8", "#8b5cf6"],
    tags: ["Web", "Investigación"],
    summary: "Sitio del proyecto: historia, personajes, 10 actos, minijuegos, encuestas y documentación científica.",
    points: [
      "Videojuego narrativo 2D sobre la vida de estudiantes foráneos en Campeche.",
      "Pre-test (85 respuestas) y post-test (63): media de concientización de 4,64 a 4,86.",
      "Incluye demo jugable en itch.io, reporte científico y manual del juego.",
    ],
    url: "https://fora-pagina-informativa.pages.dev/",
    cta: "Ver sitio",
  },
  {
    id: 2,
    level: "1-2",
    title: "Fora de Lugar · Videojuego",
    icon: "🎮",
    cover: "retrato-pepe.jpg", pos: "center 25%", gallery: ["escena-01a.jpg", "fora-logo.png"],
    colors: ["#7c3aed", "#ec4899"],
    tags: ["Videojuego", "Git"],
    summary: "Videojuego narrativo 2D en pixel art hecho con Godot 4 para la Facultad de Ingeniería (UACAM).",
    points: [
      "Mi rol: desarrollador back-end y gameplay del equipo.",
      "Escenas de cuarto, súper, mercado y restaurante, con minijuegos de limpieza, presupuesto y mesero.",
      "Repositorio con 128 commits y 61 pull requests en 14 semanas.",
    ],
    url: "https://github.com/Aldair-Canul/Facultad-de-Ingenieria---Fora-de-Lugar",
    cta: "Ver repositorio",
  },
  {
    id: 3,
    level: "1-3",
    title: "fora/commit · Guía de Godot, Git y GitHub",
    icon: "🌿",
    logos: ["godot.svg", "github.svg"],
    colors: ["#0f766e", "#22d3ee"],
    tags: ["Web", "Git"],
    summary: "Guía en español con simulador de ramas, buscador de comandos y checklist de progreso.",
    points: [
      "Explica el flujo real de ramas, commits con gitmoji y pull requests del equipo.",
      "Buscador de comandos con copiado y preguntas frecuentes.",
      "Documenta qué sí y qué no se sube en un proyecto Godot.",
    ],
    url: "https://aldair-canul.github.io/Guia-informativa-del-flujo-de-trabajo-de-fora-de-lugar/",
    cta: "Ver guía",
  },
  {
    id: 4,
    level: "1-4",
    title: "Lona interactiva · Infomatrix 2026",
    icon: "📐",
    cover: "fora-logo.png", contain: true, gallery: ["escena-01a.jpg"],
    colors: ["#0b5aa6", "#38bdf8"],
    tags: ["Web", "Investigación"],
    summary: "Lona científica en web para Infomatrix Campeche 2026, categoría Desarrollo de software.",
    points: [
      "Ajustable a cualquier tamaño de impresión, con vista a escala y exportación a PDF.",
      "Resume problema, hipótesis, metodología de 5 fases y resultados.",
      "Resultado: acuerdo general de 90 % a 95 % tras jugar.",
    ],
    url: "https://aldair-canul.github.io/Pagina-Lona-Interactiva/",
    cta: "Ver lona",
  },
  {
    id: 5,
    level: "1-5",
    title: "Escapa de Gordito",
    icon: "🏃",
    cover: "personaje-a-1.png", contain: true, gallery: ["personaje-a-1.png", "personaje-b-1.png", "personaje-b-3.png"],
    colors: ["#ea580c", "#facc15"],
    tags: ["Videojuego", "Web"],
    summary: "Minijuego web de reflejos: sobrevive 35 segundos a Gordito con movimiento y dash.",
    points: [
      "Hecho en equipo con Aaron Chi (ITS 5° A).",
      "Flechas para moverte y Shift para el dash (5 s de enfriamiento).",
      "Panel para ajustar velocidades y volumen.",
    ],
    url: "https://aldair-canul.github.io/Escapa-de-Gordito/",
    cta: "Jugar",
  },
];

export const SKILLS = [
  { icon: "GD", title: "Godot 4 y GDScript", text: "Mecánicas, estados, minijuegos y UI en proyectos 2D." },
  { icon: "GIT", title: "Git y GitHub", text: "Ramas por tarea, pull requests, commits convencionales y revisión en equipo." },
  { icon: "WEB", title: "Desarrollo web", text: "Sitios informativos y juegos en el navegador, desplegados en GitHub Pages y Cloudflare." },
  { icon: "DAT", title: "Investigación aplicada", text: "Encuestas Likert, pre/post-test y análisis de resultados." },
  { icon: "NET", title: "Redes", text: "Fundamentos de redes con Cisco Networking Academy (CCNA)." },
  { icon: "TEAM", title: "Trabajo colaborativo", text: "Equipos multidisciplinarios con asesoría académica." },
];

export const SECTIONS = [
  ["proyectos", "Proyectos"],
  ["habilidades", "Habilidades"],
  ["certificacion", "Certificación"],
  ["contacto", "Contacto"],
];
