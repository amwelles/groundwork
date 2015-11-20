'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer'),
    sassGlob = require('gulp-sass-glob'),
    sassLint = require('gulp-sass-lint'),
    del = require('del');

gulp.task('clean', function() {
  return del([
    'css'
  ]);
});

gulp.task('sass', function() {
  gulp.src('./sass/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
