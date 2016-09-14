'use strict';
var gulp = require('gulp');
var webserver = require('gulp-webserver');
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      port: 4000,
      fallback: 'index.html',
      open: true
    }));
});