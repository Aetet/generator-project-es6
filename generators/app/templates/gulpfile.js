var gulp = require('gulp');
var babel = require('gulp-babel');
var changed = require('gulp-changed');

var config = {
  src: {
    scripts: ['index.js', 'lib/**/*.js']
  },
  dest: {
    scripts: 'dist'
  }
};

gulp.task('build', function () {
  return gulp.src(config.src.scripts)
    .pipe(changed(config.dest.scripts))
    .pipe(babel())
    .pipe(gulp.dest(config.dest.scripts));
});

gulp.task('watch', function () {
  gulp.watch(config.src.scripts, ['build']);
});
