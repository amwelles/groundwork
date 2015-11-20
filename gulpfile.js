'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    sassGlob = require('gulp-sass-glob'),
    breakpoint = require('breakpoint-sass'),
    del = require('del');

gulp.task('clean', function() {
  return del([
    'css'
  ]);
});

gulp.task('sass', function() {
  gulp.src('./sass/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass.sync())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
