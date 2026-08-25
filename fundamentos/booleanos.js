let isAtivo = false;
console.log(isAtivo)

isAtivo = true;
console.log(isAtivo);


isAtivo = 1;
console.log(!!isAtivo); // com duas barras ele transforma o número em verdadeiro ou falso

console.log("Os verdadeiros....");
console.log(!!3);
console.log(!!-1);
console.log(!!" "); //vazio
console.log(!![]) //array
console.log(!!{}) //objeto 
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("--------------------------------")

console.log("Os falsos...")
console.log(!!0)
console.log(!!"") // uma string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("--------------------------------")

console.log("Pra finalizar")
console.log(!!("" || null || 0 || " "))

let nome = ""
console.log(nome || "Desconhecido") //O primeiro valor de nome deu falso pois não tem nenhum conteudo dentro é uma string vazia, então ele retorna o segundo valor que é" Desconhecido"