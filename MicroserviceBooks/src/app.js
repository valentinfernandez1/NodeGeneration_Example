require("dotenv").config();

const express = require("express");
const logger = require('morgan');
const Cors = require("cors");
const {entityResources, v1Resources} = require("./Routes/index.routes")
const app = express();

//Settings
const port = process.env.PORT || 3000;
app.set("port", port);



// Middlewares
app.use( express.json() );
app.use(logger('dev'));
app.use( express.urlencoded({ extended: false }) );
app.use( Cors() ); //Dependiendo si se selecciono la capacidad CORS


//Routes
app.get("/", (req,res) => res.sendStatus(200) );

//acceso a ruta de entidades
for (const route of entityResources) {
  app.use("/api/entity", route);
}
//acceso a rutas de v1
//Permite definir multiples namespaces en los que se van a agregar las rutas definidas en sirius
for (const route of v1Resources) {
  app.use("/api/v1", route);
}

module.exports = app;
