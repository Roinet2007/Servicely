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
function buscarServicio() {
        const valor = document.getElementById("searchInput").value;
        window.location.href = `Cliente_resultado.html?busqueda=${encodeURIComponent(valor)}`;
    }

        // Función para mostrar el modal de confirmación
        function showConfirmation(code) {
            document.getElementById('modalCouponCode').textContent = code;
            document.getElementById('confirmationModal').style.display = 'flex';
            
            // Copiar automáticamente el código al portapapeles
            navigator.clipboard.writeText(code).then(() => {
                console.log('Código copiado al portapapeles');
            });
        }
        
        // Función para cerrar el modal
        function closeModal() {
            document.getElementById('confirmationModal').style.display = 'none';
        }
        
        // Redirigir a la página de sucursales
        function redirectToLocations() {
            // Aquí iría la lógica para redirigir a la página de sucursales
            console.log('Redirigiendo a la página de sucursales...');
            closeModal();
        }
        
        // Cerrar modal al hacer clic fuera del contenido
        window.onclick = function(event) {
            const modal = document.getElementById('confirmationModal');
            if (event.target === modal) {
                closeModal();
            }
        }
        
        // Funcionalidad para copiar códigos de cupón
        document.querySelectorAll('.copy-icon').forEach(icon => {
            icon.addEventListener('click', (e) => {
                e.stopPropagation();
                const code = icon.getAttribute('data-code');
                navigator.clipboard.writeText(code).then(() => {
                    const originalIcon = icon.className;
                    icon.className = 'fas fa-check';
                    
                    setTimeout(() => {
                        icon.className = originalIcon;
                    }, 2000);
                });
            });
        });
        
        // Funcionalidad para el filtro de estado
        const statusFilter = document.querySelector('.status-filter select');
        statusFilter.addEventListener('change', () => {
            const status = statusFilter.value;
            console.log(`Filtrando por: ${status}`);
            // Aquí iría la lógica para filtrar los cupones
        });
        
        // Funcionalidad para la búsqueda
        const searchInput = document.querySelector('.search-input');
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            console.log(`Buscando: ${searchTerm}`);
            // Aquí iría la lógica para buscar cupones
        });