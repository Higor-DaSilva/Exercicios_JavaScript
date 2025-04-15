// Peça um texto e retorne quantos dígitos numéricos ele contém usando split() e
// filter() com isNaN().

var prompt = require('prompt-sync')();

let texto = prompt("digite seu texto: ");

const Digitos = texto.split("").filter(caractere => !isNaN(caractere) && caractere !== " ")
  .length;

console.log(`A frase tem ${Digitos} digitos numericos.`);