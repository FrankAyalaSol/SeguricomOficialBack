import mongoose from "mongoose";

const clienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    dni: {
        type: Number,
        required: true,
    },
    celular: {
        type: Number,
        required: true,
    },
    tipo_local: {
        type: String,
        required: true,
    },
    especialista: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "EspecialistaModel",
    },
});

const Cliente = mongoose.model("Cliente", clienteSchema);
export default Cliente;
