const http = require("http");


const count = []

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  
  setTimeout(() => {
    count.push(req)
    console.log("Event loop is blocked for 3 seconds")
  }, 3000)


  res.end("Hello World!");
  console.log(count.length)
  
})


server.listen(3000, () => console.log("Server is running on port 3000"))

// curl http://localhost:3000

