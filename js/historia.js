
const textoPrincipal = document.getElementById("textoHistoria");
const textoCompleto = document.getElementById("textoCompleto");
const btnLerMais = document.getElementById("btnLerMais");
const timeline = document.getElementById("timeline");


const eventos = [
  {
    ano: 1895,
    titulo: "Fundação",
    resumo: "Fundação do Flamengo como clube de remo.",
    completo: "O Clube de Regatas do Flamengo foi fundado em 17 de novembro de 1895, inicialmente como um clube de remo. Com o passar dos anos, o Flamengo se tornaria uma das maiores instituições esportivas do Brasil e do mundo."
  },
  {
    ano: 1912,
    titulo: "Nascimento do Futebol",
    resumo: "Criação do departamento de futebol.",
    completo: "Em 1912, o Flamengo criou seu departamento de futebol após a entrada de jogadores dissidentes do Fluminense. A partir daí, o clube iniciou sua trajetória no futebol, que se tornaria sua principal identidade esportiva."
  },
  {
    ano: 1942,
    titulo: "Era Zizinho",
    resumo: "Primeiro grande ídolo da história.",
    completo: "Na década de 1940, liderado por Zizinho, o Flamengo viveu sua primeira grande era no futebol. O título carioca de 1942 marcou a consolidação do clube como potência no cenário estadual e nacional."
  },
  {
    ano: 1981,
    titulo: "Glória Eterna",
    resumo: "Libertadores e Mundial de Clubes.",
    completo: "Em 1981, o Flamengo viveu o maior ano de sua história ao conquistar a Copa Libertadores da América e o Mundial Interclubes, vencendo o Liverpool. O time liderado por Zico entrou definitivamente para a história do futebol mundial."
  },
  {
    ano: 1992,
    titulo: "Hexacampeão Brasileiro",
    resumo: "Brasileirão com Júnior e Petkovic.",
    completo: "Em 1992, o Flamengo conquistou o Campeonato Brasileiro em uma campanha memorável, com grandes atuações de Júnior e outros ídolos, reafirmando sua força no cenário nacional."
  },
  {
    ano: 2009,
    titulo: "O Imperador",
    resumo: "Brasileirão com Adriano.",
    completo: "Em 2009, o Flamengo voltou ao topo do futebol brasileiro ao conquistar o Brasileirão com Adriano Imperador como grande destaque, encerrando um longo jejum nacional."
  },
  {
    ano: 2013,
    titulo: "Retomada Nacional",
    resumo: "Título da Copa do Brasil.",
    completo: "Em 2013, o Flamengo conquistou a Copa do Brasil, marcando o início de uma nova fase de reestruturação esportiva e administrativa que prepararia o clube para anos ainda mais vitoriosos."
  },
  {
    ano: 2019,
    titulo: "Nova Era",
    resumo: "Libertadores e Brasileirão.",
    completo: "Em 2019, o Flamengo viveu uma temporada histórica ao conquistar a Libertadores e o Brasileirão, com um futebol dominante e ofensivo. O time comandado por Jorge Jesus é considerado um dos melhores da história do clube."
  },
  {
    ano: 2022,
    titulo: "Glória Renovada",
    resumo: "Terceira Libertadores.",
    completo: "Em 2022, o Flamengo conquistou sua terceira Libertadores, reafirmando sua posição entre os maiores clubes da América do Sul e mantendo-se protagonista no cenário internacional."
  },
  {
  ano: 2025,
  titulo: "Hegemonia",
  resumo: "Maior vencedor brasileiro da Libertadores e seis títulos no ano.",
  completo: "Em 2025, o Flamengo alcançou um feito histórico ao se tornar o maior vencedor brasileiro da Copa Libertadores da América, além de conquistar seis títulos na mesma temporada. O ano consolidou o clube como a maior potência do futebol sul-americano no século XXI, unindo domínio esportivo, elenco estrelado e protagonismo internacional."
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
  <h3 class="evento-titulo">${item.titulo}</h3>
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

  textoPrincipal.innerHTML = `
    <strong class="historia-titulo">${eventoAtual.titulo}</strong><br>
    ${eventoAtual.resumo}
  `;

  textoCompleto.textContent = eventoAtual.completo;

  // fecha texto completo ao trocar evento
  textoCompleto.classList.add("escondido");
  btnLerMais.textContent = "Ler mais";

  // destaque visual do evento
  document.querySelectorAll(".evento").forEach(ev => ev.classList.remove("selecionado"));
  document
    .querySelector(`.evento[data-index="${index}"]`)
    .classList.add("selecionado");
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
