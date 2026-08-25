function esperarPor(tempo = 2000){
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve()
        }, tempo)
    })
}
/*
esperarPor(2000)
    .then(() =>  console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() =>  console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() =>  console.log('Executando promise 3...'))
*/

function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

//Nesse caso seria como voce tivesse um promise e chamasse o resolve na hora
async function retornarValorRapido(){
    return 20
}

 async function executar(){
    let valor = await retornarValorRapido()


    await esperarPor(1500)
    console.log(`Async/Await ${valor}....`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}....`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}....`)

    return valor + 3

}

async function executarDeVerdade () {
  const resposta = await executar()
  console.log(resposta)
}

//Then é utilizado para sincrono e o await para Assincrono
//esse then seria pra mostrar no console o return valor + 3
executar()