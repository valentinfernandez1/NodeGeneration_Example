import express from "express";
import logger from "morgan";
import Cors from "cors";
import routes from "./src/Routes/index.routes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

//Settings
const port = process.env.PORT || 3000;
app.set("port", port);

// Middlewares
app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(Cors()); //Dependiendo si se selecciono la capacidad CORS

//Routes
app.get("/", (req, res) => res.sendStatus(200));

app.get("/health", (req, res, next) => {
  res.status(200);
  res.send("ok");
});

//acceso a ruta de entidades
for (const route of routes.entityResources) {
  app.use("/api/entity", route);
}

export default app;
