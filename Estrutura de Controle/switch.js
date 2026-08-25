const imprimirResultado = function(nota){
    switch(Math.floor(nota)){ //Switch não retorna verdadeiro ou falso, a expressão é um valor
        case 10: //caso o valor que eu recebi por parametro seja 10 
        case 9:
            console.log("Quadro de Honra")
            break  //se não tiver o break quando ele achar o valor certo do case ele ira executar todos os de baixo
        case 8: 
        case 7:
            console.log("Aprovado")
            break
        case 6:
        case 5: 
        case 4:
            console.log("Recuperação")
            break
        case 3:
        case 2: 
        case 1: 
        case 0:
            console.log("Reprovado")
            break
        default: // o default voce pode colocar ele em qualquer parte do switch porem se colocar nas primeiras linhas e tiver conteudo embaixo precisa ter o break
            console.log("Nota inválida") //caso ele não tenha entrado em nenhum case
    }
}

imprimirResultado(2)
// imprimirResultado(5)
// imprimirResultado(-1)  CNTRL + /(;)
// imprimirResultado(8.9)
// imprimirResultado(6.55)
// imprimirResultado(2.3)