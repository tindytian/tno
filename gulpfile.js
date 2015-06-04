'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');
var del = require('del');
var paths = {
    bower: 'src/assets/bower_components/',
    sass: 'src/scss/tno.scss',
    scripts: [
        'src/assets/bower_components/fastclick/lib/fastclick.js',
        'src/assets/bower_components/prism/prism.js',
        'src/assets/bower_components/slideout/dist/slideout.js',
        'src/js/main.js'
    ],
    fonts: 'src/assets/bower_components/font-awesome/fonts/*',
    css: [
        "src/assets/bower_components/animate.css/animate.css",
        "src/assets/bower_components/font-awesome/css/font-awesome.css",
        "src/assets/bower_components/prism/themes/prism-tomorrow.css"
    ]
};

gulp.task('clean', function(cb) {
    del(['assets'], cb);
});

gulp.task('scripts', ['clean'], function() {
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(concat('tno.min.js'))
        .pipe(gulp.dest('assets/js'));
});
gulp.task('fonts', ['clean'], function() {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest('assets/fonts'));
});
gulp.task('css', ['clean'], function() {
    return gulp.src(paths.css)
        .pipe(minifyCss())
        .pipe(concat('lib.min.css'))
        .pipe(gulp.dest('assets/css'));
});
gulp.task('sass', ['css'], function() {
    return gulp.src(paths.sass)
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(concat('tno.min.css'))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts','css', 'fonts', 'sass']);
    gulp.watch('src/scss/**/*.scss', ['scripts','css', 'fonts', 'sass']);
});

gulp.task('default', ['watch', 'scripts', 'css', 'fonts', 'sass']);
