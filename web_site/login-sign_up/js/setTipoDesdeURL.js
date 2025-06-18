document.addEventListener("DOMContentLoaded", function () {
  const btnCliente = document.getElementById('btnCliente');
  const btnProveedor = document.getElementById('btnProveedor');
  const respuestaInput = document.getElementById('respuesta');

  if (btnCliente && btnProveedor && respuestaInput) {
    const params = new URLSearchParams(window.location.search);
    const tipo = params.get('tipo');

    if (tipo === 'cliente') {
      btnCliente.click(); // Simula clic en Cliente
    } else if (tipo === 'proveedor') {
      btnProveedor.click(); // Simula clic en Proveedor
    }
  }
});
