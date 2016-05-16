// Generic Utilities:
// -----------------
var gulp       = require('gulp');
var concat     = require('gulp-concat-util'); // Makes concat.header, concat.footer available.

// JavaScript Utilities:
// --------------------
var uglify     = require('gulp-uglify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');

// CSS Utilities:
// -------------
var cssnano    = require('gulp-cssnano');
var less       = require('gulp-less');
var prefix     = require('gulp-autoprefixer');

// Handlerbars Templating:
// ----------------------
var handlebars = require('gulp-handlebars');
var wrap       = require('gulp-wrap');
var declare    = require('gulp-declare');

/************************************************/
/************************************************/
/************************************************/

// HANDLEBARS
gulp.task('handlebars', function() {
  /*
   * Needs specific versions to work properly (gulp-wrap ^0.12.0 breaks):
   * gulp-wrap:       ^0.11.0
   * handlebars:      ^4.0.5
   * gulp-handlebars: ^4.0.0
   */
  return gulp.src('dev/templates/**/*.hbs')
    .pipe(handlebars({
      // Needed to avoid mismatching compiler with runtime.
      // https://github.com/lazd/gulp-handlebars#compiling-using-a-specific-handlebars-version
      handlebars: require('handlebars')
    }))
    .on('error', onError)
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .on('error', onError)
    .pipe(declare({
      root: 'App.templates', // Where to access the templates from.
      noRedeclare: true
    }))
    .on('error', onError)
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('dev/js'));
});


// JAVASCRIPT
gulp.task('scripts', function() {
  return gulp.src([
    'dev/js/vendors.min.js', // Needed 1st.
    'node_modules/backbone.localstorage/backbone.localStorage-min.js',
    'dev/js/models/**/*.js', // Models need to be loaded first.
    'dev/js/**/!(app|templates|dependencies)*.js',
    'dev/js/templates.js',
    'dev/js/app.js', // Needed last.
  ])
    .pipe(concat('all.min.js'))
    // Wrap the concatenated file in a SEAF.
    // Declaring the var's prevents dependencies.js from scoping them globally.
    // .pipe(concat.header('(function(){var Backbone,$,jQuery,_,Handlebars,App;'))
    .pipe(concat.header('(function(){')) // ALLOW GLOBAL VARIABLES
    .pipe(concat.footer('\n})();'))
    // .pipe(uglify()) // Use for production.
    .pipe(gulp.dest('public'));
});

// BROWSERIFY - for front-end dependencies.
gulp.task('browserify', function() {
  var b = browserify('dev/js/dependencies.js'); // File containing a list of requires's.

  return b.bundle()
    .pipe(source('vendors.min.js')) // Concatenated destination file.
    .pipe(buffer()) // Needed for uglify below.
    .pipe(uglify())
    .pipe(gulp.dest('dev/js'));
});

// CSS: LESS
gulp.task('less', function() {
  return gulp.src(['dev/less/**/*.less'])
    .pipe(concat('styles.less'))
    .pipe(less()) // styles.less > styles.css
    .on('error', onError)
    // .pipe(cssnano()) // Use for production.
    .on('error', onError)
    .pipe(prefix({browsers: ['last 2 versions', 'Explorer > 9']})) // browserslist: https://github.com/ai/browserslist
    .on('error', onError)
    .pipe(gulp.dest('public'));
});

// WATCH
gulp.task('watch', function() {
  gulp.watch('dev/templates/**/*.hbs', ['handlebars']);
  gulp.watch('dev/js/**/!(dependencies)*.js', ['scripts']);
  gulp.watch('dev/less/**/*.less', ['less']);
  gulp.watch('dev/js/dependencies.js', ['browserify']);
});

// DEFAULT
gulp.task('default', ['handlebars', 'scripts', 'less', 'watch']);

// http://goo.gl/SboRZI
// Prevents gulp from crashing on errors.
function onError(err) {
  console.log(err.stack);
  console.log('plugin: ', err.plugin);
  this.emit('end');
}