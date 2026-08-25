const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
//Sem usar o callback
const notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//com callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7 //esse return vai retornar verdadeiro ou falso, se a nota for maior que 7 será falso e não constará no array final, por conta do filter
}) //filter é um função que vai filtrar um array em cima de algum criterio

console.log(notasBaixas2)

//callback com function arrow
const notasMenorQue7 = nota => nota < 7
const notasbaixas3 = notas.filter(notasMenorQue7)
console.log(notasbaixas3)




