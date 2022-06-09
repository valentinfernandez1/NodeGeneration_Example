const { Router } = require("express");
const { getAll, getOneById, saveOne, updateOneById, deleteOneById } = require("../../Controllers/bookController")

const router = Router();

router.get("/book", getAll);
router.get("/book/:id", getOneById);
router.post("/book", saveOne);
router.put("/book/:id", updateOneById);
router.delete("/book/:id", deleteOneById);

module.exports = router;