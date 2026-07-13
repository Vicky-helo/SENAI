let compras = [];

compras.push("arroz");
compras.push("feijão");
compras.push("macarrão");
compras.push("leite");
compras.push("açúcar");

console.log("Lista de compras:");
compras.forEach(function(item, indice) {
    console.log((indice + 1) + " - " + item);
});

console.log("Tem arroz?", compras.includes("arroz"));

let removido = compras.pop();
console.log("Item removido:", removido);

console.log("Lista atualizada:");
compras.forEach(function(item, indice) {
    console.log((indice + 1) + " - " + item);
});

console.log("Total de itens:", compras.length);