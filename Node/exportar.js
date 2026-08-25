console.log(module.exports)
console.log(module.exports === this) // true
console.log(module.exports === exports)

//o this e o exports são somente duas referencias que apontam para o mesmo obejto
this.a = 1
exports.b = 2
module.exports.c = 3


exports = null
console.log(module.exports)

//Isso não sera retornado
exports = {
    nome: 'teste'
}

console.log(module.exports)

//Forma correta
module.exports = {public: true}

//npm init -y (para criar o package.json, com todas as perguntas respondidas em sim)
//npm i -- save + (nome da depedencia), com o --save ele já cria automaticamente a documentação da depedencia
//dentro do package.json
//dentro do package.json, na parte da versão se estiver com um ^ ao lado da versão
//simboliza que voce consegue alterar a versão do "miner", que seria o número do meio
// se o simbolo for ~(simbolo de aproximação), significa que voce consegue "atualizar" somente o fix(que seria o ultimo número)
// dentro da versão de uma depedencia o primeiro número é o "manager" / "miner" / "fix"
// se voce não coloca nada ao lado da versão da depedencia, ele pegará apenas a versão estabelecida
//com o --save-dev, a depedencia se torna apenas para desenvolvimento, não é necessaria durante a produção
//o -e no final do comando npm, significa que voce quer exatamente essa versão

//npm i --save-dev axios@0.17.1 -E

//npm run (nome atribuito ao script), roda quando o script não é previamente entendido pela linguagem
//o start e o test não precisa do run