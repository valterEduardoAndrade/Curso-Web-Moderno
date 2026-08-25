const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//No forEach, o primeiro parametro é o 'conteudo' do array, o segundo parametro é o indice e o terceiro seria o proprio array
//No forEach só suporta 3 parametros, caso venha um 4 será posto como undfined

aprovados.forEach(function(nome, indice, array){ //O indice sempre será passado como segundo parametro em uma função
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})
/////////////////////////////////////////////////////////////////////////////////////////

aprovados.forEach(nome => console.log(nome))

//////////////////////////////////////////////////////////////////////////////////////

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)