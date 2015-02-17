var gulp = require('gulp');
var karma = require('karma').server;

/**
 * Run test once and exit
 */
gulp.task('default', function (done) {
  karma.start({
    configFile: __dirname + '/my.conf.js',
    singleRun: true
  }, done);
});