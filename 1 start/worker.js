const http = require('http');
const pid = process.pid;
const {
  Worker,
  isMainThread,
  parentPort,
  workerData
} = require('worker_threads');

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
  let worker = new Worker('./thread/calc.js');
  worker.on('message', (result) => {
    const some = result();
    console.log(some);
    res.end(`Result: ${some}`);
  });

  worker.on('error', (err) => {
    res.end(`Error: ${err}`);
  });
}

function mainModule(req, res) {
  res.writeHead(200);
  res.end('countMain response: ');
}

// autocannon -c 100 localhost:3333
// curl localhost:3333
