const express = require("express");
const app = express();
const mascot = require("./routes/mascota");
const owner = require("./routes/owners")
const users = require("./routes/users");
const path = require('path');

const port = 3000;

app.use(express.json());
app.use('/static', express.static(path.join(__dirname + 'public')))


app.use("/mascots", mascota);
app.use("/owners", owner);
app.use("/", users);


app.listen(port,()=>{
    console.log(`Your server is working on http://localhost:${port}`);
})