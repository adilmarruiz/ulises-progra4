import { formatearExperiencia, capitalizar, mensajeDisponibilidad } from './utilidades.js';

console.log("Hola desde el portfolio de Ulises Rodríguez");

/* ============================================================
   Datos globales del portfolio y uso de utilidades.js
============================================================ */
const nombreDesarrollador = "Ulises Rodríguez";
const tituloProfesional = "ingeniero en ciencias de la computación";
const anosDeExperiencia = 2;
const disponibleParaTrabajar = true;

console.log(capitalizar(tituloProfesional));
console.log(formatearExperiencia(anosDeExperiencia));
console.log(mensajeDisponibilidad(disponibleParaTrabajar));

/* ============================================================
   PARTE 2: Variables válidas y reglas de nomenclatura
============================================================ */
(() => {
  const nombreDesarrollador = "Ulises Rodriguez";
  const _disponibleParaTrabajar = true;
  const $anosDeExperiencia = 2;

  console.log(nombreDesarrollador, _disponibleParaTrabajar, $anosDeExperiencia);

  // tituloProfesional y TituloProfesional son identificadores distintos:
  // JavaScript distingue mayúsculas y minúsculas (case-sensitive).
  const tituloProfesional = "Ingeniero en Ciencias de la Computación";
  const TituloProfesional = "Valor distinto para demostrar sensibilidad a mayúsculas";
  console.log("¿Son la misma variable?", tituloProfesional === TituloProfesional);
})();

/* ============================================================
   PARTE 3: const vs let vs var
============================================================ */
(() => {
  const nombreDesarrollador = "Ulises Rodriguez";
  const tituloProfesional = "Ingeniero en Ciencias de la Computación";
  let anosDeExperiencia = 2;
  let disponibleParaTrabajar = true;

  // Reasignación válida de let
  anosDeExperiencia = 3;
  console.log(nombreDesarrollador, tituloProfesional, anosDeExperiencia, disponibleParaTrabajar);

  // Redeclaración válida de var (var sí permite redeclarar en el mismo alcance)
  var ejemploVar = "primera declaración";
  var ejemploVar = "segunda declaración (redeclarada sin error)";
  console.log(ejemploVar);
})();

/* ============================================================
   PARTE 4: Alcance de bloque con let
============================================================ */
(() => {
  if (true) {
    let disponibilidad = "Disponible para trabajar";
    console.log(disponibilidad);
  }
  // console.log(disponibilidad); -> ReferenceError: disponibilidad is not defined
  // (let no existe fuera del bloque {} donde fue declarada)
})();

/* ============================================================
   PARTE 5: Tipos primitivos y tipado dinámico
============================================================ */
(() => {
  const nombreDesarrollador = "Ulises Rodriguez";       // string
  const anosDeExperiencia = 2;                           // number
  const disponibleParaTrabajar = true;                   // boolean
  const tecnologiaFavorita = null;                       // null (intencional)
  let siguienteProyecto;                                 // undefined (intencional)

  console.log(nombreDesarrollador, typeof nombreDesarrollador);
  console.log(anosDeExperiencia, typeof anosDeExperiencia);
  console.log(disponibleParaTrabajar, typeof disponibleParaTrabajar);
  console.log(tecnologiaFavorita, typeof tecnologiaFavorita);
  console.log(siguienteProyecto, typeof siguienteProyecto);

  let valorFlexible = 10;
  console.log(valorFlexible, typeof valorFlexible);
  valorFlexible = "ahora soy un texto";
  console.log(valorFlexible, typeof valorFlexible);
})();

/* ============================================================
   PARTE 6: Código corregido (errores originales documentados
   en el informe de entrega)
============================================================ */
(() => {
  const nombreDesarrollador = "Ana Martínez";
  let experiencia2025 = 3;
  const tituloProfesional = "Desarrolladora Web";
  let disponible = true;
  disponible = false;

  console.log(nombreDesarrollador);
  console.log(tituloProfesional);
  console.log(typeof disponible);
})();
