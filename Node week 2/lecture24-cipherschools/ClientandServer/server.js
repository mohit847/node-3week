var http = require('http');

let server = http.createServer((request, response) =>{
    response.end("hello");
})

server.listen(5000, 'localhost', ()=>{
    console.log("started the server...")
})