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
});

        // Función para abrir el modal con los datos del electricista
        function openModal(name, category, avatar, services, rating, reviews, response, satisfaction, location) {
            const modal = document.getElementById('profileModal');
            document.getElementById('modalName').textContent = name;
            document.getElementById('modalCategory').textContent = category;
            document.getElementById('modalAvatar').src = avatar;
            document.getElementById('modalLocation').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${location}`;
            document.getElementById('modalRating').textContent = rating;
            document.getElementById('modalReviews').textContent = reviews;
            document.getElementById('modalResponse').textContent = `${response}h`;
            document.getElementById('modalSatisfaction').textContent = `${satisfaction}%`;
            
            // Mostrar el modal
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        
        // Función para cerrar el modal
        function closeModal() {
            const modal = document.getElementById('profileModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Cerrar modal al hacer clic fuera del contenido
        window.onclick = function(event) {
            const modal = document.getElementById('profileModal');
            if (event.target == modal) {
                closeModal();
            }
        }
        
        // Cambiar filtro de tiempo activo
        const timeButtons = document.querySelectorAll('.time-btn');
        timeButtons.forEach(button => {
            button.addEventListener('click', () => {
                timeButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
        
        // Animación de carga
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.animate-on-load');
            animatedElements.forEach((element, index) => {
                element.style.opacity = '0';
                element.style.animationDelay = `${index * 0.1}s`;
            });
            
            setTimeout(() => {
                animatedElements.forEach(element => {
                    element.style.opacity = '1';
                });
            }, 100);
        });
