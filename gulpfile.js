"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sass", function () {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass.sync({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./css/"));
});

gulp.task("default", gulp.series(["sass"]));
