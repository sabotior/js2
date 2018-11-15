var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('scss', function() {
  return gulp.src('src/scss/**/*.+(scss|sass)')//прочитали
.pipe(sass())//обработали
.pipe(gulp.dest('src/css'))//сохранили
.pipe(browserSync.reload({ stream: true}));//поток
});
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'src',
    }
  })
});

gulp.task('watch', ['browserSync'], function() {//контроль изменений (при сохранении) можно несколько команд в массиве 'watch', [''], function()
  gulp.watch('src/scss/**/*.+(scss|sass)', ['scss']);//путь-шаблон, [задачи которые нужно запустить]
  gulp.watch('src/index.html', browserSync.reload);
});