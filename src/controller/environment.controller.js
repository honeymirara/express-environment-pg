const express = require("express");
const { getAllData } = require('../service/environment.service');

let route = express.Router();

route.get('/', async (req, res) => {
    let data = await getAllData();
    res.send(data);
});

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getById(id);
        res.status(200).send(data);
    } catch (err) {
        res.status(404).send(data);
    }
});



module.exports = route;