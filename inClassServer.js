// Goal: A basic web server that listens on port 8000
// Goal: Write out two parts of a message, "This is half ", " of this awesome message"
// http is a node module

var http = require("http")

function logsTimestamp() {
  console.log(new Date());
}

var handleRequest = function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/plain'});

  if (req.url === '/favicon.ico') {
    res.end('');
    return;
  }
  console.log("First write starting");
  res.write("This is half ", logsTimestamp);
  console.log("Second Right ended");
  res.write("of this awesome message", logsTimestamp);
  console.log("Writes ended");
  res.end("Hello World!", logsTimestamp );
  console.log("Response Ended");
};

var server = http.createServer(handleRequest);
server.listen(1337);

console.log('Server is running on port 1337');
