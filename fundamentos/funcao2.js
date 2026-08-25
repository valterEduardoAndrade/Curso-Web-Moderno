//Armazenando uma função em uma variavel

const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)


//Armazenando uma funcao arrow em uma variavel
 
const soma = (a, b) => { // a setinha substitui o valor function
        return a + b
}

console.log(soma(2, 3))

// retorno implicito

const subtracao = (a, b) => a - b // quando não se tem o par de {} quer dizer que voce tem uma função que executara apenas uma linha
console.log(subtracao(5, 3))


const imprimir2 = a => console.log(a)
imprimir2("Legal")

