// Abre el modal con el ID proporcionado
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'flex';
  }
}

// Cierra el modal con el ID proporcionado
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
  }
}

// Permite cerrar cualquier modal activo al presionar "Escape"
document.addEventListener('keydown', function (e) {
  if (e.key === "Escape") {
    const modals = document.querySelectorAll('.custom-modal');
    modals.forEach(modal => modal.style.display = 'none');
  }
});
