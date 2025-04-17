// Crie uma função que recebe um número e retorna formatado em real (R$), com duas
// casas decimais e vírgula no lugar do ponto. Ex: 10.5 → R$ 10,50. Use toFixed() e
// replace().

var prompt = require('prompt-sync')();

const valor = parseFloat(prompt("Digite o valor: "));
console.log("Preço :", formatarPreco(valor));

function formatarPreco(valor) {

  const preco = "R$ " + valor.toFixed(2).replace(".", ",");
  return preco;
}