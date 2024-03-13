import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config({
  path: "./config/config.env",
});

const app = express();
app.use(morgan("dev"));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
