'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sassGlob = require('gulp-sass-glob'),
    sassLint = require('gulp-sass-lint'),
    browserSync = require('browser-sync').create(),
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
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {

  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'watch']);
