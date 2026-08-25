require('./global')

//Usar com cuidado o global
console.log(global.MinhaApp.saudacao())

//Algo global que pode ser mudado em qualquer lugar(problema)
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)