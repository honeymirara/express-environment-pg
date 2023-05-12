const express = require("express");

let route = express.Router();

route.get('/', (req, res) => {
    res.send('hello');
})

module.exports = route;