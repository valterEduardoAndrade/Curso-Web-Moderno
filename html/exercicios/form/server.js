
//npm I --save express@4.6.3 body-parser@1.18.2 -E

//Caso estejaa sendo usado o metodo get, você só conseguira visualizar os dados enviados
// imprimindo o query e não o body

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuario Incluido</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuario Alterado</h1>')
})



app.listen(3003)