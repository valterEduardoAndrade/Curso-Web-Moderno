function teste1(num){
    if(num >7)
        console.log(num)
        console.log('final') //esta sentença está fora do bloco do if pois se não tiver chave pode apenas uma sentença
}

teste1(6)
teste1(9)

function teste2(num){
    if(num > 7); { //cuidado com o ;, não usar com as estrutruas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)