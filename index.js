const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');
const data = require('./assets/data');

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', (req, res) => {
  res.send('OK');
});

app.get('/transactionlist', ({}, res) => {
  res.send({ data, message: 'Data fetched successfully!' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});