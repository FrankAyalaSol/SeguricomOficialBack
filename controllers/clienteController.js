// import Cliente from "../models/ClienteModel.js";
import DetalleEstudio from "../models/DetalleEstudio.js";
import ClienteModel from "../models/ClienteModel.js";
import generarJWT from "../helpers/GenerarJWT.js";

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

const registrar = async (req, res) => {
    const { correo_electronico } = req.body;
    const existeUsuario = await ClienteModel.findOne({ correo_electronico });

    if (existeUsuario) {
        const error = new Error("El usuario ya existe");
        return res.status(400).json({ msg: error.message });
    }
    try {
        const cliente = new ClienteModel(req.body);
        const clienteGuardado = await cliente.save();

        res.status(200).json(clienteGuardado);
    } catch (error) {
        console.log(error);
    }
};

const autenticar = async (req, res) => {
    const { correo_electronico, password } = req.body;
    const cliente = await ClienteModel.findOne({ correo_electronico });

    // Verifica si el usuario existe en la BD
    if (!cliente) {
        const error = new Error("El usuario no existe");
        return res.status(404).json({ msg: error.message });
    }

    // Verifica si el password es correcto
    // "comrpobarPassword()" ESTA DEFINIDO EN EL MODELO
    if (await cliente.comprobarPassword(password)) {
        console.log(cliente);
        res.json({
            _id: cliente._id,
            nombre: cliente.nombre,
            correo_electronico: cliente.correo_electronico,
            rol: cliente.rol,
            token: generarJWT(cliente.id),
        });
    } else {
        const error = new Error("El password es incorrecto");
        res.status(404).json({ msg: error.message });
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
    registrar,
    autenticar,
    obtenerClientes,
    obtenerCliente,
    agregarCliente,
    actualizarCliente,
    eliminarCliente,
    registrarDetalleEstudio
};
