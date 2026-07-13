let aluno = {
    nome: "Igor",
    matricila: 282867,
}

for (let chave in aluno) {
    console.log(`${chave}: ${aluno[chave]}`);
}