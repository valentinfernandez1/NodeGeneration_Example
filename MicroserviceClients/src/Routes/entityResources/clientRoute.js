import { Router } from "express";
import clientController from "../../Controllers/clientController.js";

const router = Router();

/**
 * Las rutas de entidad cuentan con los metodos de CRUD
 * correspondientes a su modelo especifico, cualquier funcionalidad extra
 * es definida por el desarrollador dependiendo del modelo de negocio
 */

router.get("/client", clientController.getAll);
router.get("/client/:id", clientController.getOneById);
router.post("/client", clientController.saveOne);
router.put("/client/:id", clientController.updateOneById);
router.delete("/client/:id", clientController.deleteOneById);

export default router;
