function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min  //random te da um valor entre 0 e 1 // voce mostra o começo e o fim do seu parametro e dps soma tudo isso para deslocar o valor obitido pelo minimo
    return Math.floor(valor)
}

let opcao // somente iniciada a variavel, sem valor inicial

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log("Opção escolhida foi: " + opcao)
}while (opcao != -1){

}

console.log("Acabou")
