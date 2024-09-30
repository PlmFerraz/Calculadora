const botoes = [...document.querySelectorAll("button")];
const operacao = document.querySelector("#p_operacao");
const result = document.querySelector(".result-text");
let userType = "";

const listaFiltrada = botoes.filter((botao, index) => {
  if (
    botao.innerText != "C" &&
    botao.innerText != "=" &&
    botao.className != "invisible_button" &&
    botao.innerText != "CE"
  ) {
    return botao;
  }
});

const botaoReset = botoes.filter((botao, index) => botao.innerText == "C")[0];
const botaoResult = botoes.filter((botao, index) => botao.innerText == "=")[0];
const botaoBackspace = botoes.filter(
  (botao, index) => botao.innerText == "CE"
)[0];

botaoReset.onclick = reset;

botaoResult.onclick = calculate;

botaoBackspace.onclick = backSpace;

function reset() {
  userType = "";
  operacao.innerHTML = 0;
  result.innerHTML = 0;
}

function backSpace() {
  userType = userType.slice(0, -1);
  operacao.innerHTML = userType || 0;
}

function calculate() {
  result.innerHTML = eval(userType);
}

function type(evento) {
  let digito = evento.target.innerHTML;
  if (digito == "X") {
    digito = "*";
  }
  userType += digito;
  operacao.innerHTML = userType;
}

for (let i = 0; i < listaFiltrada.length; i++) {
  const element = listaFiltrada[i];
  element.onclick = type;
}
