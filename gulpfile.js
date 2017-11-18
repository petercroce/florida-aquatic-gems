// Before you start this project,
// be sure you follow the instructions in the README.
// Run `gulp clean` to clean the dist folder and `gulp` to build it.

var autoprefixer = require('gulp-autoprefixer'),
    bulkSass = require('gulp-sass-glob-import'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    del = require('del'),
    gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    htmlrender = require('gulp-htmlrender'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    path = require('path'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    zip = require('gulp-zip');

var WEBSITE_NAME = __dirname.split(path.sep).pop();

// Global variables that refer to project directories
var paths = {
  scss: 'scss/**/*.scss',
  js: 'js/**/*.js',
  html: 'html/**/*.html',
  tpl: 'weebly_partials/**/*',
  imgs: 'imgs/**/*',
  dist: 'dist'
};

// Rerun this script anytime one of the watched directories is modified
gulp.task('watch', function() {
  gulp.watch(paths.scss, ['stylesheets']);
  gulp.watch(paths.js, ['scripts']);
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.tpl, ['tpl']);
  gulp.watch(paths.imgs, ['imgs']);
  gulp.watch([
    paths.dist + '/*',
    '!' + paths.dist + '/*.zip'
  ], ['compress']);
});

gulp.task('clean', function() {
  return del([
    // Use a globbing pattern to match everything in the `dist` folder
    'dist/**/*',
    // We don't want to clean these files though so we negate the pattern
    '!dist/manifest.json',
    '!dist/.gitignore'
  ]);
});

gulp.task('stylesheets', function() {
  return gulp.src(paths.scss)
  // Import multiple SCSS files from a directory
    .pipe(bulkSass())
  // Compile SCSS to CSS
    .pipe(sass({indentedSyntax: false}).on('error', sass.logError))
  // Automatically add vendor prefixes for browser support
    .pipe(autoprefixer({
    browsers: [
      '> 5%', 'last 2 versions'
    ],
    cascade: false
  }))
  // Compress and Optimize CSS
    .pipe(cleanCSS()).pipe(concat(WEBSITE_NAME + '.min.css'))
  //Save CSS file
    .pipe(gulp.dest('css'))
  // Save CSS file into dist folder
    .pipe(rename('main_style.css')).pipe(gulp.dest(paths.dist));
});

gulp.task('scripts', function() {
  return gulp.src(paths.js)
  // Lint
    .pipe(jshint()).pipe(jshint.reporter('default'))
  // Minify and concatenate all JS within the directory into a single file
    .pipe(uglify()).pipe(concat('scripts.min.js')).pipe(gulp.dest(paths.dist));
});

gulp.task('html', function() {
  return gulp.src('html/*.html')
  // Render partials into complete HTML
    .pipe(htmlrender.render())
  // Minify HTML
    .pipe(htmlmin({
    removeComments: true,
    removeTagWhitespace: true,
    collapseWhitespace: true,
    removeScriptTypeAttributes: true,
    minifyJS: true,
    minifyCSS: true
  }))
  // Save HTML files to destination
    .pipe(gulp.dest(paths.dist));
});

// Add Weebly partials
gulp.task('tpl', function() {
  return gulp.src(paths.tpl).pipe(gulp.dest(paths.dist));
});

// Add and minify images
gulp.task('imgs', function() {
  return gulp.src(paths.imgs).pipe(imagemin()).pipe(gulp.dest(paths.dist))
});

gulp.task('compress', function() {
  // Zip all the files within the dist folder
  return gulp.src([
    paths.dist + '/**/*',
    '!' + paths.dist + '/*.zip'
  ]).pipe(zip(WEBSITE_NAME + '.zip')).pipe(gulp.dest(paths.dist));
});

gulp.task('build', ['stylesheets', 'scripts', 'html', 'tpl', 'imgs'])

gulp.task('default', ['build', 'watch']);
