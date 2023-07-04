let http = require('http')

let server = http.createServer((req, res) =>{
    // response.end("hello");

    // res.writeHead(200, {'Content-Type': 'text/html'})
    // res.end("<h1>Hello from the otherside!!</h1>");


    console.log(req.url)
    if(req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end("<h1>Welcome user</h1>");

    }else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end("<h1>Welcome to about</h1>");
    }else if(req.url === '/data'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('name john')
    }else {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end("<h1>Page not found 404</h1>");
    }

})

server.listen(5000, 'localhost', ()=>{
    console.log("started the server...")
})