const { pool } = require("../db");

async function getAllDataDB() {
    const client = await pool.connect()

    const sql = `SELECT * FROM environment`

    const result = (await client.query(sql)).rows;

    return result;
};

async function getDataByIdDB(id) {
    const client = await pool.connect();
    const sql = `SELECT * FROM environment WHERE id = $1`;
    const result = (await client.query(sql, [id])).rows;
    return result;
};

async function createDB(label, category, priority) {
    const client = await pool.connect();
    const sql = `INSERT INTO environment(label, category, priority) values ($1, $2, $3) returning *`;
    const result = (await client.query(sql, [label, category, priority])).rows;
    return result;
};


async function updateDB(label, category, priority, id) {
    const client = await pool.connect();
    const sql = `UPDATE environment SET label = $1, category = $2, priority = $3 WHERE id = $4 returning *`;
    const result = (await client.query(sql, [label, category, priority, id])).rows;
    return result;
}

async function deleteData(id) {
    const client = await pool.connect();
    const sql = `DELETE FROM environment WHERE id = $1 returning * `
    const result = (await client.query(sql, [id])).rows;
    return result;
};


module.exports = { getAllDataDB, getDataByIdDB, createDB, updateDB, deleteData }
