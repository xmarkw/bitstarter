var express = require('express');

//edit
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
/*
var fs = require("fs");
var data = fs.readFileSync("foo.txt", "utf8");
console.log(data);//  fs.readFileSync('index.html')
  
*/
response.send('Hello World 2!');

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
