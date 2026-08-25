function Carro(velocidadeMaxima = 200, delta = 5){
    //Atributo privado
    let velocidadeAtual = 0

    //Metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else{
        velocidadeAtual = velocidadeMaxima
    }
}

    //metodo publico 
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro //instancio uma constante chamada uno
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20) //instancio uma variavel chamada ferrari e coloco a velocidade maxima de 350 com o delta a 5
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)


