const valores = [1, 2 , 3 , 4]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // ver o tamanho do array

valores.push({id: 3}, false, null, "teste") //push é para adicionar um valor no array, por ser fracamente tipado ele aceita qualquer tipo de valor
console.log(valores)


console.log(valores.pop()) //ele monstra o ultimo valor do array e retira ele 
delete valores[0] //retira o valor do indice indicado
console.log(valores)

console.log(typeof valores)  // em js um array é do tipo object