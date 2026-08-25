let dobro = function(a){
    return 2 * a
}

dobro = (a) => { // voce troca o function pela seta => (uma função arrow é sempre uma função anonima, se voce quiser chamar ela dps precisa chamar nome da variavel)
    return 2 * a
}

dobro = a => 2 * a // return está implicito
// quando voce tiver apenas um parametro voce podetirar os ()
console.log(dobro(Math.PI))

let ola = function(){
    return "Olá"
}

ola = () => "Olá"
ola = _ => "Olá" // possui um parametro _
console.log(ola())


