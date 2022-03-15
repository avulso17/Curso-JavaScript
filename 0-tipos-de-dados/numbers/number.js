// tipo de dado: number
// typeof vai imprimir no console qual o tipo do operados
console.log("typeof vai imprimir no console qual o tipo do operados:");
console.log(typeof 13); //number
console.log(typeof 1.8); //number
console.log(typeof -163); //number

// aritmetica com numbers
console.log("Um pouco de aritmetica com numbers:");
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 + 10 / 10);
console.log(10 - 10 * 10);
console.log(20 % 2);
console.log(21 % 2);
console.log("typeof com aritmetica:");
console.log(typeof (10 + 10));

// special numbers
// considerados como numbers, mas nao funcionam como number
// -infinity
// -NaN
console.log("Numeros especiais:");
console.log(Infinity);
console.log(-Infinity);
console.log(NaN);
console.log("Numeros especiais sao considerados numbers:");
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);

function link() {
  window.location.replace("../index.html");
}
