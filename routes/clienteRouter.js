import { Router } from "express";
import {
  registrar,
  autenticar,
  obtenerClientes,
  obtenerCliente,
  agregarCliente,
  actualizarCliente,
  eliminarCliente,
  registrarDetalleEstudio,
  registrarDetalleVisita
} from "../controllers/clienteController.js";

const router = Router();

router.route("/").get(obtenerClientes).post(agregarCliente);
router
  .route("/:id")
  .get(obtenerCliente)
  .put(actualizarCliente)
  .delete(eliminarCliente);
  router.post("/registrar",registrar)
  router.post("/autenticar",autenticar)
  router.post("/:idCliente", registrarDetalleEstudio)
  router.post("/clientes/:idCliente/especialistasClientes/:idEspecialistaCliente", registrarDetalleVisita)

export default router;
