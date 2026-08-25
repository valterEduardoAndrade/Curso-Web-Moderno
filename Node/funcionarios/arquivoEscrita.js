const fs = require('fs')

const produto = {
    nome:'Celular',
    preco: 1249.99,
    desconto: 0.15
}

//o JSON.stringify transforma o objeto em um texto json
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo salvo!') //Caso o err estiver vazio, sera tido como falso e imprimirá o segundo operando
    //que nesse caso seria a mensagem de "arquivo salvo" 
})