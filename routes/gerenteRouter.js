import { Router } from "express";
import {
  // obtenerClientes,
  // obtenerCliente,
  registrarDetalleEstudio,
  visualizarEspecialista,
  asignarEspecialistaCliente
} from "../controllers/gerenteController.js";

const router = Router();

// router.route("/").get(obtenerClientes);
// router.route("/:idCliente").get(obtenerCliente, obtenerEspecialistas).post(obtenerEspecialista,asignarEspecialistaCliente)
router.post("/clientes/:idCliente", registrarDetalleEstudio)
router.post("/clientes/:idCliente/especialistas/:idEspecialista", asignarEspecialistaCliente);
router.get("/especialistas/:id", visualizarEspecialista)


export default router;
