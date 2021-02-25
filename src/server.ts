import express from "express";
import { Request, Response } from "express";
import "./database";
import { router } from "./routes";
// import 'reflect-metadata';

const app = express()
const PORT = 8000;

app.use(express.json())
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`)
})