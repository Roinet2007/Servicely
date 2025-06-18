document.addEventListener("DOMContentLoaded", () => {
  const backgroundLayer = document.querySelector(".background-layer");

  const backgrounds = [
    "./images/home.webp",
    "./images/home_2.webp",
    "./images/home_3.webp",
    "./images/home_4.webp"
  ];

  let index = 0;

  // Inicializa con la primera imagen
  backgroundLayer.style.backgroundImage = `url('${backgrounds[0]}')`;

  setInterval(() => {
    index = (index + 1) % backgrounds.length;

    // Transición suave: opacidad a 0 → cambiar imagen → opacidad a 1
    backgroundLayer.style.opacity = 0;

    setTimeout(() => {
      backgroundLayer.style.backgroundImage = `url('${backgrounds[index]}')`;
      backgroundLayer.style.opacity = 1;
    }, 500); // espera medio segundo
  }, 10000);
});
