let nome = "Ana";
let idade = 20;
let altura = 1.65;
let peso = 60;

let imc = peso / (altura * altura);

let maiorDeIdade = idade >= 18;
let imcAbaixo25 = imc < 25;
let nomeMaior3 = nome.length > 3;

console.log(`Nome: ${nome}`);
console.log(`IMC: ${imc.toFixed(2)}`);
console.log(`É maior de idade? ${maiorDeIdade}`);
console.log(`O IMC está abaixo de 25? ${imcAbaixo25}`);
console.log(`O nome tem mais de 3 letras? ${nomeMaior3}`);