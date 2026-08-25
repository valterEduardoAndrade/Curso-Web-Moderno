//o forOf intera apartir de valores
for(let letra of "Cod3r"){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']


//forIn (percorre apartir dos indices)
for(let i in assuntosEcma){
    console.log(i)
}

//forOff para pegar apenas o conteudo
for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([  
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado:false}]
 ])

 for (let assunto of assuntosMap){
    console.log(assunto)
 }

 //Somente a chave
 for(let chave of assuntosMap.keys()){
    console.log(chave)
 }
//Somente o valor
 for(let valor of assuntosMap.values()){
    console.log(valor)
 }

 //Destructuring da chave e do vl, já que a resposta é em array
 for(let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
 }


 const s = new Set(['a', 'b', 'c'])

 for(let letra of s){
    console.log(letra)
 }

 //OBS: São formas validas, porem sempre optar pelos for com propositos(filter, map e reduce)