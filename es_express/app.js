var express = require('express');
var app = express();

const path = require('path');

app.get('/',function(req,res){
 res.sendFile(path.join(__dirname, 'index.html')); //__dirname : Ritorna la cartella del progetto
});
app.get('/altro',function(req,res){
  res.sendFile(path.join(__dirname, 'altro.html')); //__dirname : Ritorna la cartella del progetto
 });
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});