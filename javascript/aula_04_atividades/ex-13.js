let amigos = [
  { nome: "Cristiano", idade: 16 },
  { nome: "Jennifer", idade: 17 },
  { nome: "Kassiane", idade: 15 },
  { nome: "Lucas", idade: 18 }
];

amigos.forEach(function(amigo) {
  console.log(`Nome: ${amigo.nome}, Idade: ${amigo.idade}`);
});