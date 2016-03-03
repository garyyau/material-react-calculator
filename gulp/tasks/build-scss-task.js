'use strict';

var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var gutil = require('gulp-util');
var scss = require('gulp-scss');

var paths = require('./../config').paths;
var reload = browserSync.reload;


class BuildSCSSTask {

	constructor() {
		this.name = 'build-scss';
		this.watchName = 'build-scss:watch';
	}

	buildSCSS() {
		return gulp.src(paths.source.scss + '**/*.scss')
				   .on('error', (error) => {
				   		gutil.log("SCSS Error");
				   		gutil.log(error.toString());
				   })
				   .pipe(scss())
				   .pipe(gulp.dest(paths.build.css))
				   .pipe(reload({stream: true}));
	}

	watchSCSS() {
		return gulp.watch(paths.source.scss + '**/*.scss', [this.name]);
	}

	createTasks() {
		gulp.task(this.name, () => this.buildSCSS());
		gulp.task(this.watchName, () => this.watchSCSS());
	}

}

module.exports = BuildSCSSTask;