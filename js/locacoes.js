
function validarCPF(cpf) {
  return /^\d{11}$/.test(cpf);
}

document.getElementById("form-locacao")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const livro = document.getElementById("livro-nome").value;
  const leitor = document.getElementById("leitor-nome").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const dataLocacao = document.getElementById("data-locacao").value;
  const dataDevolucao = document.getElementById("data-devolucao").value;
  const msg = document.getElementById("form-msg");

  msg.style.color = "#c00";
  if (!livro) return msg.textContent = "Selecione um livro.";
  if (!leitor) return msg.textContent = "Nome do leitor obrigatório.";
  if (!validarCPF(cpf)) return msg.textContent = "CPF deve ter 11 dígitos (apenas números).";
  if (!dataLocacao) return msg.textContent = "Informe a data de locação.";
  if (!dataDevolucao) return msg.textContent = "Informe a data de devolução.";

  const locacao = { livro, leitor, cpf, dataLocacao, dataDevolucao };
  const locacoes = JSON.parse(localStorage.getItem("locacoes")) || [];
  locacoes.push(locacao);
  localStorage.setItem("locacoes", JSON.stringify(locacoes));
  msg.style.color = "#080";
  msg.textContent = "Locação cadastrada com sucesso!";
  this.reset();
});

function renderizarTabelaLocacoes() {
  const tabela = document.getElementById("locacoes-tabela");
  if (!tabela) return;
  const tbody = tabela.querySelector("tbody");
  tbody.innerHTML = "";
  const locacoes = JSON.parse(localStorage.getItem("locacoes")) || [];
  locacoes.forEach(l => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td data-label="Livro">${l.livro}</td>
      <td data-label="Leitor">${l.leitor}</td>
      <td data-label="CPF">${l.cpf}</td>
      <td data-label="Data Locação">${l.dataLocacao}</td>
      <td data-label="Data Devolução">${l.dataDevolucao}</td>
    `;
    tbody.appendChild(tr);
  });
}

if (window.location.pathname.endsWith("locacoes.html")) {
  document.addEventListener("DOMContentLoaded", () => {
    renderizarTabelaLocacoes();
  });
}