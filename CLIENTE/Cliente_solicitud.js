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


        // Toggle between requests and contracts
        const requestsTab = document.getElementById('requestsTab');
        const contractsTab = document.getElementById('contractsTab');
        const requestsSection = document.getElementById('requestsSection');
        const contractsSection = document.getElementById('contractsSection');
        
        requestsTab.addEventListener('click', () => {
            requestsTab.classList.add('active');
            contractsTab.classList.remove('active');
            requestsSection.style.display = 'block';
            contractsSection.style.display = 'none';
        });
        
        contractsTab.addEventListener('click', () => {
            contractsTab.classList.add('active');
            requestsTab.classList.remove('active');
            contractsSection.style.display = 'block';
            requestsSection.style.display = 'none';
        });

        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                // Aquí iría la lógica para filtrar las solicitudes/contratos
            });
        });

        // Modal functionality
        const detailButtons = document.querySelectorAll('.details-btn');
        const reviewButtons = document.querySelectorAll('.review-btn');
        const modals = document.querySelectorAll('.modal');
        const closeButtons = document.querySelectorAll('.close-modal');
        
        // Show request details modal
        detailButtons.forEach(button => {
            button.addEventListener('click', () => {
                document.getElementById('requestDetailsModal').style.display = 'flex';
            });
        });
        
        // Show review modal
        reviewButtons.forEach(button => {
            button.addEventListener('click', () => {
                document.getElementById('reviewModal').style.display = 'flex';
            });
        });
        
        // Close modals
        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                modals.forEach(modal => modal.style.display = 'none');
            });
        });
        
        // Close modal when clicking outside
        modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });

        // Star rating functionality
        const stars = document.querySelectorAll('.rating-stars i');
        const ratingText = document.getElementById('rating-text');
        const ratings = {
            1: 'Malo',
            2: 'Regular',
            3: 'Bueno',
            4: 'Muy bueno',
            5: 'Excelente'
        };
        
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const rating = parseInt(star.getAttribute('data-rating'));
                
                stars.forEach((s, index) => {
                    if (index < rating) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
                
                ratingText.textContent = ratings[rating];
            });
            
            star.addEventListener('mouseover', () => {
                const rating = parseInt(star.getAttribute('data-rating'));
                
                stars.forEach((s, index) => {
                    if (index < rating) {
                        s.style.color = '#ffab00';
                    }
                });
            });
            
            star.addEventListener('mouseout', () => {
                stars.forEach(s => {
                    if (!s.classList.contains('active')) {
                        s.style.color = '#ddd';
                    }
                });
            });
        });