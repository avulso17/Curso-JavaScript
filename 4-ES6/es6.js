// let e const
// declaracoes de variaveis onde temos escopo nao vazado
// uma variavel i fora de um if por exemplo, que tem a mesma variavel i
// terao valores diferentes e se manteram os msm
// ex:
let i = 10;

for (let i = 0; i <= 5; i++) {
  console.log(`Valor de i dentro do escopo: ${i}`);
}

console.log(`Valor de i fora do escopo: ${i}`);

// 2 arrow functions
// um recurso para criar funcoes de forma mais simples
// ela nao funciona exatamente como uma function em todos os aspectos

const ex = function sum(a, b) {
  return a + b;
};

// arrow function
const arrowEx = (a, b) => {
  return a + b;
};

console.log(ex(5, 5));
console.log(arrowEx(5, 5));

// ex2
const ex2 = nome => {
  if (nome) {
    return console.log(`Eai, ${nome}!`);
  } else {
    return console.log("Desconhecido :P");
  }
};

ex2("Felipe");

// ex3
const withOut = () => console.log("Sem chaves tambem funciona :D");

withOut();

// ex4
const user = {
  name: "Felipe",
  sayUserName() {
    var self = this;
    setTimeout(function () {
      console.log(self);
      console.log(`Username: ${self.name}`);
    }, 500);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log(`Username: ${this.name}`);
    }, 700);
  },
};

// user.sayUserName();
// user.sayUserNameArrow();

// 3 filter
const arr1 = [1, 2, 3, 4, 5];

const highNumbers = arr1.filter(number => {
  if (number >= 3) {
    return number;
  }
});

console.log(highNumbers);

// ex 1
const users = [
  {
    name: "Felipe",
    available: true,
  },
  {
    name: "Mateus",
    available: true,
  },
  {
    name: "Lucas",
    available: false,
  },
  {
    name: "Davi",
    available: false,
  },
];

const availableUsers = users.filter(item => {
  return item.available;
});

const notAvailableUsers = users.filter(item => {
  return !item.available;
});

console.log(availableUsers);
console.log(notAvailableUsers);

// 4 map
const products = [
  {
    name: "Lampada",
    price: 10.99,
    category: "Eletro",
  },
  {
    name: "Tapete",
    price: 15.99,
    category: "Casa",
  },
  {
    name: "Lustre",
    price: 149.9,
    category: "Eletro",
  },
  {
    name: "Almofada",
    price: 49.99,
    category: "Casa",
  },
];

products.map(item => {
  if (item.category === "Eletro") {
    item.onSale = true;
  }
});

console.log(products);

// 5 destructuring
// com arrays
const fruits = ["Apple", "Orange", "Grape"];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);

// com objetos
const arr2 = {
  nome: "Felipe",
  idade: 22,
  cargo: "dev",
  category: "front-end",
};

const { nome: name, idade: age, cargo: office, category } = arr2;

console.log(
  `Meu nome e ${name}, tenho ${age} anos e trabalho como ${office} ${category}!`
);

// 6 spread operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a1, 4];

console.log(a4);

// 7 classes
class Products {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  ProductWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Products("Camiseta preta", 149.99);

console.log(shirt);

console.log(shirt.ProductWithDiscount(10));

// 8 heranca de classes
class ProductsWithAttributes extends Products {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log("As cores sao:");
    this.colors.forEach(item => {
      console.log(item);
    });
  }
}

const hat = new ProductsWithAttributes("Bone Aba Reta - New Era", 149.99, [
  "Preto",
  "Vermelho",
]);

console.log(hat.name);
hat.showColors();
