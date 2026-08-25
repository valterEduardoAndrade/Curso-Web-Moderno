//com promise...
const http = require('http')


const getTurma = letra => {
    const url =  `http://files.cod3r.com.br/curso-js/turma${letra}.json`
   return new Promise((resolve, reject) => {
     http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                 } catch(e){
                    reject(e)
                 }
            })
        })
   })
}

/*let nomes = []
getTurma('A').then(alunos => {
  nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
  //console.log(nomes)

  getTurma('B').then(alunos => {
  nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
    //console.log(nomes)
    
getTurma('C').then(alunos => {
    nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
    console.log(nomes)
})
})
})
*/

//o all espera todas as promises serem resolvidas ou rejeitadas
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas)) //transforma tudo em um unico array
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))


getTurma('D').catch(e => console.log(e.message))

    //.then(x => console.log(x)) //esse x seria uma variavel que está recebendo os resultados