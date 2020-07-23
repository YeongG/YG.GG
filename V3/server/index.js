require("dotenv").config();
const express = require("express");
const app = express();

app.get("/",(req, res) => {
    
})

app.listen(process.env.PORT,() => {
    console.log(`Server is Open : ${process.env.PORT} port`);
});