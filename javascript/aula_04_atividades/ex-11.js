let filme = {
  titulo: "365 Dias",
  diretor: "Barbara Białowąs e Tomasz Mandes",
  ano: 2020,
  genero: "Suspense erótico"
}

for(let chave in filme) {
  console.log(`${chave}: ${filme[chave]}`)
}