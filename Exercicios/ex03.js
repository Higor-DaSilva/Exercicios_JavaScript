// Peça uma frase e uma letra, e retorne quantas palavras começam com essa letra (ex: "a"). Use split(), startsWith() e filter().
var prompt = require('prompt-sync')();
  
const frase = prompt("Digite uma frase:");
const letra = prompt("Digite uma letra:");

const palavrasComLetra = frase
  .split(" ")
  .filter(palavra => palavra.startsWith(letra)); 

console.log(`número de palavras com a inicial '${letra}':`, palavrasComLetra.length);



