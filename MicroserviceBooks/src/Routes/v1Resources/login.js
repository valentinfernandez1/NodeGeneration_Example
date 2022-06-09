const { Router } = require("express");

const router = Router();

/**
 * Para las rutas definidas en sirius pueden tener o no autenticacion indicada 
 * que agregara la dependencia de autenticacion con Auth0(FALTA TERMINAR) a la 
 * ruta con el metodo correspondiente 
*/

router.get("/login", /*requireAuth(),*/ (req, res)=>{res.send('NOT IMPLEMENTED: login get')});
router.get("/login/details/:id", (req, res)=>{res.send('NOT IMPLEMENTED: login getById')});
router.post("/login", (req, res)=>{res.send('NOT IMPLEMENTED: login post')});
router.put("/login/:id", (req, res)=>{res.send('NOT IMPLEMENTED: login put')});
router.delete("/login/:id", (req, res)=>{res.send('NOT IMPLEMENTED: login delete')});

module.exports = router;