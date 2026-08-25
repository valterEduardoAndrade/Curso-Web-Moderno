const nome = 'Rebeca';
const concatenacao = "olá" + nome + "!";
const template = ` 
    
    Olá 
    ${nome}!` 
    //Uma melhor maneira de voce juntar strings usando o metode de template string
         
console.log(concatenacao, template)

//expressoes 
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);