import 'dotenv/config';
import express from "express";

console.log('Hello Node.js project.');
console.log(process.env.MY_SECRET);
console


const app = express();

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(3000, () => {
    console.log("Example app listening");});