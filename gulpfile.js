var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var wrapper = require('gulp-wrapper');

var paths = {
	scripts: ['src/**/*.js']
};

gulp.task('build', function () {
	gulp.src(paths.scripts)
		.pipe(concat('angular-omdb.js'))
		.pipe(wrapper({
			header: `(function (angular) {\n`,
			footer: `\n})((angular || window.angular));`
		}))
		.pipe(gulp.dest('dist'))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
	gulp.watch(paths.scripts, ['build']);
});

gulp.task('default', ['build']);