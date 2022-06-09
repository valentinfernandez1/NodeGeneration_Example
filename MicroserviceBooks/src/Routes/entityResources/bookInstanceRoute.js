const { Router } = require("express");
const { getAll, getOneById, saveOne, updateOneById, deleteOneById } = require("../../Controllers/bookInstanceController")

const router = Router();

router.get("/bookInstance", getAll);
router.get("/bookInstance/:id", getOneById);
router.post("/bookInstance", saveOne);
router.put("/bookInstance/:id", updateOneById);
router.delete("/bookInstance/:id", deleteOneById);

module.exports = router;