const server = require('http');


server.createServer(onRequest).listen(8000);

function onRequest(req,res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify("hello world"));
    res.end();
}