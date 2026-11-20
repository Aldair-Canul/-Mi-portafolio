// Ruta de una imagen dentro de public/img (funciona en local y en GitHub Pages)
export const img = (file) => import.meta.env.BASE_URL + "img/" + file;
