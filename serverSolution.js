const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Keep the server alive by preventing it from closing prematurely
server.keepAliveTimeout = 0;

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
//Add a keep-alive functionality to the HTTP server to prevent it from closing prematurely

//In case of large requests or handling streams use these libraries
//https://nodejs.org/api/stream.html#stream_class_stream_readable