// Crie uma função que verifica se um texto contém "@" e "." , retornando se é um e-mail
// válido ou inválido. Use includes() e indexOf().

var prompt = require('prompt-sync')();

let email = prompt("Digite seu email: ");


function info(){
    let arr = email.indexOf("@");
    let pon = email.indexOf(".");

    if (arr === -1 || pon === -1 || pon < arr) {
        return "Email inválido😢";
      } else {
        return "Email válido👍";
      }

}

console.log(info(email));