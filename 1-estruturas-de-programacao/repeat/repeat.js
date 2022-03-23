// estruturas de repeticao: while, do while, for
console.log("Estruturas de repeticao:");

// while
let x = 1;

while (x <= 10) {
  console.log(`Count X: ${x}`);
  x++; // x = x + 1;
}

// do while
let y = 10;

do {
  console.log(`Value Y: ${y}`);
  y--;
} while (y > 0);

// for
for (let z = 100; z >= 0; z -= 10) {
  console.log(`Valor de z: ${z}`);
}

for (let i = 0; i <= 50; i = i + 5) {
  console.log(`O valor de i e: ${i}\ni + 5 = ${i + 5}`);
}

// break
let nome = "Felipe";

for (let b = 0; b <= 10; b++) {
  if (b == 3) nome = "Mateus";

  if (b == 5 && nome == "Mateus") {
    console.log(`O nome e ${nome}, entao pode PARAR!`);
    break;
  }

  console.log(b);
}

// continue
for (let a = 10; a >= 0; a--) {
  if (a % 2 == 0) {
    console.log("Caiu no continue, numero PAR!");
    continue;
  }

  console.log(`O valor de a e: ${a}`);
}

// ex 14
function ex14() {
  for (let ex = 0; ex <= 50; ex++) {
    if (ex % 2 == 0) {
      console.log(`Numero par - ${ex}`);
      // continue;
    } else {
      console.log(`Numero impar - ${ex}`);
    }
  }
}

// ex15
function ex15() {
  let num = prompt("Digite qualquer numero:");
  let div = 0;

  for (let p = 1; p <= num; p++) {
    if (num % p == 0) {
      div++;
    }
  }

  if (div == 2) {
    console.log(
      `O numero ${num} e primo!\nNumero de divisoes possiveis: ${div}`
    );
    alert(`O numero ${num} e primo!`);
  } else {
    console.log(
      `O numero ${num} nao e primo!\nNumero de divisoes possiveis: ${div}`
    );
    alert(`O numero ${num} nao e primo!`);
  }
}
