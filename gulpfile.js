// Before you start this project, be sure you install Gulp globally and then
// run the following commands in your project directory:
// npm install gulp
// npm install --save-dev gulp-concat gulp-rename gulp-zip gulp-sass gulp-sass-glob-import gulp-autoprefixer gulp-clean-css gulp-uglify gulp-htmlrender gulp-htmlmin

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    zip = require('gulp-zip'),
    sass = require('gulp-sass'),
    bulkSass = require('gulp-sass-glob-import'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    htmlrender = require('gulp-htmlrender'),
    htmlmin = require('gulp-htmlmin'),
    path = require('path'),
    del = require('del');

var dir_path = path.resolve(".").split(path.sep);
var WEBSITE_NAME = dir_path[dir_path.length - 1].toLowerCase();

// Global variables that refer to project directories
var paths = {
  scss: 'scss/**/*.scss',
  js: 'js/**/*.js',
  html: 'html/**/*.html',
  dist: 'dist'
};

// Rerun this script anytime one of the watched directories is modified
gulp.task('watch', function() {
  gulp.watch(paths.dist, ['clean:dist']);
  gulp.watch(paths.scss, ['stylesheets']);
  gulp.watch(paths.js, ['scripts']);
  gulp.watch(paths.html, ['html']);
  gulp.watch([paths.dist + '/*', '!' + paths.dist + '/*.zip'], ['compress']);
});

gulp.task('clean:dist', function () {
  return del([
    // Here we use a globbing pattern to match everything in the `dist` folder
    'dist/**/*',
    // We don't want to clean these files though so we negate the pattern
    '!dist/manifest.json',
    '!dist/.gitignore'
  ]);
});

gulp.task('stylesheets', function () {
  return gulp.src(paths.scss)
    // Import multiple SCSS files from a directory
    .pipe(bulkSass())
    // Compile SCSS to CSS
    .pipe(sass({
                  indentedSyntax: false
                }).on('error', sass.logError)
          )
    // Automatically add vendor prefixes for browser support
    .pipe(autoprefixer({
                          browsers: ['> 5%', 'last 2 versions'],
                          cascade: false
                        })
          )
    // Compress and Optimize CSS
    // .pipe(cleanCSS())
    .pipe(concat(WEBSITE_NAME + '.min.css'))
    //Save CSS file
    .pipe(gulp.dest('css'))
    // Save CSS file into dist folder
    .pipe(rename('main_style.css'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('scripts', function() {
  return gulp.src(paths.js)
    // Minify and concatenate all JS within the directory into a single file
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('html', function() {
  gulp.src('html/*.html')
  // Render partials into complete HTML

  .pipe(htmlrender.render())
  // Minify HTML
  // .pipe(htmlmin({
  //                 removeComments: true,
  //                 removeTagWhitespace: true,
  //                 collapseWhitespace: true,
  //                 removeScriptTypeAttributes: true,
  //                 minifyJS: true,
  //                 minifyCSS: true
  //               })
  //       )

  // Save HTML files to destination
  .pipe(gulp.dest(paths.dist));
});

gulp.task('compress', function(){
  // Zip all the files within the dist folder
  return gulp.src([paths.dist + '/*', '!' + paths.dist + '/*.zip'])
  .pipe(zip(WEBSITE_NAME +'.zip'))
  .pipe(gulp.dest(paths.dist));
});

gulp.task('default', ['watch', 'clean:dist', 'stylesheets', 'scripts', 'html']);
