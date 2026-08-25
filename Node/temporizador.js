const schedule = require('node-schedule')
//de quantos em quanto segundos será disparado / o horario / o dia do mes / o mes/ e o dia da semana
const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 2', function(){
    console.log('Executando tarefa1"', new Date().getSeconds())
})


//o .cancel é uma forma de cancelar um temporizador criado a partir de um schedule
setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa1!')
},20000) // o 20000 seria 20mil mile segundos

//setImmediate
//setInterval

//regra recorrente
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 17
regra.second = 30


const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log('Executando tarefa 2', new Date().getSeconds())
})