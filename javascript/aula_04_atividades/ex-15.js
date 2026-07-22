let biblioteca = [
  {titulo: "Haunting Adeline", autor: "H.D. Carlton", paginas: 624, lido: true},
  {titulo: "Haunting Adeline", autor: "H.D. Carlton", paginas: 656, lido: true},
  {titulo: "Corrupt", autor: "Penelope Douglas", paginas: 480, lido: false},
  {titulo: "Does It Hurt?", autor: "H.D. Carlton", paginas: 432, lido: true},
  {titulo: "Devil's Night", autor: "Penelope Douglas", paginas: 512, lido: false}
];

console.log("Catalogo de livros:")
biblioteca.forEach(function(livro) {
  console.log(`"${livro.titulo}" por ${livro.autor}`)
})

console.log("Propriedades do primeiro livro:", Object.keys(biblioteca[0]))

console.log("Detalhes do primeiro livro:")
for(let chave in biblioteca[0]) {
  console.log(`${chave}: ${biblioteca[0][chave]}`)
}
