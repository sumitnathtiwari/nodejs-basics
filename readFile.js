const fs = require('fs');

function readFile(path,callback) {
    fs.readFile(path,(err,data) => {
        if(err) {
            callback(err,null);
        } else {
            callback(null,data);
        }
    });
}

module.exports = readFile;