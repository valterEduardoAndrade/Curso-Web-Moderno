function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min] //nesse caso a logica voce pensa "o que é minimo vira maximo, e o que é maximo vira minimo"
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //o floor arrendona o valor pra baixo

}

console.log(rand([50, 40])) //nesse caso primeiro voce passa o maximo e depois o minimo e o programa faz a troca pois o if verifica se o minimo é maior que o maximo
console.log(rand([992])) //voce pode passar apenas 1 parametro pois ele entrará como minimo e o maximo ele já foi passado lá emcima como 1000
console.log(rand([, 10])) //nesse caso voce passa o segundo parametro, pois ele já sabe que o valor minimo é 0, nesse caso voce está passando o valor maximo
console.log(rand([])) // voce também pode passar um valor vazio pois o programa assumira o valor posto lá emcima de 0 a 1000
console.log(rand()) // aqui dara um problema pois voce está tentando destruturar algo nulo ou undefined(nesse caso seria undefined)

