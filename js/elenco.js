
const elenco = [
  // 🧤 Goleiros
  {
    nome: "Dyogo Alves",
    numero: 49,
    posicao: "Goleiro",
    foto: "img/jogadores/dyogo-alves.jpg"
  },
  {
    nome: "Agustín Rossi",
    numero: 1,
    posicao: "Goleiro",
    foto: "img/jogadores/rossi.jpg"
  },

  // 🛡️ Zagueiros
  {
    nome: "Léo Pereira",
    numero: 4,
    posicao: "Zagueiro",
    foto: "img/jogadores/leo-pereira.jpg"
  },
  {
    nome: "Cleiton",
    numero: 33,
    posicao: "Zagueiro",
    foto: "img/jogadores/cleiton.jpg"
  },
  {
    nome: "Léo Ortiz",
    numero: 3,
    posicao: "Zagueiro",
    foto: "img/jogadores/leo-ortiz.jpg"
  },
  {
    nome: "Danilo",
    numero: 13,
    posicao: "Zagueiro",
    foto: "img/jogadores/danilo.jpg"
  },
  {
    nome: "João Victor",
    numero: 71,
    posicao: "Zagueiro",
    foto: "img/jogadores/joao-victor.jpg"
  },

  // 👉 Laterais Direito
  {
    nome: "Varela",
    numero: 2,
    posicao: "Lateral-direito",
    foto: "img/jogadores/varela.jpg"
  },
  {
    nome: "Emerson Royal",
    numero: 22,
    posicao: "Lateral-direito",
    foto: "img/jogadores/emerson-royal.jpg"
  },

  // ⬅️ Laterais Esquerdo
  {
    nome: "Matías Viña",
    numero: 17,
    posicao: "Lateral-esquerdo",
    foto: "img/jogadores/matias-vina.jpg"
  },
  {
    nome: "Ayrton Lucas",
    numero: 6,
    posicao: "Lateral-esquerdo",
    foto: "img/jogadores/ayrton-lucas.jpg"
  },
  {
    nome: "Alex Sandro",
    numero: 26,
    posicao: "Lateral-esquerdo",
    foto: "img/jogadores/alex-sandro.jpg"
  },

  // ⚙️ Volantes
  {
    nome: "Evertton Araújo",
    numero: 52,
    posicao: "Volante",
    foto: "img/jogadores/evertton-araujo.jpg"
  },
  {
    nome: "Erick",
    numero: 5,
    posicao: "Volante",
    foto: "img/jogadores/erick.jpg"
  },
  {
    nome: "Allan",
    numero: 29,
    posicao: "Volante",
    foto: "img/jogadores/allan.jpg"
  },
  {
    nome: "Jorginho",
    numero: 21,
    posicao: "Volante",
    foto: "img/jogadores/jorginho.jpg"
  },

  // 🎯 Meio-campistas
  {
    nome: "Giorgian De Arrascaeta",
    numero: 10,
    posicao: "Meio-campo",
    foto: "img/jogadores/arrascaeta.jpg"
  },
  {
    nome: "Nicolás De La Cruz",
    numero: 18,
    posicao: "Meio-campo",
    foto: "img/jogadores/de-la-cruz.jpg"
  },
  {
    nome: "Saúl",
    numero: 8,
    posicao: "Meio-campo",
    foto: "img/jogadores/saul-niguez.jpg"
  },
  {
    nome: "Carrascal",
    numero: 15,
    posicao: "Meio-campo",
    foto: "img/jogadores/carrascal.jpg"
  },

  // ⚡ Atacantes
  {
    nome: "Bruno Henrique",
    numero: 27,
    posicao: "Atacante",
    foto: "img/jogadores/bruno-henrique.jpg"
  },
  {
    nome: "Michael",
    numero: 30,
    posicao: "Atacante",
    foto: "img/jogadores/michael.jpg"
  },
  {
    nome: "Pedro",
    numero: 9,
    posicao: "Atacante",
    foto: "img/jogadores/pedro.jpg"
  },
  {
    nome: "Everton",
    numero: 11,
    posicao: "Atacante",
    foto: "img/jogadores/everton-cebolinha.jpg"
  },
  {
    nome: "Luiz Araujo",
    numero: 7,
    posicao: "Atacante",
    foto: "img/jogadores/luiz-araujo.jpg"
  },
  {
    nome: "Gonzalo Plata",
    numero: 50,
    posicao: "Atacante",
    foto: "img/jogadores/gonzalo-plata.jpg"
  },
  {
    nome: "Wallace Yan",
    numero: 64,
    posicao: "Atacante",
    foto: "img/jogadores/wallace-yan.jpg"
  },
  {
    nome: "Samuel Lino",
    numero: 16,
    posicao: "Atacante",
    foto: "img/jogadores/samuel-lino.jpg"
  }
];


const modal = document.getElementById("modalJogador");
const modalFoto = document.getElementById("modalFoto");
const modalNome = document.getElementById("modalNome");
const modalNumero = document.getElementById("modalNumero");
const modalPosicao = document.getElementById("modalPosicao");
const fecharModal = document.getElementById("fecharModal");


const lista = document.getElementById("listaJogadores");
const inputBusca = document.getElementById("buscarJogador");
const botoesFiltro = document.querySelectorAll(".filtros button");


function renderizarJogadores(jogadores) {
  lista.innerHTML = "";

  jogadores.forEach(jogador => {
    const card = document.createElement("div");
    card.classList.add("jogador");

    card.innerHTML = `
      <span class="numero">#${jogador.numero}</span>
      <h3>${jogador.nome}</h3>
      <p>${jogador.posicao}</p>
    `;

    card.addEventListener("click", () => {
      abrirModal(jogador);
    });

    lista.appendChild(card);
  });
}



botoesFiltro.forEach(botao => {
  botao.addEventListener("click", () => {
    const posicao = botao.dataset.posicao;

    botoesFiltro.forEach(b => b.classList.remove("active"));
    botao.classList.add("active");

    if (posicao === "todos") {
      renderizarJogadores(elenco);
    } else {
      const filtrados = elenco.filter(
        jogador => jogador.posicao === posicao
      );
      renderizarJogadores(filtrados);
    }
  });
});


inputBusca.addEventListener("input", () => {
  const termo = inputBusca.value.toLowerCase();

  const filtrados = elenco.filter(jogador =>
    jogador.nome.toLowerCase().includes(termo)
  );

  renderizarJogadores(filtrados);
});

function abrirModal(jogador) {
  modalFoto.src = jogador.foto;
  modalNome.textContent = jogador.nome;
  modalNumero.textContent = `Número: ${jogador.numero}`;
  modalPosicao.textContent = `Posição: ${jogador.posicao}`;

  modal.classList.add("active");
}

function fecharModalJogador() {
  modal.classList.remove("active");
}

fecharModal.addEventListener("click", fecharModalJogador);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    fecharModalJogador();
  }
});



renderizarJogadores(elenco);
