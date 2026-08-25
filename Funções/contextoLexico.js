//a função procura a partir do local em que ela foi definida e não em que ela foi chamada

const valor = "Global"

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = "Local"
    minhaFuncao()
}

exec()