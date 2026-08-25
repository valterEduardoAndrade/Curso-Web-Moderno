function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min  //random te da um valor entre 0 e 1 // voce mostra o começo e o fim do seu parametro e dps soma tudo isso para deslocar o valor obitido pelo minimo
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log("Opção escolhida foi: " + opcao)
}

console.log("Acabou")