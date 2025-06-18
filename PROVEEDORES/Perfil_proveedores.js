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

        
        // Edit buttons functionality
        const setupEditForm = (editBtnId, displayDivId, editDivId, cancelBtnId, saveBtnId) => {
            const editBtn = document.getElementById(editBtnId);
            const displayDiv = document.getElementById(displayDivId);
            const editDiv = document.getElementById(editDivId);
            const cancelBtn = document.getElementById(cancelBtnId);
            const saveBtn = document.getElementById(saveBtnId);
            
            editBtn.addEventListener('click', () => {
                displayDiv.style.display = 'none';
                editDiv.style.display = 'block';
            });
            
            cancelBtn.addEventListener('click', () => {
                displayDiv.style.display = 'block';
                editDiv.style.display = 'none';
            });
            
            saveBtn.addEventListener('click', () => {
                // Here you would typically save the data to a server
                displayDiv.style.display = 'block';
                editDiv.style.display = 'none';
                
                // For demo purposes, we'll just show an alert
                alert('Cambios guardados correctamente');
            });
        };
        
        // Initialize edit forms
        setupEditForm('edit-personal-btn', 'personal-info-display', 'personal-info-edit', 'cancel-personal-edit', 'save-personal-edit');
        setupEditForm('edit-desc-btn', 'description-display', 'description-edit', 'cancel-desc-edit', 'save-desc-edit');
        setupEditForm('edit-prefs-btn', 'prefs-info-display', 'prefs-info-edit', 'cancel-prefs-edit', 'save-prefs-edit');
        
        // Profile picture upload
        const profileUpload = document.getElementById('profile-upload');
        const profilePic = document.getElementById('profile-pic');
        
        profileUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    profilePic.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
        
        // Flash account toggle
        const flashCard = document.getElementById('flash-card');
        const flashBadge = document.getElementById('flash-badge');
        const flashContent = document.getElementById('flash-content');
        const accountStatus = document.getElementById('account-status');
        const editFlash = document.getElementById('edit-flash');
        
        editFlash.addEventListener('change', (e) => {
            if (e.target.value === 'off') {
                flashCard.classList.add('inactive');
                flashBadge.classList.add('inactive');
                flashBadge.textContent = 'INACTIVA';
                flashContent.textContent = 'Tu cuenta Flash está actualmente desactivada. Actívala para recibir solicitudes urgentes.';
                accountStatus.textContent = 'Flash Inactiva';
                accountStatus.classList.remove('flash');
                accountStatus.classList.add('inactive');
            } else {
                flashCard.classList.remove('inactive');
                flashBadge.classList.remove('inactive');
                flashBadge.textContent = 'ACTIVA';
                flashContent.textContent = 'Tu cuenta Flash está activada, lo que significa que recibirás solicitudes urgentes y deberás responder en el tiempo establecido para mantener tu estatus.';
                accountStatus.textContent = 'Flash Activa';
                accountStatus.classList.add('flash');
                accountStatus.classList.remove('inactive');
            }
        });
        
        // Add custom service
        const addCustomService = document.getElementById('add-custom-service');
        const customServiceInput = document.getElementById('edit-custom-service');
        const servicesSelect = document.getElementById('edit-services');
        
        addCustomService.addEventListener('click', () => {
            const serviceName = customServiceInput.value.trim();
            if (serviceName) {
                const option = document.createElement('option');
                option.value = serviceName.toLowerCase().replace(/\s+/g, '-');
                option.textContent = serviceName;
                option.selected = true;
                servicesSelect.appendChild(option);
                customServiceInput.value = '';
                alert(`Servicio "${serviceName}" agregado correctamente`);
            }
        });
        
        // Responsive sidebar for mobile
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && !sidebar.classList.contains('active')) {
                sidebar.classList.add('active');
            }
        });
        