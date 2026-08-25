const {series} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function TransformacaoJS(cb) {
    return gulp.src('src/**/*.js')
    .pipe(babel({
        comments: false, //nesse caso não queremos os arquivos de comentarios
        presets: ["env"] //busca a versão mais atual do javascript
    }))
    .pipe(uglify()) //unifica os espaços em brancoos e encurta o arquivo
    .on('error', err => console.log(err))
    .pipe(concat('codigo.min.js')) //nesse caso ele concatena os pipes passados anteriormente e o .min é de minificado
    .pipe(gulp.dest('build'))
}

function fim(cb){
    console.log("Fim!!!!")
    return cb()
}

exports.default = series(TransformacaoJS, fim)
