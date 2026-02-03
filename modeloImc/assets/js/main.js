//capturar evento de submit do formulário
const form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  /*console.log("Evento previnido");
  setResultado("Teste");*/
  const inputMassa = e.target.querySelector("#massa");
  const inputAltura = e.target.querySelector("#altura");

  const massa = Number(inputMassa.value);
  const altura = Number(inputAltura.value);

  if (!massa) {
    //verifica se massa é verdadeiro, ou seja um Number()
    setResultado("Valor de massa inválido", false);
    return; //Para para a função
  }

  if (!altura) {
    //verifica se altura é verdadeiro, ou seja um Number()
    setResultado("Valor de altura inválido", false);
    return; //Para para a função
  }

  const imc = getImc(massa, altura);
  const faixa = getFaixa(imc);
  //console.log(imc, faixa);

  const msg = `Seu IMC é ${imc} (${faixa})`;

  setResultado(msg, true);
});

function getImc(massa, altura) {
  const imc = massa / altura ** 2;
  return imc.toFixed(2);
}

function getFaixa(imc) {
  const n = ["Abaixo", "Normal", "Sobrepeso", "Ob.1", "Ob.2", "Ob.3"];

  if (imc >= 39.9) return n[5];

  if (imc >= 34.9) return n[4];

  if (imc >= 29.9) return n[3];

  if (imc >= 24.9) return n[2];

  if (imc >= 18.5) return n[1];

  if (imc < 18.5) return n[0];
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  /*criando um elemento html
  const p = document.createElement("p"); ou...*/
  const p = criaP(); //Importante: Adicionando o resultado de 'criaP()' em 'p'

  //manipulando css baseado no bool
  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("paragrafo-erro");
  }
  //adicionando html no elemento
  p.innerHTML = msg;
  //adicionando Filho (criança)
  resultado.appendChild(p);
}
