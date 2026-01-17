
const conquistas = [
  // 🌍 Mundial
  {
    titulo: "Mundial",
    ano: 1981,
    tipo: "mundial",
    jogo: "Flamengo x Liverpool"
  },

  // 🌎 Libertadores
  {
    titulo: "Libertadores",
    ano: 1981,
    tipo: "libertadores",
    jogo: "Flamengo x Cobreloa"
  },
  {
    titulo: "Libertadores",
    ano: 2019,
    tipo: "libertadores",
    jogo: "Flamengo x River Plate"
  },
  {
    titulo: "Libertadores",
    ano: 2022,
    tipo: "libertadores",
    jogo: "Flamengo x Athletico-PR"
  },
  {
  titulo: "Libertadores",
  ano: 2025,
  tipo: "libertadores",
  jogo: "Flamengo x Palmeiras"
},

  // 🏆 Brasileirão
  {
    titulo: "Brasileirão",
    ano: 1980,
    tipo: "brasileirao",
    jogo: "Flamengo x Atlético-MG"
  },
  {
    titulo: "Brasileirão",
    ano: 1982,
    tipo: "brasileirao",
    jogo: "Flamengo x Grêmio"
  },
  {
    titulo: "Brasileirão",
    ano: 1983,
    tipo: "brasileirao",
    jogo: "Flamengo x Santos"
  },
  {
    titulo: "Brasileirão",
    ano: 1987,
    tipo: "brasileirao",
    jogo: "Flamengo x Internacional"
  },
  {
    titulo: "Brasileirão",
    ano: 1992,
    tipo: "brasileirao",
    jogo: "Flamengo x Botafogo"
  },
  {
    titulo: "Brasileirão",
    ano: 2009,
    tipo: "brasileirao",
    jogo: "Flamengo x Grêmio"
  },
  {
    titulo: "Brasileirão",
    ano: 2019,
    tipo: "brasileirao",
    jogo: "Flamengo x Santos"
  },
  {
    titulo: "Brasileirão",
    ano: 2020,
    tipo: "brasileirao",
    jogo: "Flamengo x São Paulo"
  },
  {
  titulo: "Brasileirão",
  ano: 2025,
  tipo: "brasileirao",
  jogo: "Flamengo x Ceará"
},

  // 🇧🇷 Copa do Brasil
  {
    titulo: "Copa do Brasil",
    ano: 1990,
    tipo: "copa-do-brasil",
    jogo: "Flamengo x Goiás"
  },
  {
    titulo: "Copa do Brasil",
    ano: 2006,
    tipo: "copa-do-brasil",
    jogo: "Flamengo x Vasco"
  },
  {
    titulo: "Copa do Brasil",
    ano: 2013,
    tipo: "copa-do-brasil",
    jogo: "Flamengo x Athletico-PR"
  },
  {
    titulo: "Copa do Brasil",
    ano: 2022,
    tipo: "copa-do-brasil",
    jogo: "Flamengo x Corinthians"
  },

  // 🏆 Supercopa
  {
    titulo: "Supercopa do Brasil",
    ano: 2020,
    tipo: "supercopa",
    jogo: "Flamengo x Athletico-PR"
  },
  {
    titulo: "Supercopa do Brasil",
    ano: 2021,
    tipo: "supercopa",
    jogo: "Flamengo x Palmeiras"
  },
  {
    titulo: "Supercopa do Brasil",
    ano: 2022,
    tipo: "supercopa",
    jogo: "Flamengo x Atlético-MG"
  },

  {
  titulo: "Supercopa do Brasil",
  ano: 2025,
  tipo: "supercopa",
  jogo: "Flamengo x Botafogo"
},

  // 🌎 Recopa
  {
    titulo: "Recopa Sul-Americana",
    ano: 2020,
    tipo: "recopa",
    jogo: "Flamengo x Independiente del Valle"
  },

  // 🌎 Outros internacionais
  {
    titulo: "Copa Mercosul",
    ano: 1999,
    tipo: "mercosul",
    jogo: "Flamengo x Palmeiras"
  },
  {
    titulo: "Copa Ouro",
    ano: 1996,
    tipo: "copa-ouro",
    jogo: "Flamengo x São Paulo"
  },

  // 🟥⬛ Campeonato Carioca (Estadual)
  { titulo: "Campeonato Carioca", ano: 1914, tipo: "carioca", jogo: "Flamengo x Botafogo" },
  { titulo: "Campeonato Carioca", ano: 1915, tipo: "carioca", jogo: "Flamengo x Fluminense" },
  { titulo: "Campeonato Carioca", ano: 1920, tipo: "carioca", jogo: "Flamengo x Fluminense" },
  { titulo: "Campeonato Carioca", ano: 1921, tipo: "carioca", jogo: "Flamengo x Fluminense" },
  { titulo: "Campeonato Carioca", ano: 1925, tipo: "carioca", jogo: "Flamengo x Fluminense" },
  { titulo: "Campeonato Carioca", ano: 1927, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 1939, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 1942, tipo: "carioca", jogo: "Flamengo x Botafogo" },
  { titulo: "Campeonato Carioca", ano: 1943, tipo: "carioca", jogo: "Flamengo x Botafogo" },
  { titulo: "Campeonato Carioca", ano: 1944, tipo: "carioca", jogo: "Flamengo x Botafogo" },
  { titulo: "Campeonato Carioca", ano: 1953, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 1954, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 1955, tipo: "carioca", jogo: "Flamengo x América-RJ" },
  { titulo: "Campeonato Carioca", ano: 1963, tipo: "carioca", jogo: "Flamengo x Fluminense" },
  { titulo: "Campeonato Carioca", ano: 1965, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 1972, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 1974, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 1978, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 1979, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 1979.1, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 1981, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 1986, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 1991, tipo: "carioca", jogo: "Flamengo x Botafogo" },
  { titulo: "Campeonato Carioca", ano: 1996, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 1999, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 2000, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 2001, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 2004, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 2007, tipo: "carioca", jogo: "Flamengo x Botafogo" },
  { titulo: "Campeonato Carioca", ano: 2008, tipo: "carioca", jogo: "Flamengo x Botafogo" },
  { titulo: "Campeonato Carioca", ano: 2009, tipo: "carioca", jogo: "Flamengo x Botafogo" },
  { titulo: "Campeonato Carioca", ano: 2011, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 2014, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 2017, tipo: "carioca", jogo: "Flamengo x Fluminense" },
  { titulo: "Campeonato Carioca", ano: 2019, tipo: "carioca", jogo: "Flamengo x Vasco" },
  { titulo: "Campeonato Carioca", ano: 2020, tipo: "carioca", jogo: "Flamengo x Fluminense" },
  { titulo: "Campeonato Carioca", ano: 2021, tipo: "carioca", jogo: "Flamengo x Fluminense" },
  {
  titulo: "Campeonato Carioca",
  ano: 2025,
  tipo: "carioca",
  jogo: "Flamengo x Fluminense"
},
  { titulo: "Campeonato Carioca", ano: 2024, tipo: "carioca", jogo: "Flamengo x Nova Iguaçu" }
  
];



