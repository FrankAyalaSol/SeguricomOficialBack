const { Schema, model } = require("mongoose");

const Citaform = new Schema({
    pregunta1:String,
    pregunta2:String,
    pregunta3:String,
    pregunta4:String,
    pregunta5:String,
    pregunta6:String,
    pregunta7:String,
    pregunta8:String,
    pregunta9:String,
    pregunta10:String,
    createAt:Date,
    default:Date.now
});

module.exports = model('Citaform', Citaform)