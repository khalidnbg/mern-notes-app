import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import notes from "./routes/notes.js";
import { connectDB } from "./config/db.js";

dotenv.config({
  path: "./config/config.env",
});

const app = express();
app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/notes", notes);

app.listen(3000, () => {
  try {
    connectDB();
    console.log("connection established to database");
  } catch (error) {
    console.log(error.message);
  }
});
