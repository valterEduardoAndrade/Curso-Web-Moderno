const nums = [1, 2, 3 ,4, 5]

//For com propósito (map)
//o map gera um novo array com a mesma quantidade de elementos
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)
console.log(nums)

const soma10 = e => e + 10 //Função arrow, que tem um return implicito
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) //map sucessivos
console.log(resultado)