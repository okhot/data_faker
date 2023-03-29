const express = require("express")
const userSchema = require("../models/userSchema")
const { newUser } = require("../newUser")
const router = express.Router()

router.get('/', (req, res) => {
    const id = req.query.id

    res.send(newUser(id))
})


module.exports = router