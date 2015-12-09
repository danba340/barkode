var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');


gulp.task('jade', function(){
  return gulp.src('*.jade')
    .pipe(jade())
    .pipe(gulp.dest('../../builds/development'))
    .pipe(connect.reload());
});

gulp.task('js', function(){
  return gulp.src('../js/main.js')
    .pipe(gulp.dest('../../builds/development/js'))
    .pipe(connect.reload());
});

gulp.task('sass', function(){
  return gulp.src('../sass/main.scss')
    .pipe(sass({ sourceComments: 'map' }))
    .pipe(gulp.dest('../../builds/development/css'))
    .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch('*.jade', ['jade']);
  gulp.watch('../js/**/*.js', ['js']);
  gulp.watch('../sass/**/*.scss', ['sass']);
});

gulp.task('connect', function() {
  connect.server({
      root: '../../builds/development',
      livereload: true
  });
});

gulp.task('default', ['jade', 'js', 'sass', 'watch', 'connect']);