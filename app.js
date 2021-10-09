const express = require("express");
const morgan = require("morgan");
const path = require("path");

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set(morgan("dev"));
app.use(express.static(path.join(__dirname, "/assets")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/result", (req, res) => {
    res.render("result");
})

app.listen(PORT, () => {
    console.log("4000 PORT WEB SERVER START");
});