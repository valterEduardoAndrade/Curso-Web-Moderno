const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados.js')

//Pra qualquer requisição ele vai passar por esse middleware e se estiver usando o padrão
//de urlenconded, ele vai passar esse middleware(urlenconded), que vai fazer um parse, que vai
//transformar em objeto
app.use(bodyParser.urlencoded({extended: true}))

//o get faz a requisição e o sendo dá a resposta
app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos())

})

app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log("Servidor está executando na porta: " + porta)
})