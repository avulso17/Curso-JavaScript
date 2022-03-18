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
