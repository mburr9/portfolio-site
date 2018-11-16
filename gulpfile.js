const gulp = require ('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

const paths = {
  styles: {
    src: "sass/**/*.sass",
    dest: "css"
  },
  html: {
    src: "./index.html"
  }
};

function style() {
  return (
    gulp
      .src(paths.styles.src)
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
      )
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(browserSync.stream())
  );
}

function reload(done) {
  browserSync.reload();
  done();
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    online: true
  });

  gulp.watch(paths.styles.src, style);

  gulp.watch(paths.html.src, reload);
}

exports.watch = watch;
exports.style = style;
