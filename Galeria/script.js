// Lista de imagens
const images = ["images/foto2.jpeg", "images/foto4.jpeg", "images/foto6.jpeg"];
let currentIndex = 0;

// Elementos DOM
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");

// Abre o modal na imagem clicada
function openModal(index) {
  currentIndex = index;
  modal.style.display = "flex";
  modalImage.src = images[currentIndex];
}

// Fecha o modal
function closeModal() {
  modal.style.display = "none";
}

// Alterna entre as imagens
function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  modalImage.src = images[currentIndex];
}

// Fecha o modal ao clicar fora da imagem
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
