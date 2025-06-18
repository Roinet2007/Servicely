document.getElementById('formulario-recuperar').addEventListener('submit', function (e) {
  e.preventDefault();

  const correoInput = document.getElementById('correo');
  const correo = correoInput.value;
  const correoMostrado = document.getElementById('correoMostrado');
  const modal = document.getElementById('modal');

  correoMostrado.textContent = correo;
  modal.style.display = 'flex';

  // Simular envío (debe conectarse con base de datos)
  fetch('solicitar_reset.php', {
    method: 'POST',
    body: new URLSearchParams({ correo })
  });

  // Redirigir al cerrar el modal
  document.getElementById('cerrarModal').onclick = () => {
    window.location.href = '../login-sign_up/login.html'; // Cambia por tu ruta real
  };
});
