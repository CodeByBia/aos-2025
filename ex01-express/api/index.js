import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Bem-vindo ao Express de Beatriz")
})

app.listen(4000)