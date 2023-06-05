// import Gerente from "../models/GerenteModel.js";
import Especialista from "../models/EspecialistaModel.js";
import Cliente from "../models/ClienteModel.js";
import EspecialistaCliente from "../models/EspecialistaClienteModel.js";
import DetalleEstudio from "../models/DetalleEstudio.js";

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

// Funcion para visualizar especialista
const visualizarEspecialista = async (req, res) => {
    try {
        const { nombreEspecialista } = req.body;
        const clienteAsignado = await EspecialistaCliente.find(
            nombreEspecialista
        );

        res.status(200).json(clienteAsignado);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// Funcion para asignar un especialista a un cliente
const asignarEspecialistaCliente = async (req, res) => {
    try {
        const { idCliente, idEspecialista } = req.params;
        const { fecha, hora } = req.body;
        const cliente = await Cliente.findById(idCliente).select("nombre");
        const especialista = await Especialista.findById(idEspecialista).select(
            "nombre"
        );
        const nombreCliente = cliente.nombre;
        const nombreEspecialista = especialista.nombre;
        const especialistaCliente = new EspecialistaCliente({
            nombreCliente,
            nombreEspecialista,
            fecha,
            hora,
        });

        await especialistaCliente.save();

        res.status(200).json(especialistaCliente);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export {
    // obtenerClientes,
    // obtenerCliente,
    registrarDetalleEstudio,
    visualizarEspecialista,
    asignarEspecialistaCliente,
};
