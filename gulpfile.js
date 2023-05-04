const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

// Static server
gulp.task("server", function () {
  browserSync.init({
    server: {
      baseDir: "src",
    },
  });
});

gulp.task("styles", function () {
  return gulp
    .src("src/sass/**/*.+(scss|sass)")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(
      rename({
        prefix: "",
        suffix: ".min",
      })
    )
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel("styles"));
  gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("default", gulp.parallel("watch", "server", "styles"));
