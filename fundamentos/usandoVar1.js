//Escopo = Escopo seria até onde a variavel seria visivel
//ex: em algumas linguagens se voce determina uma variavel dentro de um bloco ela fica visivel apenas no bloco e não fora dele
//criando uma variavel com o var ela fica visivel fora do escopo com exeção das funções
{
    {
        {
            {
                var sera = 'Sera???'
            }
        }
    }
}
console.log(sera)

//Quando voce define uma variavel dentro de uma função o escopo dessa variavel é dentro da função apenas, ela não estára visivel fora



function teste(){
    var local = 123
}

teste()
console.log(local)

