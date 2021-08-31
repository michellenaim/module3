const http = require('http');

const hostname = 'localhost';
const port = 5000;

const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h2>Home Page.</h2></body></html>');
    } else if (req.url == "/about") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h2>About Page.</h2></body></html>');
      } else if (req.url == "/contact") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h2>Contact Page.</h2></body></html>');
      } else {
        res.end("Invalid Request!")
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});