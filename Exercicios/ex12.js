// Peça uma lista de nomes separados por vírgula e sorteie um aleatoriamente usando
// split() e Math.random().

var prompt = require('prompt-sync')();

let nomesInput = prompt("Digite vários nomes (separando por vírgula): ");
let nomes = nomesInput.split(",").map(nome => nome.trim());

function sortearNome() {
    let indiceAleatorio = Math.floor(Math.random() * nomes.length);
    return nomes[indiceAleatorio];
}

const nomeSorteado = sortearNome();
console.log("O nome sorteado foi:", nomeSorteado);