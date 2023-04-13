const http = require('http');
const pid = process.pid;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  switch (req.url) {
    case '/':
      mainModule(req, res);
      break;
    case '/calc':
      calc(req, res);
      break;
    default:
      res.writeHead(200);
      res.end('Page not found');
  }
});

server.listen(3333, () => console.log('Server is running on port 3333', pid));

function calc(req, res) {
  res.writeHead(200);
  res.end('calc:');
}

function mainModule(req, res) {
  res.writeHead(200);
  res.end('countMain response: ');
}

// autocannon -c 100 localhost:3333
// curl localhost:3333
