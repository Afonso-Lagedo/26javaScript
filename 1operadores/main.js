/*Introdução a váriáveis   CONST VAR LET
const a = 10
const b = 'Olá mundo'
*/

/*Operadores de comparação
> , >=, <, <=
= atribuição
== igualdade de valor
=== igualdade de valor e tipo
!= valor
!== valor e tipo
*/

console.log(10 > 5); //retorna o Boolean

/*
Operadores Lógicos
&& E
|| Ou
! Não

Exemplo da senha
*/

/*Em JS tudo pode ser avaliado com VERDADEIRO ou FALSO

VALORES FALSOS:
false
0
''  ""  ``
null   undefined
Nan
*/

/*Curto-Circuito (Short-Circuit) && retorna o valor falso ou o ultimo valido*/
console.log("teste" && 10);

console.log("teste" && NaN && 88);

/*Curto-Circuito (Short-Circuit) && Exemplo 2*/

function saudacao() {
  return "Olá Mundo";
}

const teste = false;

teste && console.log(saudacao());

/*Curto-Circuito (Short-Circuit) || retorna o primeiro verdadeiro ou o ultimo não valido*/

console.log(false || "Teste" || 10);

console.log(false || "" || 0);

/*Curto-Circuito (Short-Circuit) || Exemplo 2*/

const corUser = undefined;
const corPadrao = corUser || "azul";

console.log(corPadrao);
