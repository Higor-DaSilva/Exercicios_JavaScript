// Crie uma função que recebe um texto e remove todos os caracteres que não são letras
// ou números, usando 

const text = "Higor Silva @! 77653 :)";
const carac = text.replace(/[^a-zA-Z0-9]/g, "");

console.log(carac);

