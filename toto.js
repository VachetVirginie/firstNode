var http = require('http');
var fs = require('fs');

fs.writeFile('toto.txt', 'salut toto !', function(err) {
    if (err) throw err;
    console.log('Saved!');
});

http.createServer(function(req, res) {
    //Open a file on the server and return it's content:
    fs.readFile('toto.txt', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8081);