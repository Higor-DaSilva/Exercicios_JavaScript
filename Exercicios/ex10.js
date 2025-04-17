// Peça uma frase e retorne a palavra que mais se repete. Use split(), reduce() e um
// objeto como contador.
var prompt = require('prompt-sync')();

const frase = prompt("Digite uma frase:"); 

const palavras = frase.split(" "); 

const contador = palavras.reduce((acc, palavra) => {
  acc[palavra] = (acc[palavra] || 0) + 1; 
  return acc;
}, {});

let palavraMaisRepetida = "";
let maxContagem = 0;

for (const palavra in contador) {
  if (contador[palavra] > maxContagem) {
    maxContagem = contador[palavra];
    palavraMaisRepetida = palavra;
  }
}

console.log(`A palavra que mais se repete é: "${palavraMaisRepetida}" (${maxContagem} vezes)`);
