const pessoa = {
    saudacao: "Bom dia",
    falar(){
        console.log(this.saudacao) // voce está acessando o atributo de um objeto utilizando this(sem o this não funciona)

    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e POO

const falarDePessoa = pessoa.falar.bind(pessoa) // o Bind é o metodo responsavel por amarrar um determinado objeto para que ele seja o dono da execução 
//o bind ele amarra uma função para que aponte sempre para um determinado componente
falarDePessoa()

