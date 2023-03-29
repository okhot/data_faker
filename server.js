const express = require('express')
const app = express()
const {faker} = require("@faker-js/faker")

const randomName  = faker.name.fullName()

app.get("/", (req, res, next) => {
    res.send(randomName)
})

app.listen(3000)