import { Router } from "express";
import {
  obtenerAdministradores,
  obtenerAdministrador,
  agregarAdministrador,
  actualizarAdministrador,
  eliminarAdministrador,
} from "../controllers/administradorController.js";

const router = Router();

router.route("/").get(obtenerAdministradores).post(agregarAdministrador);
router
  .route("/:id")
  .get(obtenerAdministrador)
  .put(actualizarAdministrador)
  .delete(eliminarAdministrador);

export default router;
