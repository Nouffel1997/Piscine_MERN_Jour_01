var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if ('name' in params && 'age' in params) {
        res.write('Hello ' + params['name'] + ' you have ' + params['age'] + ' yo');
    }
    else {
        res.write(' Hello unknown, i dont know your age');
    }
    res.end();
});
server.listen(4242);