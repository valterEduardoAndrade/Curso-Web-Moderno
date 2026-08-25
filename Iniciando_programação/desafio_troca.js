let a = 7;
let b = 94;
let c;

/*c = a; // atribuo o valor 7 a variavel c 
a = b; // atribuo o valor 94 a variavel a 
b = c;  // atribuo o valor 7 a variavel b 
*/

[a, b] = [b, a]; // troca do valor de variavel de uma maneira mais simples

console.log(a);
console.log(b);