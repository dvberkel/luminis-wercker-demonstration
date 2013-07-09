var http = require('http');
var url = require('url');

var Greeter = require('./lib/greeter');
var greeter = new Greeter('Hello');

var server = http.createServer(function(request, response){
    var parts = url.parse(request.url, true);
    response.end(greeter.greet('World'));
});

var port = process.env.PORT || 3435;
server.listen(port);
console.log('Listening on port ' + port);
