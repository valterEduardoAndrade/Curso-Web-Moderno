const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]


function igualOuMario(p){
    return p.preco >= 500

} 

function fragilNao(p){
    return p.fragil == true
}

console.log(produtos.filter( p => p.preco >= 500).filter( p => p.fragil))





//No filter ele cria um novo array assim como o map, porem o array normalmente é menor ou de tamanho igual

//console.log(produtos.filter(function(p) { //p que representa cada produto
    //return p.preco > 10
    //return false (nenhum elemento é passado para o novo array)
    /*if(p.preco > 500 && p.fragil == true){
        return p
    }*/
//}))
