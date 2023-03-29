const bodyParser = require("body-parser");
const express = require("express");
const app = express()

console.log('Okay')
app.use(bodyParser.json());

const userRoute = require("./routes/user")

app.use('/users', userRoute)

app.listen(3000)