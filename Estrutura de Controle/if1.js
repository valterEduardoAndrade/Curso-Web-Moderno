function soBoaNoitica(nota){
    if (nota >= 7){
        console.log("Aprovado com " + nota)
    }
}

soBoaNoitica(8.1)
soBoaNoitica(6.1)


function seForVerdadeEuFalo(valor){
    if (valor) {
        console.log("É verdade... " + valor)
    }
}



seForVerdadeEuFalo() //falso, não imprimi pois é undefined e undefined é falso
seForVerdadeEuFalo(null) // falso, não imprimi pois null é falso
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo("?")
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})
