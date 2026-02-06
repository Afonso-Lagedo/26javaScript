//função contrutora
const a = new Date();
console.log(a.toString());

//Marco Zero 01-01-1970
console.log(new Date(0));

//Operações com data sem transformação devem ser feitas em milésimos
const umDia = 60 * 60 * 24;
const zero = new Date(0 + umDia);
console.log(zero);

//data específica
const data = new Date(1993, 8, 3, 18, 30, 20, 500); //ano, mês, dia, hora, min, s, ms
console.log(data);

const f = new Date("1993-09-03 18:30:20");
console.log(f);

//dia
console.log(f.getDate());
//mês
console.log(f.getMonth() + 1);
//ano
console.log(f.getFullYear());
//hora
console.log(f.getHours());
//minutos
console.log(f.getMinutes());
//seg
console.log(f.getSeconds());
//ms
console.log(f.getMilliseconds());
//dia da semana
console.log(f.getDay()); /*0-domingo 6-sábado*/

//quantos milésimos de segundo do marco zero até hoje:
console.log(Date.now());
console.log(new Date(1770406631432));

//Exercício: Função de formatação de data?
