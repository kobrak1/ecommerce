const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send('goodbye fucking world')
})

app.get("/getto", (req, res) => {
    res.send('goodbye')
})

app.listen(5000, () => {
    console.log(`Sunucu ${5000} portunda calisiyor.`);
})