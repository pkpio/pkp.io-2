import * as gulp from 'gulp';
import * as child from 'child_process';
import * as runSequence from 'run-sequence';
import * as util from 'gulp-util';
import { join } from 'path';

import Config from '../../config';

/**
 * Gulp task to build the blog.
 */
gulp.task('build.blog', () => {
    let jekyll: child.ChildProcess = child.spawn('jekyll', ['build',
        '--source', Config.APP_SRC + '/app/blog/jekyll',
        '--destination', Config.APP_DEST + '/app/blog/jekyll']
    );
    const jekyllLogger = (buffer: any) => {
        buffer.toString()
            .split(/\n/)
            .forEach((message: String) => util.log('Jekyll: ' + message));
    };
    jekyll.stdout.on('data', jekyllLogger);
    jekyll.stderr.on('data', jekyllLogger);
});
export = (done: any) =>
  runSequence('build.blog', done);
