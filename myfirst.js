let http = require("http");
var date = require('./myfirstmodule');

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date is currently: " + date.myTime())
    res.end('\nHello World!');
}).listen(8080)

