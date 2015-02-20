var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('default',function() {
  return gulp
    .src('./client/app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
})
