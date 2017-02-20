/**
 * Default Tasks
 */

var gulp        = require ('gulp');
var runSequence = require('run-sequence');

var mode        = require('./helpers/mode');

var assets = ['img', 'fonts', 'static', 'svg'];

var defaultTask = function(cb) {
	mode.show();

	mode.production ? 
	runSequence('clean', 'bower', assets, ['html', 'css', 'js'], 'size', cb) 
	: runSequence('bower', assets, ['html', 'css'], 'watch', cb);
};

gulp.task('default', defaultTask);
module.exports = defaultTask;