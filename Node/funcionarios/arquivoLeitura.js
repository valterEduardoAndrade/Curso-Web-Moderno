const fs = require('fs') //fs = file sistem(arquivo core do node que le arquivos)

const caminho = __dirname + '/arquivo.json'

//Sincrono... (cuidado com arquivos pessados, pois pode atrapalhar o event loop)
const conteudo = fs.readFileSync(caminho, 'utf-8') //encode utf-8 a partir do encode do framework
console.log(conteudo)

//Assincrono(melhor)
//nesse caso ele le um caminho, passa o caminho do arquivo e o encode e passa uma callback, como padrão
//da callback é um erro e o segundo seria o conteudo lido do arquivo

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

//Ler o arquivo JSON de uma maneira mais simples e facil

const config = require('./arquivo.json')
console.log(config.db)

//Ler uma pasta
//o __dirname é uma constante que está presente em todos os arquivos/modulos do node
//que representa o diretorio atual

fs.readdir(__dirname, (err, arquivos)=> {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

