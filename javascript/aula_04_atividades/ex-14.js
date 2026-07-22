let amigos = [
  { nome: "Cristiano", idade: 16 },
  { nome: "Jennifer", idade: 17 },
  { nome: "Kassiane", idade: 15 },
  { nome: "Lucas", idade: 18 }
];

let nomes = [];
let idades = [];

amigos.forEach(function(amigo) {
  nomes.push(amigo.nome);
  idades.push(amigo.idade);
});

console.log("Nomes:", nomes);
console.log("Idades:", idades);