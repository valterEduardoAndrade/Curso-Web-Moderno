//JSON é uma formado de dados e exclui toda e qualquer função do codigo quando é convertida
//Não é algo que seja executavel, algo mais textual e diferente do objeto em si
//Em JSON todos os atributos devem ser demilitados por aspas duplas("")
//jsonint.com


const obj = {a: 1, b: 2, c:3, soma(){return a + b + c}}
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a: 1, b:2, c:3}"))  - ERRO
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) - ERRO
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1.7, "b": "String", "c": true, "d": {}, "e": [] }'))

