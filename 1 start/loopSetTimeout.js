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
      setTimeout(() => {
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
  let countL = 0;
  for (let i = 0; i < 100000000; i++) {
    countL += 1;
  }
  summ += countL;

  console.log('calc', summ);
  res.end('calc: ' + summ + '   ' + 'count: ' + countMain);
}

function mainModule(req, res) {
  res.writeHead(200);
  countMain += 1;
  console.log('countMain Comment: ' + countMain, 'summ: ' + summ);
  res.end('countMain response: ' + countMain + '  summ:' + summ + '   ');
}

// autocannon -c 100 localhost:4000
