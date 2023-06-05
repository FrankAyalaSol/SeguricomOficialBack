import { Router } from "express";
import {
  obtenerClientes,
  obtenerCliente,
  agregarCliente,
  actualizarCliente,
  eliminarCliente,
} from "../controllers/clienteController.js";

const router = Router();

router.route("/").get(obtenerClientes).post(agregarCliente);
router
  .route("/:id")
  .get(obtenerCliente)
  .put(actualizarCliente)
  .delete(eliminarCliente);

export default router;
