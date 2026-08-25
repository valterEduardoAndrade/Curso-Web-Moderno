//O node faz cache a partir de um require, nesse caso já como o require é o mesmo
//o que for feito no contadorA será automaticamente atribuito ao contadorB também
const contadorA = require('./instanciaUnica.js')
const contadorB = require('./instanciaUnica.js')

//Nesse caso ele retorna um função e tambem um objeto que está presente de instanciaNova.js
//Nesse caso são novas instancias criadas a partir de uma função factory
const contadorC = require('./instanciaNova.js')()
const contadorD = require('./instanciaNova.js')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)


