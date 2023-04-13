const http = require('http');
const pid = process.pid;

let calcCount = 0;
let mainCount = 0;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  switch (req.url) {
    case '/':
      mainModule(req, res);
      break;
    case '/calc':
      setImmediate(() => {
        calc(req, res);
      }, 0);
      break;
    default:
      res.writeHead(200);
      res.end('Page not found');
  }
});

server.listen(4000, () => console.log('Server is running on port 4000', pid));

function calc(req, res) {
  res.writeHead(200);
  calcCount += 1;
  res.end('await calc: ' + calcCount);
}

function mainModule(req, res) {
  res.writeHead(200);
  mainCount += 1;

  res.end('mainCount: ' + mainCount);
}

// autocannon -c 100 localhost:4000
