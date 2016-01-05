var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("\n Funguje to ! \n");
});

var port = process.env.PORT || 8888;
server.listen(port);

console.log("Server listening to port: " + port);
