const readFile = require('../readFile');

function sendHtml(filePath,res) {
    readFile(filePath,(err,data) => {
        if(err) {
            res.write(JSON.stringify("Error in reading file: " + err.message));
        } else {
            res.write(data);
        }
        res.end();
    })
}
function myRoutes(path,res) {
    switch(path) {
        case '/' :
            sendHtml("html/index.html",res);
            break;
        case '/login' :
            sendHtml("html/login.html",res);
            break;
        default : 
            res.write("No Routes found");
            res.end();
            break;
    }
}
module.exports = {
    "handleRoutes" : function(req,res) {
        res.writeHead(200, {'Content-Type': "text/html"});
        const baseUrl = req.protocol + '://' + req.headers.host + '/';
        const path = new URL(req.url,baseUrl);
        myRoutes(path.pathname,res);
    }
}