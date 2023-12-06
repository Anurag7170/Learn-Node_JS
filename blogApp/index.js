import express from "express";
import { config } from "dotenv";
import { dbConnect } from "./config/dbConnect.js";
dbConnect();
config();
const app = express();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("sucessfully server stared listening");
});
