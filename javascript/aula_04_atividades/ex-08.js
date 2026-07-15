let carro = {
  marca: "toyota",
  modelo: "supra mk4",
  ano: 1994,
  cor: "preto",
  placa: "ABC-6742",
};

console.log(carro);
delete carro.placa;

console.log(carro);
console.log("placa" in carro)