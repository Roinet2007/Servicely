document.getElementById('formulario-recuperar').addEventListener('submit', function (e) {
  e.preventDefault();

  const contraseña = document.getElementById('contraseña').value;
  const repetir = document.getElementById('r_contraseña').value;
  const modal = document.getElementById('modal');

  if (contraseña === repetir) {
    // Mostrar modal si las contraseñas coinciden
    modal.style.display = 'flex';

    // Aquí podrías hacer un fetch() para enviar los datos al backend
    // fetch('cambiar_password.php', { ... });

    document.getElementById('cerrarModal').onclick = () => {
      window.location.href = '../login-sign_up/login.html'; // Ajusta ruta según tu proyecto
    };
  } else {
    // Marcar campos como incorrectos si no coinciden
    alert('Las contraseñas no coinciden');
    document.getElementById('contraseña').style.border = '2px solid red';
    document.getElementById('r_contraseña').style.border = '2px solid red';
  }
});
