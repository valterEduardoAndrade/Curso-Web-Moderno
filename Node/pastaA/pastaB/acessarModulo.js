const moduloA = require('../../moduloA.js')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

//Modulo interno do node(core)

const c = require('./pastC/index.js') // também dá pra utilizar somente o ./pastC
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) //escutar na porta 8080