// Para executar uma funcao -> nameFunction();
// A function pode receber paramestros -> nameFunction(parametro1, parametro2);
// built-in:

function startFunctions() {
  // prompt();
  let age = prompt("Qual sua idade?");
  let nome = prompt("Qual seu nome?");
  console.log(`Sua idade e: ${age} anos.`);

  // alert();
  alert(`Seu nome e ${nome}`);
}

// built-in: Math.x();
let maior = Math.max(1, 2, 3, 4, 66, 234, 88);
console.log(`O maior numero e: ${maior}`);

let menor = Math.min(4, 5, 88, 2, 332, 2);
console.log(`O menor numero e: ${menor}`);

let rounded = Math.round(3.141592653589793);
console.log(`O numero de pi arredondando fica: ${rounded}`);

let roundedUp = Math.ceil(3.141592653589793);
console.log(`O numero de pi arredondando para cima fica: ${roundedUp}`);

let abs = Math.abs(200 - 1000);
console.log(`O resultado da conta sem o abs e : ${200 - 1000}`);
console.log(`O resultado do abs e: ${abs}`);

// built-in console.log();
console.log("O console.log tambem e um built-in!");
