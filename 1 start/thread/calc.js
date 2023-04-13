const {
  Worker,
  isMainThread,
  parentPort,
  workerData
} = require('worker_threads');

console.log('worker start');

function fib(n) {
  console.log('fib'), n;
  return n > 1 ? fib(n - 1) + fib(n - 2) : 1;
}

parentPort.on('message', (n) => {
  console.log('worker on message');
  parentPort.postMessage(fib(5));
});
