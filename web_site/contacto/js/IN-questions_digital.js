document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los títulos de preguntas
  const questionTitles = document.querySelectorAll('.questions__title');

  questionTitles.forEach(title => {
    title.style.cursor = 'pointer'; // que el cursor cambie a pointer para indicar que es clickeable

    title.addEventListener('click', () => {
      // El <p> con la respuesta es el siguiente hermano dentro del mismo contenedor padre
      const answer = title.parentElement.querySelector('.questions__show');

      if (answer) {
        // Alterna mostrar/ocultar
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
          // Opcional: rota flecha para indicar cerrado
          title.querySelector('.questions__arrow').style.transform = 'rotate(0deg)';
        } else {
          answer.style.display = 'block';
          // Opcional: rota flecha para indicar abierto
          title.querySelector('.questions__arrow').style.transform = 'rotate(180deg)';
        }
      }
    });
  });
});