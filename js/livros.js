
const livros = [
  {
    id: 1,
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    ano: 1605,
    editora: "Editora Clássicos",
    genero: "Romance",
    descricao: "Um romance satírico sobre um fidalgo que acredita ser um cavaleiro andante.",
    capa: "https://m.media-amazon.com/images/I/81pdXbEIZhL._UF894,1000_QL80_.jpg"
  },
  {
    id: 2,
    titulo: "1984",
    autor: "George Orwell",
    ano: 1949,
    editora: "Companhia das Letras",
    genero: "Distopia",
    descricao: "Um retrato sombrio de um futuro totalitário.",
    capa: "https://m.media-amazon.com/images/I/61M9jDcsl2L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 3,
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    ano: 1945,
    editora: "Editora B",
    genero: "Fábula política",
    descricao: "Uma alegoria sobre o totalitarismo disfarçado de fábula animal.",
    capa: "https://m.media-amazon.com/images/I/719esIW3D7L.jpg"
  },
  {
    id: 4,
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943,
    editora: "Agir",
    genero: "Infantil/Filosófico",
    descricao: "Um conto filosófico com críticas sociais sutis.",
    capa: "https://m.media-amazon.com/images/I/61NHEYzP6kL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 5,
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    ano: 1813,
    editora: "Penguin",
    genero: "Romance",
    descricao: "A história de Elizabeth Bennet enquanto lida com questões de classe e amor.",
    capa: "https://m.media-amazon.com/images/I/719esIW3D7L.jpg"
  },
  {
    id: 6,
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    ano: 1937,
    editora: "HarperCollins",
    genero: "Fantasia",
    descricao: "A jornada de Bilbo Bolseiro em uma aventura pela Terra Média.",
    capa: "https://m.media-amazon.com/images/I/91wfHwESyfL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 7,
    titulo: "Moby Dick",
    autor: "Herman Melville",
    ano: 1851,
    editora: "Nova Fronteira",
    genero: "Aventura",
    descricao: "A obsessiva caçada do capitão Ahab pela baleia branca.",
    capa: "https://m.media-amazon.com/images/I/71pDLEFif3L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 8,
    titulo: "A Metamorfose",
    autor: "Franz Kafka",
    ano: 1915,
    editora: "L&PM",
    genero: "Ficção filosófica",
    descricao: "Um homem acorda transformado em um inseto gigante.",
    capa: "https://m.media-amazon.com/images/I/715JOcuqSSL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 9,
    titulo: "Grande Sertão: Veredas",
    autor: "João Guimarães Rosa",
    ano: 1956,
    editora: "Nova Aguilar",
    genero: "Romance",
    descricao: "Um clássico da literatura brasileira sobre o sertão e seus conflitos.",
    capa: "https://m.media-amazon.com/images/I/81NtboFZziL.jpg"
  },
  {
    id: 10,
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    ano: 1997,
    editora: "Rocco",
    genero: "Fantasia",
    descricao: "O começo da jornada de um jovem bruxo em Hogwarts.",
    capa: "https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg"
  }
];


function renderizarLivros(filtro = "") {
  const lista = document.getElementById("books-list");
  if (!lista) return;
  lista.innerHTML = "";
  const livrosFiltrados = livros.filter(livro =>
    livro.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
    livro.autor.toLowerCase().includes(filtro.toLowerCase())
  );
  livrosFiltrados.forEach(livro => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <img src="${livro.capa || 'https://via.placeholder.com/90x120?text=Livro'}" alt="Capa do livro">
      <h3>${livro.titulo}</h3>
      <p class="book-author">${livro.autor}</p>
      <p class="book-year">${livro.ano}</p>
      <button onclick="abrirDetalhesLivro(${livro.id})">Ver Detalhes</button>
    `;
    lista.appendChild(card);
  });
}


function preencherSelectLivros() {
  const select = document.getElementById("livro-nome");
  if (!select) return;
  select.innerHTML = '<option value="">Selecione um livro</option>';
  livros.forEach(livro => {
    const opt = document.createElement("option");
    opt.value = livro.titulo;
    opt.textContent = livro.titulo;
    select.appendChild(opt);
  });
}


const searchInput = document.getElementById("search-book");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    renderizarLivros(searchInput.value);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  renderizarLivros();
  preencherSelectLivros();
});