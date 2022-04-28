// aula 1
function writeInConsole() {
  console.log("Console 1");
}

function writeInConsole2(text) {
  console.log(text);
}

const numAleatorio = function () {
  console.log("Console 3");
};

// aula 2
function multThreeNumbers(x, y, z) {
  return x * y * z;
}

console.log(`O calculo da funcao e: ${multThreeNumbers(2, 3, 4)}`);

const mult = multThreeNumbers(5, 4, 8);

console.log(`O valor de mult e: ${mult}`);

function fetran(age, cnh) {
  if (age >= 18 && cnh === true) {
    console.log("Pode pilotar!");
  } else {
    console.log("Nao pode pilotar!");
  }
}

fetran(22, true);
fetran(35, 1);
fetran(19, 0);

// aula 3
// escopo de uma funcao

let n = 10;

const num = function () {
  let n = 25;
  console.log(`N dentro da funcao: ${n}`);
};

num();

console.log(`N fora da funcao: ${n}`);

// mais sobre escopo

let x = 110;

if (true) {
  let x = 220;
  console.log(`x dentro do if e: ${x}`);
}

console.log(`x fora do if e: ${x}`);

// escopo aninhado

let y = 5;

const escopoDiferente = function (n) {
  let y = n * 2;
  console.log(`escopo 1: ${y}`);

  if (n == 10) {
    let y = 55;
    console.log(`escopo 2: ${y}`);
  }
};

console.log(`escopo global: ${y}`);

escopoDiferente(10);

// aula 4
// arrow functions

const arrowFunction = n => {
  return n % 2;
};

console.log(arrowFunction(5));
