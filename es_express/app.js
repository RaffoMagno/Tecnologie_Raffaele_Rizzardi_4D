var express = require('express');
var app = express();

const path = require('path');

app.get('/',function(req,res){
 res.sendFile(path.join(__dirname, 'index.html')); //__dirname : Ritorna la cartella del progetto
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//assuming app is express Object.
app.get('/', function(req,res) {
    res.sendFile('index.html');
   });