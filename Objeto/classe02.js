class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}


class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome) //pra instanciar a função construtora da super classe(avo)
        this.profissao = profissao
    }
}


class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)