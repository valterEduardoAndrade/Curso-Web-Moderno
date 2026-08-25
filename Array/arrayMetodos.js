const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona o elemento no indice 0
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // a partir do indice 3 será removido 1 indice
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Cria um novo array apartir do indice passado como parametro
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // voce determina os elementos do array que voce quer pegar como parametro
//contando a partir do indice 1 e indo até o 4(porem o 4 não entrará na lista)
console.log(algunsPilotos2)
