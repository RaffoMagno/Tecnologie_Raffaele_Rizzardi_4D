var express = require('express');
const songs = require('./songs.json');
var app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Canzone bella',
    songs: songs.songs
  });
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});