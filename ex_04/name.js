var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if ('name' in params) {
        res.write('Hello ' + params['name']);
    }
    else {
        res.write('Hello unknown');
    }
    res.end();
});
server.listen(8088);