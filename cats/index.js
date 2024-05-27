// First front end app on the Node Docks server
const express = require('express');
const cats = express.Router();
// const router = express.Router();
// const productRoutes = require('.api/routes/products');

cats.get('/', (req, res, next) => {
  res.status(200).json({
    speak: 'Meow',
    message: 'Handling GET requests to /cats'
  });
});

cats.post('/', (req, res, next) => {
  res.status(200).json({
    speak: "Purrrr!",
    message: 'Handling POST requests to /cats'
  });
});


module.exports = cats;