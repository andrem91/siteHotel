const contador = document.getElementById("contador");
const redirecionar = document.getElementById("redirecionar");
let tempoRestante = 5;
let intervalo;

window.onload = () => {
  contador.textContent = tempoRestante;

  intervalo = setInterval(() => {
    tempoRestante--;
    contador.textContent = tempoRestante;

    if (tempoRestante == 0) {
      clearInterval(intervalo);
      window.location.href = "/listaHoteis";
    }
  }, 1000);

  redirecionar.addEventListener("click", () => {
    clearInterval(intervalo);
    window.location.href = "/listaHoteis";
  });
};
