const prod1 = {} // um par de chaves representa um object
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4998.90
prod1["Desconto Legal"] = 0.40 //Evitar atributos com espaço

console.log(prod1)

//Segunda forma de declarar um objeto

const prod2 = {
    nome: "Camisa Polo",
    preco:  79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

//Exemplo de JSON (JAVA SCRIPT OBJECT NOTACION), JSON é diferente de objeto, JSON é um formato textual

'{"nome": "Camisa Polo", "preco": 79.90}'





