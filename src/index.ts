const createError = require("http-errors");
import express, { Express, Request, Response } from "express";
import AppRouter from "./routes/app";
const path = require("path");
const cors = require("cors");
let mysql = require("mysql2");
const app = express();
const post = process.env.PORT;
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();

app.use("/api", AppRouter);

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "23051996",
  database: "sakila",
});

con.connect(function (err: any) {
  if (err) throw err;
  console.log("Connected!!!");
});

app.listen(post, () => {
  console.log(`[server]: Server is running at http://localhost:`);
});
