const path = require('path');
const express = require('express');
const localIp = require('my-local-ip');
const ks = require('node-key-sender');
const { getVolume, setVolume } = require('node-audio-windows').volume;

const PORT = 3210;
const app = express();
const staticPath = path.resolve(
  __dirname + '\\..\\..\\frontend\\dist\\static\\',
);

app.use('/', express.static(staticPath));

app.get('/inc', (req, res) => {
  setVolume(getVolume() + 0.05);
  res.sendStatus(204);
});

app.get('/dec', (req, res) => {
  setVolume(getVolume() - 0.05);
  res.sendStatus(204);
});

app.get('/pause', (req, res) => {
  ks.sendKey('space');
  res.sendStatus(204);
});

app.listen(PORT, () => console.log(`${localIp()}:${PORT}`));
