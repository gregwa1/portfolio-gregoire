const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');

const app = express();

api.use(bodyParser.json());

api.use(cors());

api.use((req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Origin', 'Content-Type, Authorization');
  next();

});


api.get('/api', (req, res, next) => {
  res.send('API Status: Running')
})

api.listen(3000, '0.0.0.0');

