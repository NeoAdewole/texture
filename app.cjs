const express = require('express');
const app = express();
const _ = require('lodash');

const productRoutes = require('../api/routes/products')
const kittyRoutes = require('./cats/index')

app.get('/me', (req, res) => {
  res.send('<div><span>I like <h3>H3\'s</h3> a bit too much.</span></div>');
});

app.get('/compare', (req, res) => {
  res.sendFile('./public/compare.html', { root: __dirname });
});

app.use('/cats', kittyRoutes);
app.use('/products', productRoutes);

app.use((req, res) => {
  res.sendFile('./public/index.html', { root: __dirname });
});

module.exports = app;