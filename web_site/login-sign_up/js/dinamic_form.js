document.addEventListener("DOMContentLoaded", function () {
  const btnCliente = document.getElementById('btnCliente');
  const btnProveedor = document.getElementById('btnProveedor');
  const respuestaInput = document.getElementById('respuesta');
  const form = document.querySelector("form");

  const cedulaClienteContainer = document.getElementById('cedulaClienteContainer');
  const tipoProveedorContainer = document.getElementById('tipoProveedorContainer');
  const cedulaProveedorContainer = document.getElementById('cedulaProveedorContainer');
  const rucEmpresaContainer = document.getElementById('rucEmpresaContainer');

  const btnIndependiente = document.getElementById('btnIndependiente');
  const btnEmpresa = document.getElementById('btnEmpresa');

  function activarBoton(botonSeleccionado, otroBoton) {
    botonSeleccionado.classList.add('active');
    otroBoton.classList.remove('active');
  }

  function ocultarTodo() {
    cedulaClienteContainer.style.display = 'none';
    tipoProveedorContainer.style.display = 'none';
    cedulaProveedorContainer.style.display = 'none';
    rucEmpresaContainer.style.display = 'none';
  }

  if (btnCliente && btnProveedor) {
    btnCliente.addEventListener('click', function (e) {
      e.preventDefault();
      activarBoton(btnCliente, btnProveedor);
      respuestaInput.value = 'cliente';
      ocultarTodo();
      cedulaClienteContainer.style.display = 'block';
    });

    btnProveedor.addEventListener('click', function (e) {
      e.preventDefault();
      activarBoton(btnProveedor, btnCliente);
      respuestaInput.value = 'proveedor';
      ocultarTodo();
      tipoProveedorContainer.style.display = 'flex';
    });
  }

  if (btnIndependiente && btnEmpresa) {
    btnIndependiente.addEventListener('click', function (e) {
      e.preventDefault();
      activarBoton(btnIndependiente, btnEmpresa);
      cedulaProveedorContainer.style.display = 'block';
      rucEmpresaContainer.style.display = 'none';
    });

    btnEmpresa.addEventListener('click', function (e) {
      e.preventDefault();
      activarBoton(btnEmpresa, btnIndependiente);
      cedulaProveedorContainer.style.display = 'none';
      rucEmpresaContainer.style.display = 'block';
    });
  }

  form.addEventListener("submit", function (e) {
    if (!respuestaInput.value) {
      e.preventDefault();
      alert("Por favor, selecciona si eres Cliente o Proveedor.");
    }

    if (respuestaInput.value === 'cliente') {
      const cedulaCliente = document.querySelector('input[name="cedulaCliente"]').value.trim();
      if (!cedulaCliente) {
        e.preventDefault();
        alert("Por favor, ingresa tu cédula.");
      }
    }

    if (respuestaInput.value === 'proveedor') {
      if (!btnIndependiente.classList.contains('active') && !btnEmpresa.classList.contains('active')) {
        e.preventDefault();
        alert("Por favor, selecciona si eres Independiente o Empresa.");
      } else if (btnIndependiente.classList.contains('active')) {
        const cedula = document.querySelector('input[name="cedulaProveedor"]').value.trim();
        if (!cedula) {
          e.preventDefault();
          alert("Por favor, ingresa tu cédula.");
        }
      } else if (btnEmpresa.classList.contains('active')) {
        const ruc = document.querySelector('input[name="rucEmpresa"]').value.trim();
        if (!ruc) {
          e.preventDefault();
          alert("Por favor, ingresa el número de RUC.");
        }
      }
    }
  });
});
