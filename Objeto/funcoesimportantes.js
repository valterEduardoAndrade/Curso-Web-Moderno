const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //pega as chaves(caracteristicas) de um objeto
console.log(Object.values(pessoa)) //pega todos os valores do objeto    
console.log(Object.entries(pessoa)) //ele te da arrays

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //fala que a propriedade será listada
    writable: false, //a propriedade não podera ser alterada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign(ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2 }
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) //o assign concatena todos os atributos passados depois do primeiro parametro

Object.freeze(obj)
obj.c = 1234
console.log(obj)




