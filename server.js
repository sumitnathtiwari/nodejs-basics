const server = require('http');
const routes = require('./routes/routes');
server.createServer(routes.handleRoutes).listen(3000);

function onRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    readFile("index.html",(err,data) => {
        if(err) {
            res.write(JSON.stringify("Error in reading file: " + err.message));
        } else {
            res.write(data);
        }
        res.end();
    })
}