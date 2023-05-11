const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: Number,
    client_type: String,
    document_number: Number,
    birth_date: String,
    password: String,
}, {
    timestamps: true
});


module.exports = model('User', userSchema);