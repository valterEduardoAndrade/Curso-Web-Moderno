// pessoa -> 123(endereço de memoria) ->{...}

const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

//a constante pessoa está direcionada a um endereço de memoria, voce consegue mudar o conteudo desse endereço aponta, mas não consegue mudar que a constante
//pessoa aponte para um outro endereço de memoria, pois ele é uma constante 

Object.freeze(pessoa) // metodo de object em que voce congela o objeto pessoa(voce não consegue mais mecher no objeto)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Pedro'}) //maneira de deixar um obj constante
console.log(pessoaConstante)

