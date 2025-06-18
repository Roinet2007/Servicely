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

    // Configura el token de acceso de Mapbox (debes reemplazarlo con tu token real)
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWkyMyIsImEiOiJjbTFhM2Q0OG4wODJlMnRvbTQ4a2M3anc0In0.qJTjB1HweqzdnslPp6ocQw';

    document.addEventListener('DOMContentLoaded', function() {
        // Abrir modal de detalles
        const detailButtons = document.querySelectorAll('.details-btn');
        const detailsModal = document.getElementById('detailsModal');
        let clientMap = null;
        
        detailButtons.forEach(button => {
            button.addEventListener('click', function() {
                detailsModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                
                // Inicializar mapa si no existe
                if (!clientMap) {
                    clientMap = new mapboxgl.Map({
                        container: 'clientLocationMap',
                        style: 'mapbox://styles/mapbox/streets-v12',
                        center: [-99.1332, 19.4326], // [longitud, latitud]
                        zoom: 14
                    });
                    
                    // Agregar controles de navegación
                    clientMap.addControl(new mapboxgl.NavigationControl());
                    
                    // Agregar marcador
                    new mapboxgl.Marker()
                        .setLngLat([-99.1332, 19.4326])
                        .setPopup(new mapboxgl.Popup().setHTML('Ubicación del cliente: Av. Principal 123, Col. Centro'))
                        .addTo(clientMap)
                        .togglePopup();
                } else {
                    // Si el mapa ya existe, ajustar el tamaño al mostrarse
                    setTimeout(() => {
                        clientMap.resize();
                    }, 0);
                }
            });
        });
        
        // Abrir modal de rechazo
        const rejectButtons = document.querySelectorAll('.reject-btn');
        const rejectModal = document.getElementById('rejectModal');
        
        rejectButtons.forEach(button => {
            button.addEventListener('click', function() {
                rejectModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Cerrar modales
        const closeButtons = document.querySelectorAll('.close-modal');
        
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.style.display = 'none';
                });
                document.body.style.overflow = 'auto';
            });
        });
        
        // Cerrar al hacer clic fuera del modal
        window.addEventListener('click', function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Aceptar solicitud
        const acceptButtons = document.querySelectorAll('.accept-btn');
        
        acceptButtons.forEach(button => {
            button.addEventListener('click', function() {
                const requestItem = button.closest('.request-item');
                const statusBadge = requestItem.querySelector('.request-status');
                
                // Cambiar estado visualmente
                statusBadge.textContent = 'Aceptada';
                statusBadge.className = 'request-status status-accepted';
                
                // Eliminar botones de acción
                const actionsDiv = requestItem.querySelector('.request-actions');
                actionsDiv.innerHTML = `
                    <button class="action-btn details-btn" title="Ver detalles">
                        <i class="fas fa-eye"></i>
                    </button>
                `;
                
                // Agregar evento al nuevo botón de detalles
                actionsDiv.querySelector('.details-btn').addEventListener('click', function() {
                    detailsModal.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                });
                
                // Mostrar notificación
                alert('Solicitud aceptada con éxito. Se ha notificado al cliente.');
            });
        });
        
        // Confirmar rechazo
        const confirmRejectBtn = document.getElementById('confirmRejectBtn');
        
        confirmRejectBtn.addEventListener('click', function() {
            const rejectReason = document.getElementById('rejectReason').value;
            const requestItem = document.querySelector('.request-item:first-child');
            const statusBadge = requestItem.querySelector('.request-status');
            
            // Cambiar estado visualmente
            statusBadge.textContent = 'Rechazada';
            statusBadge.className = 'request-status status-rejected';
            
            // Eliminar botones de acción
            const actionsDiv = requestItem.querySelector('.request-actions');
            actionsDiv.innerHTML = `
                <button class="action-btn details-btn" title="Ver detalles">
                    <i class="fas fa-eye"></i>
                </button>
            `;
            
            // Agregar evento al nuevo botón de detalles
            actionsDiv.querySelector('.details-btn').addEventListener('click', function() {
                detailsModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
            
            // Cerrar modal
            rejectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            
            // Mostrar notificación con la razón si existe
            const notificationMsg = rejectReason 
                ? `Solicitud rechazada. Razón: ${rejectReason}\n\nSe ha notificado al equipo de Servicely y se ha enviado el perfil del cliente.`
                : 'Solicitud rechazada. Se ha notificado al equipo de Servicely y se ha enviado el perfil del cliente.';
            
            alert(notificationMsg);
            
            // Enviar notificación por WhatsApp
            const clientName = "Pedro Gómez";
            const serviceType = "Reparación de instalación eléctrica";
            const clientPhone = "+525512345678";
            const clientAddress = "Av. Principal 123, Col. Centro";
            
            const whatsappMessage = `*Notificación de Servicio Rechazado*\n\n` +
                                  `Proveedor: Carlos Mendoza\n` +
                                  `Cliente: ${clientName}\n` +
                                  `Servicio: ${serviceType}\n` +
                                  `Teléfono: ${clientPhone}\n` +
                                  `Dirección: ${clientAddress}\n` +
                                  `Razón del rechazo: ${rejectReason || 'No especificada'}\n\n` +
                                  `Por favor asignar a otro proveedor.`;
            
            // Codificar el mensaje para URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Crear enlace de WhatsApp (usando un número de ejemplo)
            const whatsappLink = `https://wa.me/5215512345678?text=${encodedMessage}`;
            
            // Simular clic en el enlace (en producción, esto abriría WhatsApp)
            console.log("Enlace de WhatsApp generado:", whatsappLink);
            // window.open(whatsappLink, '_blank'); // Descomentar para producción
        });
        
        // Filtrar solicitudes
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remover clase active de todos los botones
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Agregar clase active al botón clickeado
                this.classList.add('active');
                
                const filter = this.textContent.trim();
                const requestItems = document.querySelectorAll('.request-item');
                
                requestItems.forEach(item => {
                    const status = item.querySelector('.request-status').textContent.trim();
                    
                    switch(filter) {
                        case 'Todas':
                            item.style.display = 'flex';
                            break;
                        case 'Pendientes':
                            item.style.display = status === 'Pendiente' ? 'flex' : 'none';
                            break;
                        case 'Aceptadas':
                            item.style.display = status === 'Aceptada' ? 'flex' : 'none';
                            break;
                        case 'Rechazadas':
                            item.style.display = status === 'Rechazada' ? 'flex' : 'none';
                            break;
                        case 'Urgentes':
                            // Aquí podrías agregar lógica para filtrar por urgencia
                            // Por ahora mostramos todas como ejemplo
                            item.style.display = 'flex';
                            break;
                        case 'Este mes':
                            // Lógica para filtrar por fecha
                            item.style.display = 'flex';
                            break;
                    }
                });
            });
        });
        
        // Buscar solicitudes
        const searchInput = document.querySelector('.search-box input');
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const requestItems = document.querySelectorAll('.request-item');
            
            requestItems.forEach(item => {
                const clientName = item.querySelector('h4').textContent.toLowerCase();
                const serviceDesc = item.querySelector('p').textContent.toLowerCase();
                
                if (clientName.includes(searchTerm) || serviceDesc.includes(searchTerm)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
        
        // Notificaciones
        const notificationBtn = document.querySelector('.notification-btn');
        const notificationBadge = document.querySelector('.notification-badge');
        
        notificationBtn.addEventListener('click', function() {
            // Simular vista de notificaciones
            alert("Tienes 3 notificaciones nuevas:\n\n1. Nueva solicitud de Laura Díaz\n2. Recordatorio: Servicio mañana a las 10 AM\n3. Pago recibido por servicio #2456");
            
            // Limpiar badge
            notificationBadge.style.display = 'none';
        });
    });
