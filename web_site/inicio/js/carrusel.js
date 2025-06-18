// Comentarios simulados (conexión con base de datos)
const comments = [
  {
    texto: "Gracias a Servicely pude conseguir varios clientes en mi zona. El sitio es sencillo y permite mostrar mi experiencia sin complicaciones.",
    nombre: "Leydwan González",
    imagen: "img/c1.webp",
    estrellas: 3.5
  },
  {
    texto: "Necesitaba un jardinero urgente y en menos de una hora ya tenía todo coordinado. Muy fácil de usar y el servicio fue excelente.",
    nombre: "Marianela Gonzáles",
    imagen: "img/c2.webp",
    estrellas: 4.5
  },
  {
    texto: "Contraté un plomero por aquí y todo fue transparente, con precios claros y un sistema de valoración que me dio confianza.",
    nombre: "Anette Orellana",
    imagen: "img/c3.webp",
    estrellas: 4.5
  },
  // Puedes agregar más
];

const carousel = document.getElementById("carousel");
let currentIndex = 0;

function renderCarousel() {
  carousel.innerHTML = "";

  comments.forEach(comment => {
    const box = document.createElement("div");
    box.className = "box";

    const estrellas = Math.floor(comment.estrellas);
    const mitad = comment.estrellas % 1 !== 0;

    const estrellasHtml = Array(estrellas).fill('<i class="bx bxs-star" style="color:#3492fd"></i>').join('') +
      (mitad ? '<i class="bx bxs-star-half" style="color:#3492fd"></i>' : '');

    box.innerHTML = `
      <i class='bx bxs-quote-alt-left'></i>
      <div class="stars">${estrellasHtml}</div>
      <p>${comment.texto}</p>
      <div class="review-profile">
        <img src="${comment.imagen}" alt="">
        <h3>${comment.nombre}</h3>
      </div>
    `;

    carousel.appendChild(box);
  });

  updateCarouselPosition();
}

function updateCarouselPosition() {
  const itemsPerSlide = window.innerWidth >= 768 ? 3 : 1;
  const offset = -(currentIndex * (100 / itemsPerSlide));
  carousel.style.transform = `translateX(${offset}%)`;
}

document.getElementById("prevBtn").addEventListener("click", () => {
  const itemsPerSlide = window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = comments.length - itemsPerSlide;
  currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
  updateCarouselPosition();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  const itemsPerSlide = window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = comments.length - itemsPerSlide;
  currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
  updateCarouselPosition();
});


window.addEventListener("resize", () => {
  updateCarouselPosition();
});

document.addEventListener("DOMContentLoaded", () => {
  renderCarousel();
});
