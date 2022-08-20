import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import DbConnection from "./utils/db.js";

dotenv.config();

const mongoDB = process.env.MONGO_DB_URL;
DbConnection(mongoDB);

/* mongoose.connect(
  mongoDB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to mongoDB");
  }
); */

app.listen(app.get("port"), () => {
  console.log(`\n[ Server ]:http://localhost:${app.get("port")} \n`);
});
