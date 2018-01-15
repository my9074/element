'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');
var cssWrap = require('gulp-css-wrap');
var salad = require('postcss-salad')(require('./salad.config.json'));

gulp.task('compile', function() {
  return gulp.src('./src/index.css')
    .pipe(postcss([salad]))
    .pipe(cssWrap({selector: '.theme-background'}))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

gulp.task('copyfont', function() {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/fonts'));
});

gulp.task('build', ['compile', 'copyfont']);
