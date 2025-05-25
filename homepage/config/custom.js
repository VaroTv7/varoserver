// custom.js para Homepage - Mejoras de UX y Eficiencia (SIN WIDGET DE RELOJ)

document.addEventListener('DOMContentLoaded', () => {
  console.log("🚀 Custom JS para Homepage (sin reloj) cargado.");

  // --------------------------------------------------------------------------
  //  ANIMACIÓN DE ENTRADA PARA ELEMENTOS (OPCIONAL)
  // --------------------------------------------------------------------------
  // Descomenta la siguiente línea si quieres una animación de entrada para
  // las tarjetas (servicios, bookmarks).
  // Asegúrate de que las clases .card-enter y .card-enter-active
  // están definidas en tu custom.css.
  //
  // animateElementsOnLoad('.card, .item-container', 'card-enter', 'card-enter-active');
  //
  // Ejemplo de clases CSS para esto (en custom.css):
  // .card-enter {
  //   opacity: 0;
  //   transform: translateY(20px);
  //   transition: opacity 0.4s ease-out, transform 0.4s ease-out;
  // }
  // .card-enter-active {
  //   opacity: 1;
  //   transform: translateY(0);
  // }
  // --------------------------------------------------------------------------


  // --------------------------------------------------------------------------
  //  PEQUEÑOS EFECTOS VISUALES (OPCIONAL)
  // --------------------------------------------------------------------------
  // Puedes añadir aquí funciones para efectos sutiles si lo deseas.
  // Mantenlo ligero para no impactar el rendimiento en servidores de bajas especificaciones.
  //
  // addInteractiveEffects(); // Descomentar si defines esta función
  // --------------------------------------------------------------------------


  console.log("✨ Custom JS (sin reloj) inicializado.");
});


/**
 * (OPCIONAL) Anima elementos al cargar la página añadiendo y quitando clases CSS.
 * @param {string} selector - Selector CSS para los elementos a animar.
 * @param {string} initialClass - Clase CSS para el estado inicial (ej. oculto).
 * @param {string} activeClass - Clase CSS para el estado final (ej. visible).
 */
/* // Descomentar esta función si vas a usar animateElementsOnLoad
function animateElementsOnLoad(selector, initialClass, activeClass) {
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) {
    console.warn(`Animación: No se encontraron elementos con el selector "${selector}".`);
    return;
  }

  elements.forEach((el, index) => {
    el.classList.add(initialClass); // Asegura estado inicial

    // Usar requestAnimationFrame para asegurar que el navegador procesa la clase inicial
    // antes de aplicar la clase activa para la transición.
    requestAnimationFrame(() => {
      // Un pequeño retraso escalonado para cada elemento.
      // Puedes ajustar el valor de 70 (milisegundos) si quieres una animación más rápida o lenta.
      setTimeout(() => {
        el.classList.add(activeClass);
        // Opcional: quitar la clase inicial después de que la animación debería haber comenzado.
        // Esto es útil si la clase inicial tiene estilos que no quieres que persistan.
        // setTimeout(() => { // Dar tiempo a que la transición empiece
        //   el.classList.remove(initialClass);
        // }, 400); // Debe ser igual o mayor a la duración de tu transición CSS
      }, 70 * index);
    });
  });
  console.log(`Animación: Efecto de entrada aplicado a ${elements.length} elementos.`);
}
*/


/**
 * (OPCIONAL) Añade pequeños efectos interactivos sutiles.
 * Mantenlo ligero para no impactar el rendimiento.
 */
/* // Descomentar esta función si quieres añadir efectos interactivos
function addInteractiveEffects() {
  // Ejemplo: Efecto sutil en iconos al pasar el cursor sobre la tarjeta (si no lo manejas solo con CSS)
  const interactiveCards = document.querySelectorAll('.card, .item-container');

  interactiveCards.forEach(card => {
    const icon = card.querySelector('.icon, .item-icon'); // Ajusta el selector del icono si es necesario

    if (icon) {
      card.addEventListener('mouseenter', () => {
        // Ejemplo: icon.style.transform = 'scale(1.1)';
      });
      card.addEventListener('mouseleave', () => {
        // Ejemplo: icon.style.transform = 'scale(1)';
      });
    }
  });
  console.log("Efectos interactivos añadidos (si hay alguno).");
}
*/
