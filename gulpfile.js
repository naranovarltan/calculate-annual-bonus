const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

gulp.task('js', () => {
    return gulp.src('script.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
})

gulp.task('watchjs', () => {
    return gulp.watch('script.js', gulp.task('js'))
})

gulp.task('browser-sync', () => {
    return browserSync.init({
        server: {
            baseDir: './'
        },
        port: 3000
    })
})

gulp.task('default', gulp.parallel('browser-sync', 'watchjs'));

