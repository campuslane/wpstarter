var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglifyjs');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var concat = require('gulp-concat');

var config = {
  bowerDir: 'bower_components',
  publicDir: '..',
};

var plumberErrorHandler = { errorHandler: notify.onError({
    title: 'Gulp',
    message: 'Error: <%= error.message %>'
  })
 
};

// FONTS
gulp.task('fonts', function() {
  return gulp.src([
    config.bowerDir + '/bootstrap-sass/assets/fonts/**/*',
    config.bowerDir + '/font-awesome/fonts/**/*',
  ])
  .pipe(gulp.dest(config.publicDir + '/fonts'))
  .pipe(plumber(plumberErrorHandler))
  .pipe(livereload());
});


// JAVASCRIPT
gulp.task('js', function() {
  return gulp.src([
    //config.bowerDir + '/jquery/dist/jquery.min.js',
    //config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.js',
    config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap/*.js',
  ])
  .pipe(uglify('scripts.js', {
    compress: false,
    outSourceMap: true,
  }))
  .pipe(gulp.dest(config.publicDir + '/js'))
  .pipe(plumber(plumberErrorHandler))
  .pipe(livereload());
});


// CSS STYLES
gulp.task('css', function() {
  return gulp.src(['sass/style.scss', config.bowerDir + '/font-awesome/css/font-awesome.min.css'])
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'compressed',
    includePaths: [config.bowerDir + '/bootstrap-sass/assets/stylesheets'],
  }))
  .pipe(sourcemaps.write())
  .pipe(concat('style.css'))
  .pipe(gulp.dest(config.publicDir + '/css'))
  .pipe(plumber(plumberErrorHandler))
  .pipe(livereload());
});


// DEFAULT GULP
gulp.task('default', ['css', 'js', 'fonts']);


// GULP WATCH
gulp.task('watch', function() {

  livereload.listen();

  gulp.watch('sass/*.scss', ['css']);
  gulp.watch(config.bowerDir + '/bootstrap-sass/assets/fonts/**/*', ['fonts']);
 
});