const express = require("express");
const { isValidEnvironmentId, isValidBody } = require('../helper/validation');
const { getAllData, getDataById, create, update, deleteById } = require('../service/environment.service');
const { buildResponse } = require("../helper/buildResponse");

let route = express.Router();

route.get('/', async (req, res) => {
    let data = await getAllData();
    res.send(data);
});

route.get('/:id', isValidEnvironmentId, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getDataById(id);
        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});

route.post('/', isValidEnvironmentId, isValidBody, async (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const data = await create(label, category, priority);
        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});

route.put('/:id', isValidEnvironmentId, isValidBody, async (req, res) => {
    try {
        const { id } = req.params;
        const { label, category, priority } = req.body;
        const data = await update(label, category, priority, id);
        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
})





module.exports = route;