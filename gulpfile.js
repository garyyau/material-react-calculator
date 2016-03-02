'use strict';

/* Required */
var gulp = require('gulp');
// var autoprefixer = require('gulp-autoprefixer');
// var browserSync = require('browser-sync');
// var plumber = require('gulp-plumber');
// var rename = require('gulp-rename');
// var scss = require('gulp-scss');
// var uglify = require('gulp-uglify');
// var pkg = require('./package.json');
// var _ = require('lodash');
// var gutil = require('gulp-util');
// var sourcemaps = require('gulp-sourcemaps');
// var vinylBuffer = require('vinyl-buffer');
// var vinylSourceStream = require('vinyl-source-stream');




var BrowserifyLibrariesTask = require('./gulp/tasks/browserify-libraries-task');


// var reload = browserSync.reload;

var browserifyLibrariesTask = new BrowserifyLibrariesTask();
browserifyLibrariesTask.createTasks();


// /* Build Libraries Task */
// gulp.task('Libs', function() {
// 	var libs = _.keys(pkg.dependencies);
// 	var config = {
// 		debug: true,
// 		require: libs,
// 	};

// 	var libBundle = browserify(config);
// 	return libBundle.bundle()
// 		.pipe(plumber())
// 		.on('error', function(error) {
// 			gutil.log('Browserify Error');
// 			gutil.log(error.toString());
// 		})
// 		.pipe(vinylSourceStream('libs.js'))
// 		.pipe(gulp.dest(pathJS));
// });

// gulp.task('build', function() {

// });


// /* Script Tasks */
// gulp.task('scripts', function() {
// 	gulp.src(['js/**/*.js', '!js/**/*.min.js'])
// 		.pipe(plumber())
// 		.pipe(rename({suffix:'.min'}))
// 		.pipe(uglify())
// 		.pipe(gulp.dest('js'))
// 		.pipe(reload({stream: true}));
// });

// /* SASS Task */
// gulp.task('scss', function() {
// 	gulp.src('scss/**/*.scss')
// 		.pipe(plumber())
// 		.pipe(scss())
// 		.pipe(autoprefixer('last 2 versions'))
// 		.pipe(gulp.dest('css'))
// 		.pipe(reload({stream: true}));
// });

// /* HTML Task */
// gulp.task('html', function() {
// 	gulp.src('**/*.html')
// 		.pipe(reload({stream: true}));
// });

// /* Browser Sync */
// gulp.task('browser-sync', function() {
// 	browserSync({
// 		server: {
// 			baseDir: './'
// 		}
// 	});
// });

// /* Watch Task */
// gulp.task('watch', function() {
// 	gulp.watch('js/**/*.js', ['scripts']);
// 	gulp.watch('scss/**/*.scss', ['scss']);
// 	gulp.watch('**/*.html', ['html']);
// });

/* Default Task */
gulp.task('default', [
	'bundle-libs',
	// 'scripts',
	// 'scss',
	// 'html',
	// 'browser-sync',
	// 'watch',
]);