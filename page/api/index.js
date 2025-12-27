import express from "express";
import connectDb from "./config/db.js";
import dotenv from 'dotenv'
import userRouter from "./router/userRouter.js";

dotenv.config()


const app = express();
app.use(express.json())
// app.use(express.urlencoded(true))

connectDb();


app.use('/api/user',userRouter);

app.listen(7000, (req, res) => {
  console.log("server is listing on port 7000");
});
