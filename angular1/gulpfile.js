const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

/*gulp.tasks('default', () => {
  if(util.env.production) {
    sequence('deps', 'app')
  }
  else {
    sequence('deps', 'app', 'server')
  }
})*/

gulp.task('default', () => {if(util.env.production){sequence('deps','app')}else {sequence('deps', 'app', 'server')}})
