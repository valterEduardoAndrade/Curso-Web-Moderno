//Quando voce trabalha com tipos primitivos em java script voce faz uma copia por valor, voce atribui um valor para aquele variavel ou constante
//e cada variavel tem seu proprio valor independente 

//Quando voce trabalha com objectos em java script é passado por referencia, ele passa a referencia do endereço da memoria para uma outra
// variavel ou constante e ambas terão o mesmo valor que está naquele endereço de memoria


let valor// não inicializada
console.log(valor);

valor = null //ausencia de valor
console.log(valor);
// console.log(valor.toString()) Erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evite atribuir indefined
console.log(!!produto.preco)
//delete produto.preco 
console.log(produto)


produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)

