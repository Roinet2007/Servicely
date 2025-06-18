document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const commentModal = document.getElementById("commentModal");
  const commentText = document.getElementById("commentText");
  const commentname = document.getElementById("commentname");
  const commentgrade = document.getElementById("commentgrade");
  const submitCommentBtn = document.getElementById("submitCommentBtn");

  openModalBtn.addEventListener("click", () => {
    commentModal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", () => {
    commentModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === commentModal) {
      commentModal.style.display = "none";
    }
  });

  submitCommentBtn.addEventListener("click", () => {
    const texto = commentText.value.trim();
    const name = commentname.value.trim();
    const grade = commentgrade.value.trim();
    let value = Number(grade);

    if (texto === "") {
      alert("Por favor, escribe un comentario.");
      return;
    }

    if (name === "") {
      alert("Por favor, escribe tu nombre.");
      return;
    }

    if (grade === "" || isNaN(value) || value < 1.0 || value > 5.0) {
    alert("Por favor, escribe un número entre 1.0 y 5.0.");
    return;
    }



    // Para pruebas: nombre e imagen de ejemplo (en futuro, usa login o campos)
    const nuevoComentario = {
      texto: texto,
      nombre: name,
      imagen: "img/default-user.png", // imagen por defecto
      estrellas: grade, 
    };

    // Agrega el comentario al array del carrusel
    comments.push(nuevoComentario);

    // Actualiza carrusel
    renderCarousel();

    // Limpiar y cerrar modal
    commentText.value = "";
    commentname.value = "";
    commentModal.style.display = "none";

  });
});