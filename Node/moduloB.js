
//Tudo aquilo que é criado dentro do modulo só ficará visivel para algum outro modulo caso voce use o module.exports
// de resto qualquer variavel, objeto, atributo e etc.. ficará somente dentro do proprio modulo

let a = 2

module.exports = { //somento o exports, sem o module. o codigo não funcionará
    bomDia: 'Bom dia',
    boaNoite(){
        return 'Boa noite'
    }
}