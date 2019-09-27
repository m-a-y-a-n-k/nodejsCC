const Person = require('./person');
const Logger = require('./logger');
const http = require('http');
const path = require('path');
const fs = require('fs');

const person = new Person('John Doe', 30);
person.greeting();

const logger = new Logger();

logger.on('message', (data) => {
    console.log('Called Listener: ', data);
});

logger.log('I love kites');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    let extension = path.extname(filePath);
    let contentType;

    switch (extension) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case 'html':
            contentType = 'text/html';
            break;
        default:
            contentType = 'text/html';
            extension = '.html';
            filePath = filePath + extension;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                //Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    if (err) {
                        throw err;
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf-8');
                });
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    })


});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on Port : ${PORT}`);
});