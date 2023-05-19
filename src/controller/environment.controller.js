const express = require("express");
const { getAllData, getDataById, create, update, deleteById } = require('../service/environment.service');

let route = express.Router();

route.get('/', async (req, res) => {
    let data = await getAllData();
    res.send(data);
});

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getDataById(id);
        res.status(200).send(data);
    } catch (err) {
        res.send(err.message);
    }
});

route.post('/', async (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const data = await create(label, category, priority);
        res.status(200).send(data);
    } catch (err) {
        res.send(err.message);
    }
});



route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteById(id);
        res.status(200).send(data);
    } catch (err) {
        res.send(err.message);
    }

});



module.exports = route;