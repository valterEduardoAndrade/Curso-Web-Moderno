//Função em JS é First-Class Object(Citizens)
//Higher-order function
//Função em JS é um dado

//criar de forma literal
function fun1() { }

// Armazenar em uma variavel
const fun2 = function () {}

//Armazenar em um array
const array = [function(a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto

const obj = {}
obj.falar = function () {return "Opa"}
console.log(obj.falar())

//Passar uma função como parametro para outra função
function run(fun){
    fun() //sem o () você não invoca a função
}

run(function () {console.log("Executando...")})

// Um função pode retornar/conter uma função
function soma(a, b ){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)
