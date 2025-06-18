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
document.addEventListener('DOMContentLoaded', function() {
    // Activar elementos seleccionables (colores y densidad)
    const colorOptions = document.querySelectorAll('.color-option');
    const densityOptions = document.querySelectorAll('.density-option');
    
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            // Aquí podrías cambiar el color principal del tema
            document.documentElement.style.setProperty('--primary-color', this.dataset.color);
            document.documentElement.style.setProperty('--primary-light', `${this.dataset.color}20`);
            document.documentElement.style.setProperty('--primary-lighter', `${this.dataset.color}10`);
        });
    });
    
    densityOptions.forEach(option => {
        option.addEventListener('click', function() {
            densityOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Cambiar el espaciado según la densidad seleccionada
            const sections = document.querySelector('.config-sections');
            if (this.dataset.density === 'compacto') {
                sections.style.gap = '1.5rem';
                document.querySelectorAll('.setting-group').forEach(group => {
                    group.style.gap = '1rem';
                });
            } else if (this.dataset.density === 'normal') {
                sections.style.gap = '2.5rem';
                document.querySelectorAll('.setting-group').forEach(group => {
                    group.style.gap = '1.5rem';
                });
            } else {
                sections.style.gap = '3.5rem';
                document.querySelectorAll('.setting-group').forEach(group => {
                    group.style.gap = '2rem';
                });
            }
        });
    });
    
    // Efecto de desplazamiento suave al hacer clic en los enlaces (si los hubiera)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Animación de las secciones al aparecer al hacer scroll
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.5s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.config-section').forEach(section => {
        observer.observe(section);
    });
    
    // Manejo del botón de guardar
    const saveBtn = document.querySelector('.btn-save');
    saveBtn.addEventListener('click', function() {
        this.innerHTML = '<i class="fas fa-check"></i> Cambios guardados';
        this.style.backgroundColor = 'var(--success-color)';
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-save"></i> Guardar cambios';
            this.style.backgroundColor = 'var(--primary-color)';
        }, 2000);
    });
    
    // Manejo del botón de eliminar cuenta
    const deleteBtn = document.querySelector('.btn-delete-account');
    deleteBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (confirm('¿Estás seguro de que deseas eliminar tu cuenta permanentemente? Esta acción no se puede deshacer.')) {
            // Aquí iría la lógica para eliminar la cuenta
            alert('Tu cuenta será eliminada. Serás redirigido a la página principal.');
            // window.location.href = '/';
        }
    });
    
    // Efecto hover en los botones
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});