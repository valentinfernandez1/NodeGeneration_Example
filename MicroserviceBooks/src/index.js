require('dotenv').config()

const app = require("./app");
const mongoose = require("mongoose");


//Conexion a Mongo
//La url de la base de datos va a estar definida en el archivo de configuracion aparte
const mongoDB = process.env.MONGO_DB_URL; 
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true}, ()=> {
  console.log("Connected to mongoDB");
});

app.listen(app.get("port"), () => {
    console.log(`\n [ Server ]:http://localhost:${app.get("port")} \n`);
});

