var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World! geç sen dalganı');
});

var server = app.listen(3000, function () {
    var host = 'localhost';
    var port = server.address().port;

    console.log(' Example app listening at http://%s:%s', host, port);
    console.log(' Example app listening at http://%s:%s', host, port);

});