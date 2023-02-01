const input = document.querySelector("input");
const btnSalvar = document.querySelector(".enviar");
const btnSortear = document.querySelector(".sortear");
const spinner = document.querySelector(".spinner");

let participantes = [];

function enviar(e) {
  e.preventDefault();
  if (input.value != "") {
    participantes.push(input.value);
    input.value = "";
  }
}

function sortear(e) {
  e.preventDefault();

  if (participantes != "") {
    spinner.classList.add("ativo");

    setTimeout(() => {
      spinner.classList.remove("ativo");
      let index = parseInt(Math.random() * participantes.length);
      alert("Vencedor do sorteio: " + participantes[index]);
    }, 2000);
  } else {
    alert("Nenhum participante adicionado");
  }
}

btnSortear.addEventListener("click", sortear);

btnSalvar.addEventListener("click", enviar);
