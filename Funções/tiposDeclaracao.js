//Uma das vantagens do function declaration é voce poder chamar a função antes dela ser declarada
//pois o intepretador do js primeiro ele carrega/lê as funções do arquivo e dps começa executar o codigo
//Não funciona com o function expression e named function expression, dá erro
console.log(soma(3, 4))
console.log(sub(3, 4))

//function declaration(tradicional)
function soma(x, y){
    return x + y
}





//function expression(anonima)
const sub= function(x, y){
    return x - y
}







//named function expression(pouco usada)
// uma das vantagens seria a facilidade de se encontrar quaso esteja debugando ou gerando algum erro
const mult = function mult(x,y){
    return x * y
}



