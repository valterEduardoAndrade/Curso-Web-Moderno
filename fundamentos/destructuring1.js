// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade } = pessoa //tire de dentro do objeto pessoa os valores de nome e idade
console.log(nome, idade)  // as variaveis/atributos do objeto se tornam independente, não necessariamente precisa chamar o objeto pra se ter o valor dos atributos

//nome = "Valter" // não daria certo pois é um const emcima 
//console.log(nome)

const{nome: n, idade: i} = pessoa
console.log(n, i)

const{sobrenome, bemHumorada = true} = pessoa 
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const{conta: {agencia, num}} = pessoa
console.log(agencia, num)