const lista = document.getElementById("listaConquistas");
const botoesFiltro = document.querySelectorAll(".filtros button[data-tipo]");
const btnOrdenar = document.getElementById("ordenarAno");


function renderizarConquistas(listaDeConquistas) {
  lista.innerHTML = "";

  listaDeConquistas.forEach(conquista => {
    const card = document.createElement("div");
    card.classList.add("conquista");

    card.innerHTML = `
      <span class="ano">${conquista.ano}</span>
      <h3>${conquista.titulo}</h3>
      <p>${conquista.jogo}</p>
    `;

    lista.appendChild(card);
  });
}


botoesFiltro.forEach(botao => {
  botao.addEventListener("click", () => {
    const tipo = botao.dataset.tipo;

    botoesFiltro.forEach(b => b.classList.remove("active"));
    botao.classList.add("active");

    if (tipo === "todos") {
      renderizarConquistas(conquistas);
    } else {
      const filtradas = conquistas.filter(
        conquista => conquista.tipo === tipo
      );
      renderizarConquistas(filtradas);
    }
  });
});


btnOrdenar.addEventListener("click", () => {
  const ordenadas = [...conquistas].sort((a, b) => b.ano - a.ano);
  renderizarConquistas(ordenadas);
});


renderizarConquistas(conquistas);
