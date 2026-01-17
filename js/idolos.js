
const idolos = [
  {
    nome: "Zico",
    foto: "img/idolos/zico.png",
    descricao: "Maior ídolo da história do Flamengo. Líder do time campeão mundial em 1981."
  },
  {
    nome: "Júnior",
    foto: "img/idolos/junior.jpg",
    descricao: "Capitão do time histórico de 1981 e símbolo de raça e técnica."
  },
  {
    nome: "Adriano Imperador",
    foto: "img/idolos/adriano.jpg",
    descricao: "Herói do Brasileirão de 2009, conhecido por sua força e identificação com a torcida."
  },
  {
    nome: "Gabriel Barbosa",
    foto: "img/idolos/gabigol.jpg",
    descricao: "Decisivo nas Libertadores de 2019 e 2022, marcou época no clube."
  }
];


let indiceAtual = 0;

const idoloAtual = document.getElementById("idoloAtual");
const btnPrev = document.getElementById("prevIdolo");
const btnNext = document.getElementById("nextIdolo");


const modal = document.getElementById("modalIdolo");
const modalFoto = document.getElementById("modalIdoloFoto");
const modalNome = document.getElementById("modalIdoloNome");
const modalDescricao = document.getElementById("modalIdoloDescricao");
const fecharModal = document.getElementById("fecharModalIdolo");


function renderizarIdolo() {
  const idolo = idolos[indiceAtual];

  idoloAtual.innerHTML = `
    <img src="${idolo.foto}" alt="${idolo.nome}">
    <h3>${idolo.nome}</h3>
    <p>Clique para saber mais</p>
  `;

  idoloAtual.onclick = () => abrirModal(idolo);
}

btnNext.addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % idolos.length;
  renderizarIdolo();
});

btnPrev.addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + idolos.length) % idolos.length;
  renderizarIdolo();
});


function abrirModal(idolo) {
  modalFoto.src = idolo.foto;
  modalNome.textContent = idolo.nome;
  modalDescricao.textContent = idolo.descricao;
  modal.classList.add("active");
}

fecharModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});


renderizarIdolo();
