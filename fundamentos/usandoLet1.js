var numero = 1;

//Mesmo que não seja uma função, o let ele vai ter o escopo apenas anquele bloco, ou seja , ele vai estar visivel apenas dentro do bloco
//Mesmo que minha variavel var seja posta como let, o resultado não mudará pois a prioridade é sempre daquele que estiver mais perto, num escopo mais reduzido
{
    let numero = 2;
    console.log("Dentro = ", numero )
}
console.log("fora = ", numero)