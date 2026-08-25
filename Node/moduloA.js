//Em node um arquivo representa um modulo
//Dois padrões de modulo muito conhecido no node: CommunsJS e o ImportExport

//tanto o this, quanto o exports e o module.exports são a mesma coisa

console.log(this)

this.ola = 'Fala Pessoal' //this é um objeto
exports.BemVindo = 'Bem vindo ao node!' //exports é um objeto
module.exports.ateLogo = 'Até o próximo exemplo'

console.log(typeof this === typeof exports) 