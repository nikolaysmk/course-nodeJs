const http = require('http');
const pid = process.pid;

let summ = 0;
let countMain = 0;

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

server.listen(4000, () => console.log('Server is running on port 4000', pid));



function calc(req, res) {
  res.writeHead(200);
  let count = 0;
  for (let i = 0; i < 100000000; i++) {
    count += 1;
  }
  summ += count / 10000000000;
  console.log('calc', summ);
  res.end('calc: ' + summ);
}

function mainModule(req, res) {
  res.writeHead(200);
  countMain += 1;
  console.log('mainModule Comment: ' + countMain, summ);
  res.end('mainModule response: ' + countMain + ' and summ:  ' + summ);
}

// autocannon -c 100 localhost:4000
