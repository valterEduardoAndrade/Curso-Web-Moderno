//Um array em JS é um Objeto
console.log(typeof Array)
console.log(typeof new Array)
console.log(typeof []) // Um array literal

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])


aprovados[3] = 'Paulo'
aprovados.push('Abia') //adicionar um nome elemento
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)

console.log(aprovados)

aprovados.sort() //Essa função sort ela ordena o array em ordem alfabetica
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') //Serve para adicionar e remover elementos ao mesmo tempo ou então invidualmente
//no splice, voce passa a 'altura' do indice que voce quer remover, e a quantidade de indices, contando a partir do primeiro
//pra voce remover e adicionar, voce passa a 'altura' dos indices que voce quer remover, a quantidade de indices e depois os novos elementos a serem adicionados
console.log(aprovados)
