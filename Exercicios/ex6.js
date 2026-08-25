/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos */

function Montante(capitalInicial = 5000, taxaDeJuros, tempoDeAplicacao = 6){
    taxaDeJuros = capitalInicial * 0.06 * tempoDeAplicacao 
     Montante = capitalInicial + taxaDeJuros
     return Montante

}

function JurosCompostos(taxaDeJuros = 0.05, capitalInicial = 6000, tempoDeAplicacao = 7){

    montante = capitalInicial * Math.pow(1 + taxaDeJuros, tempoDeAplicacao);
    return Montante.toFixed(2)
}

console.log(Montante())
console.log(JurosCompostos())