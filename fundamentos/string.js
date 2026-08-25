const escola = "Cod3r";

console.log(escola.charAt(4)); //charArt te da o valor que está na posição de indice 4 (começando por 0)
console.log(escola.charAt(5)); //retorna um valor vazio, pois não tem 5 indices dentro da variavel
console.log(escola.charCodeAt(3)); //fala o valor do indice 3 da variavel escola com base na tabela da unicode
console.log(escola.indexOf('3')); // verifica se tem dentro do indice da variavel escola o numero 3 e mostra sua posição dentro do indice

console.log(escola.substring(1)); // Nesse caso ele imprimi o valor da variavel a partir do indice estabelecido
console.log(escola.substring(0, 3)); //Nesse caso ele imprimi tudo o que estiver no indice 0 até o 3, porem não imprimi o indice 3 

console.log('Escola'.concat(escola).concat("!")); // concatena utilizando o .concat
console.log("Escola " + escola + "!"); // concatena utilizando o +
console.log(escola.replace(3, "e")); // o replace voce indica o numero do indice que voce quer trocar e coloca o valor que voce vai acrescentar, pode trocar por um valor número, string e até mesmo uma variavel
console.log(escola.replace(/\d/, "e")) // nesse caso é um regex, ai está falando para trocar todo e qualquer valor número por 3


console.log("Ana, Maria, Pedro".split(',')); //o split junta varias string em um unico array e voce determina qual vai ser a maneira de seração delas