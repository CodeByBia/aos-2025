import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Bem-vindo ao Express de Beatriz Martins")
})

app.listen(3000)