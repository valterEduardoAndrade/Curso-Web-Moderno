const fabricantes = ["Mercedes", "Audio", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //o foreach sempre que acha algo dentro do vetor ele mostra
fabricantes.forEach(fabricante => console.log(fabricante))


//o callback nda mais é do que voce passar uma função e essa função ser chamada
//em um determinado evento(um evento seria um loop, que quando encontra um novo elemento ele dispara a função)
//o evento nesse caso seria para cada elemento rodado no vetor, ele retorna o valor e o indice