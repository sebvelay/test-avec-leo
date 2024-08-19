const express = require('express');
const app = express();

app.get('/ok', (req, res) => {
  res.status(200).send('Everything is OK');
});

app.get('/ko', (req, res) => {
  throw new Error('Something went wrong');
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;