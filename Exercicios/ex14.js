// Receba uma data no formato "2025-04-15" e transforme para "15/04/2025" usando
// split() e reverse().
var prompt = require('prompt-sync')();

let data = prompt("Digit a data de hoje(ex ano-mes-dia): ")

let date = data.split("-");
let reverso = date.reverse();
let correta = reverso.join("/");

console.log("Dia de hoje: " + correta);

