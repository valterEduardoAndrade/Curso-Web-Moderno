const peso1 = 1.0;
const peso2 = Number('2.0');
console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //verifica se o valor é um número inteiro

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);


console.log(media.toFixed(2)); //toFixed controla a quantidade de casas decimais(nesse caso imprimi 2 casas decimais)
console.log(media.toString(2)); // toString converte em valor binario, decimal, octal e hexadecimal também, dependendo do valor que estiver no parantese
console.log(media.toPrecision(1)) // toPrecision arrendonda o numero 
console.log(media.toExponential(1)); //eleva o numero exponencialmente
console.log(media.toLocaleString(1)); // com virugla
console.log(typeof Number); //Esse number seria uma função do proprio js 