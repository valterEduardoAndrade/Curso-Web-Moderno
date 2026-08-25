

//o Math.random(), sem nenhum parametro é pre definido para que gere entre 0 e 1

function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        try { 
            con.log('temp') //erro
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
             }
        } catch(e) {
           reject(e)
        }
    })
}

//apos o catch não chega informação
//Como padrão o catch fica na ultima posição 
funcionarOuNao('Testando', 0.5)
    .then(v => `Sucesso: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp: ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim...'))