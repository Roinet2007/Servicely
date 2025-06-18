    // Inicializar variables globales para el mapa
    let map;
    let marker;
    let currentProvider = '';

    // Función para mostrar los detalles del proveedor
    function showProviderDetails(name, category) {
        const modal = document.getElementById('providerModal');
        const modalName = document.getElementById('modalProviderName');
        const modalCategory = document.getElementById('modalProviderCategory');
        const modalImage = document.getElementById('modalProviderImage');
        
        // Guardar el proveedor actual
        currentProvider = name;
        
        // Actualizar la información del modal según el proveedor seleccionado
        modalName.textContent = name;
        modalCategory.textContent = category;
        
        // Cambiar imagen según el proveedor (simulado)
        if (name === "Carlos Mendoza") {
            modalImage.src = "https://randomuser.me/api/portraits/men/32.jpg";
            document.getElementById('modalProviderLocation').textContent = "San Miguel, Lima";
            document.getElementById('modalProviderAbout').textContent = "Profesional con más de 10 años de experiencia en servicios de plomería residencial y comercial. Especializado en detección y reparación de fugas, instalación de tuberías y mantenimiento preventivo. Trabajo con herramientas profesionales y materiales de primera calidad.";
        } else if (name === "María López") {
            modalImage.src = "https://randomuser.me/api/portraits/women/44.jpg";
            document.getElementById('modalProviderLocation').textContent = "Miraflores, Lima";
            document.getElementById('modalProviderAbout').textContent = "Profesional de limpieza con 8 años de experiencia. Ofrezco servicios de limpieza profunda, organización de espacios y lavandería. Utilizo productos ecológicos y técnicas profesionales para garantizar resultados impecables.";
        } else if (name === "Jorge Gutiérrez") {
            modalImage.src = "https://randomuser.me/api/portraits/men/75.jpg";
            document.getElementById('modalProviderLocation').textContent = "Surco, Lima";
            document.getElementById('modalProviderAbout').textContent = "Electricista certificado con 12 años de experiencia en instalaciones y reparaciones eléctricas. Especializado en soluciones residenciales y pequeñas empresas. Cumplo con todos los estándares de seguridad.";
        }
        
        // Mostrar el modal
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Función para cerrar el modal de detalles
    function closeModal() {
        document.getElementById('providerModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Función para solicitar servicio desde el modal
    function requestServiceModal() {
        closeModal();
        requestService(currentProvider);
    }

    // Función para mostrar el formulario de solicitud de servicio
    function requestService(providerName) {
        const modal = document.getElementById('requestModal');
        document.getElementById('requestProvider').value = providerName;
        
        // Mostrar el modal
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Inicializar el mapa si no está inicializado
        if (!map) {
            initMap();
        }
    }

    // Función para cerrar el modal de solicitud
    function closeRequestModal() {
        document.getElementById('requestModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Función para inicializar el mapa
    function initMap() {
        mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWkyMyIsImEiOiJjbTFhM2Q0OG4wODJlMnRvbTQ4a2M3anc0In0.qJTjB1HweqzdnslPp6ocQw';
        
        map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-77.0282, -12.0432], // Coordenadas de Lima
            zoom: 12
        });

        // Agregar control de navegación
        map.addControl(new mapboxgl.NavigationControl());

        // Agregar marcador arrastrable
        marker = new mapboxgl.Marker({
            draggable: true
        })
        .setLngLat([-77.0282, -12.0432])
        .addTo(map);
    }

    // Manejar el envío del formulario
    document.getElementById('serviceRequestForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener los datos del formulario
        const provider = document.getElementById('requestProvider').value;
        const serviceType = document.getElementById('serviceType').value;
        const serviceDate = document.getElementById('serviceDate').value;
        const serviceTime = document.getElementById('serviceTime').value;
        const problemDescription = document.getElementById('problemDescription').value;
        
        // Validar los datos
        if (!serviceType || !serviceDate || !serviceTime || !problemDescription) {
            alert('Por favor complete todos los campos requeridos');
            return;
        }
        
        // Mostrar mensaje de éxito
        alert(`Solicitud enviada con éxito a ${provider} para el servicio de ${serviceType} el ${serviceDate} a las ${serviceTime}.`);
        
        // Cerrar el modal
        closeRequestModal();
        
        // Resetear el formulario
        this.reset();
    });

    // Cerrar modales al hacer clic fuera del contenido
    window.addEventListener('click', function(e) {
        if (e.target === document.getElementById('providerModal')) {
            closeModal();
        }
        if (e.target === document.getElementById('requestModal')) {
            closeRequestModal();
        }
    });
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

// Cargar el término de búsqueda al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const searchTerm = sessionStorage.getItem('searchTerm');
    if (searchTerm) {
        // Actualizar el input de búsqueda y el título de resultados
        const searchInput = document.querySelector('.search-bar input');
        const resultsTitle = document.querySelector('main.container h1');
        const resultsSubtitle = document.querySelector('main.container p');
        
        if (searchInput) searchInput.value = searchTerm;
        if (resultsTitle) resultsTitle.textContent = `Resultados para "${searchTerm}"`;
        if (resultsSubtitle) resultsSubtitle.textContent = `Encuentra el servicio perfecto para "${searchTerm}"`;
        
        // Aquí podrías agregar lógica para filtrar resultados basados en searchTerm
        // Por ejemplo, hacer una llamada a una API o filtrar datos locales
    }
    
    // Permitir nueva búsqueda desde la página de resultados
    const searchButton = document.querySelector('.search-bar button');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const newSearchTerm = document.querySelector('.search-bar input').value.trim();
            if (newSearchTerm) {
                sessionStorage.setItem('searchTerm', newSearchTerm);
                // Recargar la página para mostrar nuevos resultados
                window.location.reload();
            }
        });
    }
    
    // Permitir búsqueda al presionar Enter en la página de resultados
    const resultsSearchInput = document.querySelector('.search-bar input');
    if (resultsSearchInput) {
        resultsSearchInput.addEventListener('keypress', function(event) {
            if (event.key === "Enter") {
                const newSearchTerm = this.value.trim();
                if (newSearchTerm) {
                    sessionStorage.setItem('searchTerm', newSearchTerm);
                    window.location.reload();
                }
            }
        });
    }
});
function filterResultsBySearchTerm(searchTerm) {
    // Esta función simularía una búsqueda/filtrado de resultados
    // En una aplicación real, esto probablemente haría una llamada a una API
    
    const allProviders = [
        // Tus datos de proveedores aquí
    ];
    
    const filteredProviders = allProviders.filter(provider => 
        provider.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        provider.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    // Lógica para mostrar solo los proveedores filtrados
}