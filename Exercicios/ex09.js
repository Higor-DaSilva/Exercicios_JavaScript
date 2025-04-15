// Crie uma função que verifica se uma palavra é palíndroma usando split(), reverse()
// e join().
var prompt = require('prompt-sync')();

// let palavra = prompt("DIgite a palvra ou frase palímdroma: ");

function ehPalindromo(palavra){ 
palavra.toLowerCase().replace(/\s/g, ' ');

let palavrainvertida  = palavra.split(" ").reverse().join(" ");

return palavra === palavrainvertida;
}

console.log(ehPalindromo("ovo"));

// if(palavra == palavrainvertida)
// {
//     console.log("palavra palímdroma");
    
// }else{
//     console.log("Não é palímdroma");
    
// }
