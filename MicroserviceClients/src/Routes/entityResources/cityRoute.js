const { Router } = require("express");
const { getAll, getOneById, saveOne, updateOneById, deleteOneById } = require("../../Controllers/cityController")

const router = Router();

router.get("/city", getAll);
router.get("/city/:id", getOneById);
router.post("/city", saveOne);
router.put("/city/:id", updateOneById);
router.delete("/city/:id", deleteOneById);

module.exports = router;