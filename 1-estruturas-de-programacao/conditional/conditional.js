// Estrutura condicional: switch/case
console.log("Estrutura condicional:");

// switch/case
function functionName() {
  let nome = prompt("Qual seu nome?");

  switch (nome) {
    case "Felipe":
      console.log(`O seu nome e ${nome}`);
      alert(`O seu nome e ${nome}`);
      break;
    case "Mateus":
      console.log(`O seu nome e ${nome}`);
      alert(`O seu nome e ${nome}`);
      break;
    default:
      console.log(`Nome: ${nome}, usuario nao encontrado!`);
      alert(`Nome: ${nome}, usuario nao encontrado!`);
      break;
  }
}
