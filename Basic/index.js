import express from "express";
import { config } from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser"
import { dbConnect } from "./src/config/dbConnect.js";
import userroute from "./src/routes/userRoutes.js";

config();
const app = express();
// app.use() // used for the middleware
app.use(cors({
    origin: "*",
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

dbConnect() // Actually this async method this returns the promiseso we can use .then method
// .then()
// .catch()// this is for dbConnect promise

//api Mouting
app.use("/api/v1",userroute)


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("sucessfully server stared listening", PORT);
});
