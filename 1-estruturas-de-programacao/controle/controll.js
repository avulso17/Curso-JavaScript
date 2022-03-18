// estruturas de controle: if, else if, else
console.log("Estruturas de controle:");

//  if
let idade = 18;
let nome = "Felipe";
if (nome === "Felipe" && idade >= 18) {
  console.log(`Nome: ${nome}\nIdade: ${idade}\nTa na lista, LIBERADO!`);
}

// else if
let nome2 = "duda";
if (nome2 === "dudu") {
  console.log(`Nome: ${nome2}\nTa na lista, LIBERADO!`);
} else if (nome2 !== "dudu") {
  console.log(`Nome: ${nome2}\nNao ta na lista, CAI FORA!`);
}

// else
function drink() {
  let age = prompt("Qual sua idade?");
  if (age >= 18) {
    console.log(`Idade: ${age} anos, liberado pra tomar cachaca!`);
  } else if (age <= 0) {
    console.log(
      `Idade: ${age} anos, caboco nem nasceu direito e ja quer beber :p`
    );
  } else {
    console.log(`Idade: ${age} anos, vai la pegar seu toddynho bebe!`);
  }
}

function ifControll() {
  const x = prompt("Escolha qual texto sera exibido no botao, 1 ou 2:");

  if (x == 1) {
    const button = document.getElementById("text");
    button.textContent = document.write("Teste 1");
  }
}
