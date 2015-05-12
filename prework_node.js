var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337);

console.log('Server running at http://localhost:1337/');

// We require('http') so that we can use the HTTP server and client and assign it to a variable, http.
//We are creating a method that takes a function with the arguments of (request and response) called createServer and calling it on http. The request and response variables are objects representing the incoming and outgoing data. The writeHead function writes out response headers and this where we tell the client that we are sending back an HTML document. Response.end signals the end of the response. server.listen causes the server to start searching for connections on local host 1337. 
