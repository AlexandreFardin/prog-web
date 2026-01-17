
const anoSpan = document.getElementById("ano");

if (anoSpan) {
  const anoAtual = new Date().getFullYear();
  anoSpan.textContent = anoAtual;
}


const btnTopo = document.getElementById("voltarTopo");

if (btnTopo) {
  btnTopo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
