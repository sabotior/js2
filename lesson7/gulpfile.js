var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('scss', function() {
  return gulp.src('src/scss/**/*.+(scss|sass)')
.pipe(sass())
.pipe(gulp.dest('src/css'));
});

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.+(scss|sass)', ['scss']);
});