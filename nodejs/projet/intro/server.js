const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<h4>Welcome to Node JS - in less than 5 minutes</h4>');
}).listen(4300, '127.0.0.1');

