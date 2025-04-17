// Crie uma função que recebe um array de palavras e retorna apenas as que têm mais de 5
// letras, usando filter().
var prompt = require('prompt-sync')();

let palavras = prompt("Digite as palavras:");

let letras = palavras?.split(" ").map(p => p.trim());

let maiores = letras.filter(p => p.length > 5);

console.log("Palavras com mais de 5 letras: " + maiores.join(", "));