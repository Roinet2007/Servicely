document.addEventListener("DOMContentLoaded", () => {
  const backgroundLayer = document.querySelector(".background-layer");

  const backgrounds = [
    "./images/duda.webp",
    "./images/idea.webp",
    "./images/duda_2.webp",
    "./images/idea_2.webp"
  ];

  let index = 0;

  // Inicializar con la primera imagen
  backgroundLayer.style.backgroundImage = `url('${backgrounds[0]}')`;

  setInterval(() => {
    index = (index + 1) % backgrounds.length;
    
    // Transición suave: opacidad a 0 → cambia imagen → opacidad a 1
    backgroundLayer.style.opacity = 0;

    setTimeout(() => {
      backgroundLayer.style.backgroundImage = `url('${backgrounds[index]}')`;
      backgroundLayer.style.opacity = 1;
    }, 500); // medio segundo para fundido
  }, 10000); // cada 10s
});
