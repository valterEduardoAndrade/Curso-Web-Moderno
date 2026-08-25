//Object.preventExtensions
//Voce pode alterar um produto que já existe pois o objeto não está congelado, o ponto é que
// que voce não consegue adicionar qualquer outro atributo por fora

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag:'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


// Object.seal
//voce não consegue adiciona ou excluir atributos do objeto, apenas modificar os valores dos atribtuos do objeto

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes
