// import Cliente from "../models/ClienteModel.js";

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

export {
    obtenerClientes,
    obtenerCliente,
    agregarCliente,
    actualizarCliente,
    eliminarCliente,
};
