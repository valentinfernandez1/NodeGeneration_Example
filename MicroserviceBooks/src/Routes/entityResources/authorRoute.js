const { Router } = require("express");
const { getAll, getOneById, saveOne, updateOneById, deleteOneById } = require("../../Controllers/authorController")

const router = Router();

/**
 * Las rutas de entidad cuentan con los metodos de CRUD 
 * correspondientes a su modelo especifico, cualquier funcionalidad extra 
 * es definida por el desarrollador dependiendo del modelo de negocio 
*/ 

router.get("/author", getAll);
router.get("/author/:id", getOneById);
router.post("/author", saveOne);
router.put("/author/:id", updateOneById);
router.delete("/author/:id", deleteOneById);

module.exports = router;