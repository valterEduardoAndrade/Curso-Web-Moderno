/*class Pessoa{
    constructor(nome){
        this.nome = nome // essa variavel passou a ser publica
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()*/


/*function Pessoa(nome = "João"){

    this.falar = function(){
        return{
             falar: console.log(`Meu nome é ${nome}`)
        }

        this.getFalar = function(){
            return falar()
        }
    }

}
 
const pessoa1 = new Pessoa
pessoa1.falar()
//console.log(pessoa1.getFalar())

const pessoa2 = new Pessoa("Pedro")
pessoa2.falar() */

function Pessoa(nome){
    this.nome = nome // essa variavel passou a ser publica
    


    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

