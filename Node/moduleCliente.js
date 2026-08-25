const moduloA = require('./moduloA.js') //apesar de não precisar, deve-se colocar .js(ou qualquer que seja a lingaguem, como uma boa pratica)
const moduloB = require('./moduloB.js')
const sla = require('../Array/array') //forma para acessar algo fora da pasta

console.log(moduloA.ola)
console.log(moduloA.BemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)



//npm é o gerenciador de pacotes do NODE, Ele é responsavel por baixar uma biblioteca de terceiro
//para instalar algum com o npm dentro do terminal é so utilizar npm + i(de installer) + (nome da biblioteca
