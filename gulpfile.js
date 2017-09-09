const gulp = require('gulp')
const shell = require('gulp-shell')
const cucumber = './node_modules/.bin/cucumber.js'

gulp.task('test', shell.task([
  cucumber + ' features/ -r steps/'
]))

gulp.task('test_with_support', shell.task([
  cucumber + ' features/ -r steps/ -r support/'
]))