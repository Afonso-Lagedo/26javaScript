const a = 19;

/*if (a > 10) {
  console.log("Maior");
} else {
  console.log("Menor");
}  //COM TERNÁRIO:*/

// CONDIÇÃO ? 'VERDADEIRO' : 'FALSO'
const b = a > 10 ? "Maior" : "Menor";

console.log(b);

//Exemplo 2
const x = null;
const y = x || 5;

console.log(y);
