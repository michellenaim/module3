const http = require('http');
var path = require ('path');
var fs = require ('fs');

const hostname = 'localhost';
const port = 5000;

const server = http.createServer((req, res) => {
    console.log("The NodeJS server on port 5000 is now running…")
    if (req.method === 'GET') {
        var fileUrl = req.url;
        
        if (fileUrl === '/home') {
            fileUrl = '/index.html';
        } else if (fileUrl === '/about') {
            fileUrl = '/about.html';
        } else if (fileUrl === '/contact') {
            fileUrl = '/contact.html';
        }
        var filePath = path.resolve('./public' + fileUrl);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(filePath).pipe(res);
    } else {
        res.end("Invalid Request!")
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});