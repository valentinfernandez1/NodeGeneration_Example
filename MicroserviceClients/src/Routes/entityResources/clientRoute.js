const { Router } = require("express");
const { getAll, getOneById, saveOne, updateOneById, deleteOneById } = require("../../Controllers/clientController")

const router = Router();

/**
 * Las rutas de entidad cuentan con los metodos de CRUD 
 * correspondientes a su modelo especifico, cualquier funcionalidad extra 
 * es definida por el desarrollador dependiendo del modelo de negocio 
*/ 

router.get("/client", getAll);
router.get("/client/:id", getOneById);
router.post("/client", saveOne);
router.put("/client/:id", updateOneById);
router.delete("/client/:id", deleteOneById);

module.exports = router;