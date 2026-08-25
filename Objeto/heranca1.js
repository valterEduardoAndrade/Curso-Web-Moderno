const ferrari = {
    modelo: 'F40',
    velMax: 342
}

const volvo = {
    modelo: 'V40',
    velMax: 200
} 

console.log(ferrari.prototype)
console.log(ferrari.__proto__) // __proto__: maneira de acessar o prototipo de um objeto
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) //Object.protype está presente apenas em função

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
  
//Cadeia de prototipos