import express from "express";
import { config } from "dotenv";
import { dbConnect } from "./config/dbConnect.js";

config();
const app = express();
app.use(express.json())

//router
import { router } from "./routes/blog.js";
app.use("/api",router);




dbConnect();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("sucessfully server stared listening",PORT);
});
