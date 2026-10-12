// ================================================
// utilidades.js
// Funciones genéricas reutilizables del portfolio.
// ================================================

export function formatearExperiencia(anos) {
  return `${anos} ${anos === 1 ? 'año' : 'años'} de experiencia`;
}

export function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

export function mensajeDisponibilidad(disponible) {
  return disponible ? "Disponible para nuevas oportunidades laborales" : "No disponible por el momento";
}
