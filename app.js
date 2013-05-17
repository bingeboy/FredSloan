/*
* Module dependencies.
*/
var express    = require('express')
    , routes   = require('./routes')
    , fs       = require('fs')
    , http     = require('http')
    , util     = require('util')
    , path     = require('path');

var app = express();


/*
 * connect middleware
 */
app.configure(function() {
    app.set('port', process.env.PORT || 8000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(require('less-middleware')({ src: __dirname + '/public' }));
    app.use(express.static(path.join(__dirname, '/public')));
    app.use(express.static(__dirname + '/static'));
    app.use(express.errorHandler());
});


/*
 * Layout 
 */
app.get('/', routes.index);
app.get('/index', routes.index);
app.get('/layout', routes.index);


http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});