
const primeiroElemento = arrayOuString => arrayOuString[0]
const primeiraLetra = string => string[0]
const converterParaMinusculo = letra => letra.toLowerCase()

//o  then pode ser encadeado
//o resultado de um metodo then é passado para o proximo metodo then

new Promise(function(resolve){
   resolve(['Ana', 'Bia', 'Carlos', 'Daniel']) //Uma promise gera um unico valor
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(converterParaMinusculo)
    //.then(v => console.log(v))
    .then(console.log) //o then recebe somente um unico parametro 

