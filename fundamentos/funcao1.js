//Funcao sem retorno
function imprimirSoma(a, b ){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6, 7, 8) //ele soma os dois primeiros e ignora o resto
imprimirSoma()


// Funcao com retorno
function soma(a, b = 1){
        return a + b
}

//por ser return precisa-se colocar dentro de um console pois ele está retornando um valor

soma(2, 3)
console.log(soma(2,3))
console.log(soma(2))
console.log(soma())

