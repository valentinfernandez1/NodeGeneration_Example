const { Router } = require("express");
const { getAll, getOneById, saveOne, updateOneById, deleteOneById } = require("../../Controllers/genreController")

const router = Router();

router.get("/genre", getAll);
router.get("/genre/:id", getOneById);
router.post("/genre", saveOne);
router.put("/genre/:id", updateOneById);
router.delete("/genre/:id", deleteOneById);

module.exports = router;