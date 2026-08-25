function Pessoa(){
    this.idade = 0



setInterval(() => { // função arrow não deixa o this variar
    this.idade++
    console.log(this.idade)
}, 1000)
}
new Pessoa