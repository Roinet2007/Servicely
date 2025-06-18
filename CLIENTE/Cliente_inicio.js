const toggleButton = document.getElementById("toggle-button");
const sidebar = document.getElementById("sidebar");

const openIcon = toggleButton.querySelector(".bxs-right-arrow");
const closeIcon = toggleButton.querySelector(".bxs-left-arrow");

closeIcon.style.display = "none";

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});
// ... (código existente del sidebar)

function buscarServicio() {
    const valor = document.getElementById("searchInput").value.trim();
    if (valor) {
        // Guardar el término de búsqueda en sessionStorage para usarlo en la página de resultados
        sessionStorage.setItem('searchTerm', valor);
        // Redirigir a la página de resultados con el término de búsqueda como parámetro
        window.location.href = "cliente_resultados.html?search=" + encodeURIComponent(valor);
    } else {
        alert("Por favor, ingresa un término de búsqueda");
    }
}
// Array con las imágenes para el slideshow
const images = [
    'https://www.ludusglobal.com/hubfs/T%C3%A9cnico%20en%20mantenimiento.png',
    'https://static.eldiario.es/clip/d2c6f655-1d45-4d58-b53f-ffb56a600622_16-9-discover-aspect-ratio_default_0.jpg',
    'https://tallerexitoso.com/wp-content/uploads/2022/12/mejorar-taller-mecanico.jpg',
    'https://tradesmanskills.com/wp-content/uploads/how-to-become-a-gardener-1024x576-1200x628.jpg',
    'https://www.emagister.com/blog/wp-content/uploads/2017/10/GettyImages-1312311812.jpg'
];

// Seleccionar el elemento del slideshow
const slideshow = document.querySelector('.slideshow');
let currentIndex = 0;

// Función para cambiar el fondo
function changeBackground() {
    slideshow.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Cambiar inmediatamente y luego cada 4 segundos
document.addEventListener('DOMContentLoaded', function() {
    changeBackground();
    setInterval(changeBackground, 4000);
    
    // Permitir búsqueda al presionar Enter
    document.getElementById("searchInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            buscarServicio();
        }
    });
});

function buscarServicio() {
    const valor = document.getElementById("searchInput").value.trim();
    if (valor) {
        // Guardar el término de búsqueda en sessionStorage para usarlo en la página de resultados
        sessionStorage.setItem('searchTerm', valor);
        window.location.href = "cliente_resultados.html";
    } else {
        alert("Por favor, ingresa un término de búsqueda");
    }
}