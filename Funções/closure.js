//Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variaveis externas a função

//Context o léxico em ação

const x = "Global"

function fora(){
    const x = "Local"
    function dentro(){
        return x 
    }
    return dentro
}

const minhaFuncao = fora() // ele lê a função de dentro pois ele lembra que carrega com sigo essa função mais interna
console.log(minhaFuncao())