function tratarErroELancar(erro){
   // throw new Error('....')
   //throw 10
   //throw false
   //throw 'mensagem'
   throw{  //throw seria para lancar um erro
    nome: erro.name,
    msg: erro.message,
    date: new Date
   }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally{
        console.log("final")
    }
}

const obj = {nome: "Valter"}
imprimirNomeGritado(obj)


