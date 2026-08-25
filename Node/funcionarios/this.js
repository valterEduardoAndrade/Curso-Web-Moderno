console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)



//Dentro de um função o this não aponta pra exports e nem para module.exports
function logThis(){
    console.log('Dentro da Função............')
    console.log(this === exports) // false
    console.log(this === module.exports) //false
    console.log(this === global) // true

    //Perigo isso está dentro do escopo global
    this.perigo = 'Qualquer Coisa'
}


logThis()

//Dentro de uma arrowFunction o this aponta para module.exports e não para global 