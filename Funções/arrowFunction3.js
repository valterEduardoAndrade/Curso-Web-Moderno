let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)
comparaComThis(this) //nesse caso o this não é o this

const obj = {}
    comparaComThis = comparaComThis.bind(obj) // bind faz o this se tornar global no contexto do objeto
  comparaComThis(global)
  comparaComThis(obj)

  //Cada arquivo do node representa um modulo, e se voce escreveu um modulo dentro de um arquivo ele foi escrito foi escrito no contexto
  // lexico do modulo, o dono seria o proprio modulo

  let comparaComThisArrow = param => console.log(this === param)
  comparaComThisArrow(global)
  comparaComThisArrow(module.exports)
  comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)





//o this em uma função arrow é do contexto em que ela foi criada, sem variação
//mesmo se o this tiver o bind e forçar uma mudança de contexto ele não muda

