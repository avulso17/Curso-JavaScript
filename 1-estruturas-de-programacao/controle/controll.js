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

// ex 10
const speed = 82.5;

console.log(`Sistema de transito:\nVelocidade registrada -> ${speed} km/h`);

if (speed > 80) {
  console.log("Voce foi multado!");
} else {
  console.log("Continue assim, salve vidas!");
}

// ex 11
function driveIn() {
  const age = prompt("Digite sua idade:");

  if (age >= 18) {
    const cnh = prompt("Voce possui CNH? Sim(1) Nao(2)");

    if (cnh === "1") {
      console.log(
        `-Sistema DETRAF-\nIdade: ${age}\nPossui CNH? Sim.\nDirija com cuidado!`
      );
    } else if (cnh === "2") {
      console.log(
        `-Sistema DETRAF-\nIdade: ${age}\nPossui CNH? Nao.\nProcure a auto-escola mais proxima!`
      );
    } else {
      console.log("Digite 1 para sim, e 2 para nao!");
    }
  } else if (age == null || age == "") {
    console.log("Campo idade nao pode ser vazio");
  } else {
    console.log(
      `-Sistema DETRAF-\nIdade: ${age}\nVoce nao tem idade para ter CNH. Aguarde!`
    );
    console.log(age);
  }
}
