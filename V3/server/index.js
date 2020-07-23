const express = require("express");
const app = express();
require("dotenv").config();

const api = require("./routes/api");

app.use(express.json());
app.use("/api",api);


app.listen(process.env.PORT,() => {
    console.log(`Server is Open : ${process.env.PORT} port`);
});