const {series } = require('gulp')
const gulp  = require('gulp')
const saas  = require('gulp-saas')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {

    return gulp.src('src/saas/index.scss')
        .pipe(sass().on('error', saas.logError))
        .pipe(uglifycss({ "uglyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}
