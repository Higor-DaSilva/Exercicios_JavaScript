// Crie uma função que remove espaços repetidos de uma frase (ex:"Olá mundo bonito"
//     → "Olá mundo bonito"), usando split(), filter() e join().
var prompt = require('prompt-sync')();

const frase = "  Esta   frase    tem   espaços   extras   ";

const fraseSemDuplicados = frase.split(" ").filter(palavra => palavra !== "").join(" "); 

console.log(fraseSemDuplicados); 
  