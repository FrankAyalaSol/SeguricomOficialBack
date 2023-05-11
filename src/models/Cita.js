const { Schema, model } = require('mongoose');

const citaSchema = new Schema({
    nombre: {type: String, require:true},
    numero: {type: Number, require:true},
    email: {type: String, require:true},
    tipo: {type: String, require:true},
    fechacreacion: {type:Date, default: Date.now()}
})

module.exports = model('Cita', citaSchema);