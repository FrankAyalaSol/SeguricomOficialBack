const { Schema, model } = require('mongoose');

const CitaSchema = new Schema({
    respuesta1:String,
    respuesta2:String,
    respuesta3:String,
    respuesta4:String,
    respuesta5:String,
    respuesta6:String,
    respuesta7:String,
    respuesta8:String,
    respuesta9:String,
    respuesta10:String,
},{
    timestamps: true
})

module.exports = model('CitaForm', CitaSchema);