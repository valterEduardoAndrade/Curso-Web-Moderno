function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}


const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())


const carro = {preco: 49990, desc: 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))


console.log(getPreco.call(carro, 0.17, '$'))  // no call o primeiro parametro é sempre o contexto e depois vem os dados
console.log(getPreco.apply(carro, [0.17, '$'])) // com o apply é parecido com o call, só que voce chama os parametros dos dados dentro de um array

