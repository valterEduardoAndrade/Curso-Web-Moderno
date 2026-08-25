//par nome/valor
const saudacao = "Opa" //contexto lexico 1(local fisico do seu codigo aonde aquilo foi declarado)

function exec(){
    const saudacao = "Falaa" //contexto lexico 2
    return saudacao //mesmo que ele tenha o mesmo nome da outra variavel criada acima, são contextos/escopo diferentes(priorizando o contexto/escopo mais perto)
}


//Objetos são grupós alinhados de pares nome/valor

const cliente ={
    nome: "Pedro", 
    idade: 32,
    peso: 90,
    endereco: {
        logadoura: "Rua Muito legal",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log(cliente.endereco)



//Não se pode colocar o mesmo valro dentro do mesmo contexto lexico

