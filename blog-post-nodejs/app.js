import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://admin:LbenH1jDn9igKqZa@cluster0.0qizfif.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(3000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 3000")
  )
  .catch((err) => console.log(err));
