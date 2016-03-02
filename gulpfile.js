/* Required */
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var scss = require('gulp-scss');
var uglify = require('gulp-uglify');

var reload = browserSync.reload;


/* Script Tasks */
gulp.task('scripts', function() {
	gulp.src(['js/**/*.js', '!js/**/*.min.js'])
		.pipe(plumber())
		.pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('js'))
		.pipe(reload({stream: true}));
});

/* SASS Task */
gulp.task('scss', function() {
	gulp.src('scss/**/*.scss')
		.pipe(plumber())
		.pipe(scss())
		.pipe(autoprefixer('last 2 versions'))
		.pipe(gulp.dest('css'))
		.pipe(reload({stream: true}));
});

/* HTML Task */
gulp.task('html', function() {
	gulp.src('**/*.html')
		.pipe(reload({stream: true}));
});

/* Browser Sync */
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './'
		}
	});
});

/* Watch Task */
gulp.task('watch', function() {
	gulp.watch('js/**/*.js', ['scripts']);
	gulp.watch('scss/**/*.scss', ['scss']);
	gulp.watch('**/*.html', ['html']);
});

/* Default Task */
gulp.task('default', [
	'scripts',
	'scss',
	'html',
	'browser-sync',
	'watch',
]);