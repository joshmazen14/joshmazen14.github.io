const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('I don\'t trust like that');
})

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Now listening on port 8080')
})