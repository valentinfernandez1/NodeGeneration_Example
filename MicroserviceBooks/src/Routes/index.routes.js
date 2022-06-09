/**
 * Este archivo index permite separar por namespaces las rutas 
 * y poder importarlas mucho mas facil y generico luego.
 */

//Entity Routes
const authorRoute = require("./entityResources/authorRoute")
const bookInstanceRoute = require("./entityResources/bookInstanceRoute")
const bookRoute = require('./entityResources/bookRoute')
const genreRoute = require("./entityResources/genreRoute")

//v1Routes
const login = require("./v1Resources/login")


module.exports = {
  entityResources: [authorRoute, bookInstanceRoute, bookRoute, genreRoute],
  v1Resources:[login],
}