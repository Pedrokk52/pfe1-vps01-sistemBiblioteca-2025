
function abrirDetalhesLivro(id) {
  const livro = window.livros.find(l => l.id === id);
  if (!livro) return;
  const modal = document.getElementById("modal-details");
  const content = document.getElementById("modal-details-content");
  content.innerHTML = `
    <img src="${livro.capa || 'https://via.placeholder.com/110x140?text=Book'}" alt="Capa do livro">
    <div class="book-info">
      <div><label>Title</label> <span>${livro.titulo}</span></div>
      <div><label>Author</label> <span>${livro.autor}</span></div>
      <div><label>Year</label> <span>${livro.ano}</span></div>
      <div><label>Publisher</label> <span>${livro.genero}</span></div>
      <div><label>Description</label> <span>${livro.descricao}</span></div>
    </div>
  `;
  modal.style.display = "flex";
}

document.getElementById("close-modal")?.addEventListener("click", () => {
  document.getElementById("modal-details").style.display = "none";
});

window.onclick = function(event) {
  const modal = document.getElementById("modal-details");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}