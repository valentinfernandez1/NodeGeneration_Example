/**
 * Index permite separar por namespaces las rutas 
 * e importarlas mucho mas facil luego.
 */

//Entity Routes
const authorRoute = require("./entityResources/clientRoute")
const cityRoute = require("./entityResources/cityRoute")


module.exports = {
  entityResources: [authorRoute, cityRoute],
}