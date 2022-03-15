function link() {
  window.location.replace("../index.html");
}

// tipo de dado: boolean
console.log(typeof true);
console.log(typeof false);
console.log(typeof (3 < 5));
console.log(3 < 5);
console.log(3 > 5);

// comparacoes
console.log("Comparacoes com boolean:");
console.log(1 < 2);
console.log(1 > 2);
console.log(1 >= 1);
console.log(1 <= 1);
console.log(1 == 1);
console.log("felipe" != "felipe");
console.log(3 == "3");
console.log(1 === 1);

// operadores logicos booleanos
console.log("Operadores logicos:");
console.log(`Operador and- && -- ${3 > 2 && 5 > 7}`);
console.log(`Operador or- || -- ${3 > 2 || 5 > 7}`);
console.log(`Operador and- && -- ${true && false}`);
console.log(`Operador or- || -- ${true || false}`);
console.log(`Operador not- ! -- ${!true}`);

// operador ternario
console.log("Operador ternario:");
console.log(true ? 1 : 2);
console.log(`5 e maior que 2? ${5 > 2 ? "Sim!" : "Nao!"}`);
