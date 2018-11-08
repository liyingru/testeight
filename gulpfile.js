var gulp = require('gulp');
var server = require('gulp-webserver');

gulp.task('server', function() {
    return gulp.src('./src')
        .pipe(server({
            port: 8080,
            host: 'localhost',
            middleware: function(req, res, next) {
                var pathname = require('url').parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    res.end('');
                    return;
                }
                if (pathname === '/api/index') {

                } else {
                    pathname = pathname === '/' ? 'index.html' : pathname;
                    res.end(require('fs').readFileSync(require('path').join(__dirname, 'src', pathname)));
                }
            }
        }))
})