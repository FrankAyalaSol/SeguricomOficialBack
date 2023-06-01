const express = require('express');
const FormCitaController = require('../controllers/FormCitaController');

const api = express.Router();
api.get('/', (req, res) => res.send('Hello world'));
api.post('/FormCita',FormCitaController.Register);
module.exports = api;