// import Cliente from "../models/ClienteModel.js";
import DetalleEstudio from "../models/DetalleEstudio.js";
import Cliente from "../models/ClienteModel.js";

const obtenerClientes = async (req, res) => {
    try {
        res.status(200).json("obtenerClientes");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const obtenerCliente = async (req, res) => {
    try {
        res.status(200).json("obtenerCliente");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const agregarCliente = async (req, res) => {
    try {
        res.status(200).json("agregarCliente");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const actualizarCliente = async (req, res) => {
    try {
        res.status(200).json("actualizarCliente");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const eliminarCliente = async (req, res) => {
    try {
        res.status(200).json("eliminarCliente");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const RegistrarCliente = async (req, res) => {
    try {
        const {
        firstname, 
        lastname, 
        email, 
        phone, 
        client_type, 
        birth_date, 
        password
        } = req.body;
        const newUser = new Cliente({
            firstname,
            lastname,
            email,
            phone,
            client_type,
            birth_date,
            password,
        });

        res.status(200).json({token});
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// Funcion para guardar registro de detalle del estudio
const registrarDetalleEstudio = async (req, res) => {
    const { idCliente } = req.params;
    const cliente = await Cliente.findById(idCliente);
    try {
        const {
            respuesta_1,
            respuesta_2,
            respuesta_3,
            respuesta_4,
            respuesta_5,
            respuesta_6,
            respuesta_7,
            respuesta_8,
            respuesta_9,
        } = req.body;
        const detalleEstudio = new DetalleEstudio({
            respuesta_1,
            respuesta_2,
            respuesta_3,
            respuesta_4,
            respuesta_5,
            respuesta_6,
            respuesta_7,
            respuesta_8,
            respuesta_9,
        });
        const detalleEstudioAlmacenado = await detalleEstudio.save();

        res.status(200).json({
            cliente: cliente,
            detalleEstudio: detalleEstudioAlmacenado,
        });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export {
    RegistrarCliente,
    obtenerClientes,
    obtenerCliente,
    agregarCliente,
    actualizarCliente,
    eliminarCliente,
    registrarDetalleEstudio
};
