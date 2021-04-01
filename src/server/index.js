const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(9002, function () {
  console.log('Example app listening on port 8080!');
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});

app.get('/', function (req, res) {
  console.log(test);
});

app.get('/api', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9020');
  res.send({ key: process.env.API_KEY });
});

app.post('/article', (req, res) => {
  url = req.body;
});
