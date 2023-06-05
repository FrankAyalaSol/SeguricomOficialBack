// import Administrador from "../models/AdministradorModel.js";

const obtenerAdministradores = async (req, res) => {
    try {
        res.status(200).json("obtenerAdministradores");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const obtenerAdministrador = async (req, res) => {
    try {
        res.status(200).json("obtenerAdministrador");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const agregarAdministrador = async (req, res) => {
    try {
        res.status(200).json("agregarAdministrador");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const actualizarAdministrador = async (req, res) => {
    try {
        res.status(200).json("actualizarAdministrador");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const eliminarAdministrador = async (req, res) => {
    try {
        res.status(200).json("eliminarAdministrador");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export {
    obtenerAdministradores,
    obtenerAdministrador,
    agregarAdministrador,
    actualizarAdministrador,
    eliminarAdministrador,
};
