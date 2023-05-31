const express = require('express');
const FormCita = require('../controllers/FormCitaController');

const api = express.Router();

api.post('/FormCita/registrar', path, FormCita.Register);
module.exports = api;