var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  jshint = require('gulp-jshint'),
  concat = require('gulp-concat'),
  fileinclude = require('gulp-file-include'),
  rename = require('gulp-rename'),
  minifycss = require('gulp-minify-css'),
  shell = require('gulp-shell'),
  wrap = require('gulp-wrap');


gulp.task('fileinclude', function() {
  gulp.src(['html/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('lint', function() {
  gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
  gulp.src(['js/*.js'])
    .pipe(concat('script.dev.js'))
    .pipe(wrap('\n(function(){\n<%= contents %>\n})();'))
    .pipe(gulp.dest('./build/assets'))
    .pipe(rename('script-v1.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/assets'));
});

gulp.task('minify-css', function() {
  gulp.src(['css/*.css'])
  .pipe(concat('style.dev.css'))
  .pipe(gulp.dest('./build/assets'))
  .pipe(minifycss({keepBreaks:false}))
  .pipe(concat('style-v1.min.css'))
  .pipe(gulp.dest('./build/assets'));
});

gulp.task('add-images', function() {
  gulp.src(['img/*'])
  .pipe(gulp.dest('./build/assets/img'))
});

gulp.task('watch', function() {
  gulp.watch(['js/*.js', 'css/*.css', 'html/*.html', 'img/*', 'html/partials/*.html'], ['add-images', 'fileinclude', 'lint', 'scripts', 'minify-css']);
});


gulp.task('http-server', shell.task([
  'cd ./build; http-server'
]));

gulp.task('default', ['fileinclude', 'add-images', 'lint', 'scripts', 'minify-css', 'watch', 'http-server']);
