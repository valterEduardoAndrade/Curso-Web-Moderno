//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
//números de strings.
///Exemplos:
//maiorOuIgual(0, 0) // retornará true
//maiorOuIgual(0, "0") // retornará false
//maiorOuIgual(5, 1) // retornará true


function maiorOuIgual(num1, num2){ 
    

    if(num1 > num2 || num1 == num2){
        return true
    } else{
        return false
    }
} 


function maiorOuIgual(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
}



