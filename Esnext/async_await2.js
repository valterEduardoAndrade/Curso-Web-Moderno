const { reject } = require("lodash")


function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max){
       [max, min] = [min, max]
    }


    //o metodo includes é um metodo de arrays que verifica se um determinado valor
    // que nesse caso seria o numero aleatorio existe dentro do array 
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('Número repetido!')
        }else{
            resolve(aleatorio)
        }
        resolve(aleatorio)
    })
}

//Nesse caso o _, está indicando que a variavel de interação não sera usada dentro do loop
//e ele percorrera um array que até então estava vazio, mas foi preenchido com o fill todas as
//posições com undefined.
//Em resumo, a linha de código cria um array com a quantidade de posições desejada (qtdeNumeros), preenche-o
// para torná-lo iterável e, em seguida, usa um loop for...of para executar um bloco de código qtdeNumeros vezes.

//o async await torna o codigo assincrono, que meio que permite uma tarefa
//ser executada em segundo plano
//o await precisa estar ao lado da função que retornará uma promise

async function gerarMegaSena(qtdeNumeros, tentativas = 1){ //Quando voce retorna uma valor você resolve a promise

    try{
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
    }
        return numeros
    } catch(e){
        if(tentativas > 10){
            throw 'Que chato'
        }else  { 
        gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)