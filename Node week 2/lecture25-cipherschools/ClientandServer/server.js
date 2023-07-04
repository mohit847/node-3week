var http = require('http');

let server = http.createServer((req, res) =>{
    // response.end("hello");

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end("<h1>Hello from the otherside!!</h1>");


})

server.listen(5000, 'localhost', ()=>{
    console.log("started the server...")
})