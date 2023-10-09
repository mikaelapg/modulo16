const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

//compilar SASS
gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

//comprimir imagens
gulp.task('images', function () {
    return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

//minificar JavaScript
gulp.task('javascript', function () {
    return gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

//executa todas as tarefas
gulp.task('default', gulp.series('sass', 'images', 'javascript'));

//executa tarefas automaticamente
gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('src/images/*', gulp.series('images'));
    gulp.watch('src/js/**/*.js', gulp.series('javascript'));
});
