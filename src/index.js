import express from "express";
const app = express();
import { connectDb } from "./configs/db.config.js";
import indexMiddleware from "./middlewares/index.middleware.js";
import { configDotenv } from "dotenv";
configDotenv();
const PORT = process.env.PORT || 2112;

indexMiddleware(app);

app.listen(1001, () => {
  connectDb();
  console.log(`Server is currently running on port ${PORT}`);
});