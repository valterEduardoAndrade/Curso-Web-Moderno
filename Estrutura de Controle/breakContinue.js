const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums){ //for em relação ao indice do vetor
    if( x == 5) {
    break // break prioriza o bloco for, while ou switch
    //o break vai interomper o laçõ e ira para proxima setença de codig fora do laço
}
    console.log(`${x} = ${nums[x]}`) 

}

for(y in nums){
    if(y == 5){
        continue // for ou while
       //o continue interompe a execução atual e pula para a proxima
    }
    console.log(`${y} = ${nums[y]}`)
}

//Tipo de estutura pra não se usar, dificil manutenção

externo: // retulo 
for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo // o break em seguida do rotulo e para sinalizar para o break agir em torno de um outro lugar em vez de apenas o for, while ou switch
        console.log(`Par = ${a},${b}`)

    }
}

console.log('Fim!')