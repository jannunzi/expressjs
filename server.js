var express = require('express');
var app = express();

app.get('/hello', function(req, res){
  res.send('hello world');
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);