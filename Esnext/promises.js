function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //promise aceita apenas um parametro
            //reject(frase)
        }, segundos * 1000)
    })
}

//A Função .then ela é chamada quando voce resolve o promise 
//Pra tratar um erro no Promise é utilizando a função .catch
falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))