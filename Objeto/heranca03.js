const pai = {nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) //automaticamente ele já deixa o pai como prototipo de filha
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{
    nome: {value: 'Bia', writable: false, enumerable: true} //writable não deixa o valor ser mudado, valor final

})

console.log(filha2.nome)
filha2.nome = 'Carla'

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)



console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

//Forma para saber se um determinado atributo é do objeto ou veio por Herança

for(let key in filha2){ 
    filha2.hasOwnProperty(key) ? //pergunta se filha2 é a dona das "propriedas/atributos" do seu proprio objeto ou se foi herdado
    console.log(key) : console.log(`Por herança: ${key}`)
}