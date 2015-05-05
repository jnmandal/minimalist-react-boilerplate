var gulp       = require('gulp'),
    connect    = require('gulp-connect'),
    open       = require('gulp-open'),
    browserify = require('gulp-browserify'),
    concat     = require('gulp-concat'),
    port       = process.env.port || 3000;

// package components and transform jsx
gulp.task('browserify', function(){
  gulp.src('./app/src/js/app.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(gulp.dest('app/dist/js'));
});

// launch browser to localhost
gulp.task('open', function(){
  var options = {
    url: 'http://localhost:' + port,
  };
  gulp.src('./app/index.html')
    .pipe(open('', options));
});

// live reload server
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port: port,
    livereload: true
  });
});

// live reload js
gulp.task('js', function(){
  gulp.src('./app/dist/**/*.js')
    .pipe(connect.reload());
});

// live reload html
gulp.task('html', function(){
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

// watch files to trigger live reload
gulp.task('watch', function(){
  gulp.watch('app/dist/js/*.js',   ['js']);
  gulp.watch('app/index.html',     ['html']);
  gulp.watch(['app/src/js/**/*.js', './app/src/js/**/*.jsx'], ['browserify']);
});

gulp.task('default', ['browserify']);

gulp.task('serve', ['browserify', 'connect', 'open', 'watch']);