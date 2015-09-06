var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  fs.readFile("entries.json", function (err, result) {
    if (err) {
      console.log("file not found");
    } else {
      res.json(JSON.parse(result.toString()));    
    }
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});