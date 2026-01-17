
const textoPrincipal = document.getElementById("textoHistoria");
const textoCompleto = document.getElementById("textoCompleto");
const btnLerMais = document.getElementById("btnLerMais");
const timeline = document.getElementById("timeline");


const eventos = [
  {
    ano: 1895,
    titulo: "Fundação",
    resumo: "Fundação do Flamengo como clube de remo.",
    completo: "Fundado em 1895 como clube de remo, o Flamengo se tornou um dos maiores clubes do futebol mundial. Ao longo de sua história, o clube conquistou títulos nacionais e internacionais, tornando-se símbolo de paixão e tradição."
  },
  {
    ano: 1912,
    titulo: "Futebol",
    resumo: "Criação do departamento de futebol.",
    completo: "Em 1912, o Flamengo criou seu departamento de futebol, iniciando uma trajetória que viria a marcar o futebol brasileiro com grandes jogadores e conquistas históricas."
  },
  {
    ano: 1981,
    titulo: "Glória",
    resumo: "Libertadores e Mundial de Clubes.",
    completo: "Em 1981, o Flamengo conquistou a Libertadores e o Mundial de Clubes, com um time histórico liderado por Zico, Júnior e outros grandes ídolos. Essa temporada marcou o clube como referência mundial."
  },
  {
    ano: 2009,
    titulo: "Rei",
    resumo: "Brasileirão com Adriano Imperador.",
    completo: "Em 2009, o Flamengo conquistou o Brasileirão com Adriano Imperador como destaque, marcando uma era de grande desempenho e emoção para a torcida."
  },
  {
    ano: 2019,
    titulo: "Nova Era",
    resumo: "Libertadores e Brasileirão.",
    completo: "Em 2019, o Flamengo conquistou a Libertadores e o Brasileirão, com um time extremamente ofensivo e decisivo, consolidando uma das maiores gerações da história do clube."
  }
];


let eventoAtual = eventos[0];


function renderizarTimeline() {
  timeline.innerHTML = "";

  eventos.forEach((item, index) => {
    const bloco = document.createElement("div");
    bloco.classList.add("evento");
    bloco.dataset.index = index;

    bloco.innerHTML = `
      <span class="ano">${item.ano}</span>
      <p>${item.resumo}</p>
    `;

    timeline.appendChild(bloco);
  });

  ativarAnimacao();
}

renderizarTimeline();


function ativarAnimacao() {
  const eventosDOM = document.querySelectorAll(".evento");

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("aparece");
      }
    });
  }, {
    threshold: 0.3
  });

  eventosDOM.forEach(evento => {
    observer.observe(evento);
  });
}


function atualizarTexto(index) {
  eventoAtual = eventos[index];

  textoPrincipal.textContent = eventoAtual.resumo;
  textoCompleto.textContent = eventoAtual.completo;

  
  textoCompleto.classList.add("escondido");
  btnLerMais.textContent = "Ler mais";

  
  document.querySelectorAll(".evento").forEach(ev => ev.classList.remove("selecionado"));
  document.querySelector(`.evento[data-index="${index}"]`).classList.add("selecionado");
}


timeline.addEventListener("click", (e) => {
  const bloco = e.target.closest(".evento");
  if (!bloco) return;

  const index = bloco.dataset.index;
  atualizarTexto(index);
});


btnLerMais.addEventListener("click", () => {
  textoCompleto.classList.toggle("escondido");

  if (textoCompleto.classList.contains("escondido")) {
    btnLerMais.textContent = "Ler mais";
  } else {
    btnLerMais.textContent = "Ler menos";
  }
});


atualizarTexto(0);
