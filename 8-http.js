const http = require('http');

const server = http.createServer((req, res)=> {
    //console.log(req)
    if (req.url === '/') {
        res.end('Welcome to our homepage');
    }
    if (req.url === '/about') {
        res.end('Here is our short history.')
    }
    else {
    res.end(`<h1>Oops!</h1>
<p>We can't seem to find the page you are looking for</p>
<a href = "/">back home</a>`);
    }
    // res.write('Welcome to our homepage');
    // res.end()
}) // req is the incoming request, res is what we are sending back.

server.listen(5000) // 5000 is a port the server is listening to