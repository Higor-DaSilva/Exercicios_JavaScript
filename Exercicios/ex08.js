// Crie uma função que recebe um texto e remove todos os caracteres que não são letras
// ou números, usando 

const texto = "Higor Silva @! 77653 :)";
const limpo = texto.replace(/[^a-zA-Z0-9]/g, "");

console.log(limpo);

