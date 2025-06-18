document.addEventListener("DOMContentLoaded", function () {
  const proveedores = [
    {
      nombre: "Joshua Morgan",
      tipo: "Independiente",
      region: "Santiago, Atalaya",
      servicio: "Albañilería, Plomería",
      experiencia: "5+",
      clientes: "30",
      calificacion: "4.5 ★",
      anioMiembro: "2025"
    },
    {
      nombre: "Camila Herrera",
      tipo: "Empresa",
      region: "Panamá, Tocumen",
      servicio: "Electricidad, Pintura",
      experiencia: "8+",
      clientes: "100",
      calificacion: "4.8 ★",
      anioMiembro: "2022"
    },
    {
      nombre: "Luis González",
      tipo: "Independiente",
      region: "Colón, Portobelo",
      servicio: "Jardinería, Limpieza",
      experiencia: "3+",
      clientes: "45",
      calificacion: "4.2 ★",
      anioMiembro: "2023"
    },
    {
      nombre: "Natalia Rivas",
      tipo: "Freelancer",
      region: "Chiriquí, David",
      servicio: "Decoración, Diseño de interiores",
      experiencia: "6+",
      clientes: "70",
      calificacion: "4.9 ★",
      anioMiembro: "2021"
    }
  ];

  let index = 0;

  function mostrarProveedor(proveedor) {
    const elementos = document.querySelectorAll(".dato-dinamico");

    // Apagar opacidad
    elementos.forEach(el => el.classList.add("opaco"));

    setTimeout(() => {
      document.getElementById("nombreProveedor").innerText = proveedor.nombre;
      document.getElementById("tipoProveedor").innerText = proveedor.tipo;
      document.getElementById("regionProveedor").innerText = proveedor.region;
      document.getElementById("servicioProveedor").innerText = proveedor.servicio;
      document.getElementById("experiencia").innerText = proveedor.experiencia;
      document.getElementById("clientes").innerText = proveedor.clientes;
      document.getElementById("calificacion").innerText = proveedor.calificacion;
      document.getElementById("anioMiembro").innerText = proveedor.anioMiembro;

      // Encender opacidad
      elementos.forEach(el => el.classList.remove("opaco"));
    }, 500);
  }

  // Mostrar el primer proveedor
  mostrarProveedor(proveedores[index]);

  // Cambiar proveedor cada 15 segundos
  setInterval(() => {
    index = (index + 1) % proveedores.length;
    mostrarProveedor(proveedores[index]);
  }, 15000);
});
