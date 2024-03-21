const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Leggi i dati dal file JSON
const songsData = JSON.parse(fs.readFileSync('songs.json', 'utf-8'));

// Imposta il motore di rendering Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Gestisce la richiesta per la pagina principale
app.get('/', (req, res) => {
  res.render('index', { songs: songsData.songs });
});

// Gestisce la richiesta per la pagina di una singola canzone
app.get('/song/:song_id', (req, res) => {
  const songId = parseInt(req.params.song_id);
  const song = songsData.songs.find(song => song.song_id === songId);
  if (song) {
    res.render('song', { song });
  } else {
    res.status(404).send('Song not found');
  }
});

// Avvia il server sulla porta 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
