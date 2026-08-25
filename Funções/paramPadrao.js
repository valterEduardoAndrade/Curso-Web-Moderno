//estrategia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}


console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

//estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1 // se for diferente de undefined ele pega o a se não ele pega o valor de 1
    b = 1 in arguments ? b : 1 // dentro do array arguments pegue o valor de indice 1 se não use o valor 1
    c = isNaN(c) ? 1 : c // essa seria a estrategia mais segura que verifica se o valor passado é um número e se não for ele passara o valor 1 se não usara o valor de c
    return a + b + c

}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))


//valor padrão do es2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))

function soma4(){}
