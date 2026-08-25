//tagged templates - processar o template dentro de uma função


function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Gui'
const situação = 'Aprovado'


//nesse caso ele passa as partes, depois os valores e por fim o return
console.log(tag `${aluno} está ${situação}`)
