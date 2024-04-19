"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createError = require("http-errors");
const express_1 = __importDefault(require("express"));
const path = require("path");
const cors = require("cors");
let mysql = require("mysql2");
const app = (0, express_1.default)();
const post = process.env.PORT;
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();
const appRouter = require("./routes/app");
app.use("/api", appRouter);
const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "23051996",
    database: "sakila",
});
con.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!!!");
});
app.listen(post, () => {
    console.log(`[server]: Server is running at http://localhost:`);
});
