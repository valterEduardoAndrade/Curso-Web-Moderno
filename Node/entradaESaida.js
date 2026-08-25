const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
}else{
    process.stdout.write('Informe o seu nome: ')
    //o data seria quando voce entra com dados com o teclado
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}\n`)
        process.exit()
    })
}