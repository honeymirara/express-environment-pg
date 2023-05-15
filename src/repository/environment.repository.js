const pool = require("../db");

async function getAllDataDB() {
    const client = await pool.connect()

    const sql = `SELECT * FROM environment`

    const result = (await client.query(sql)).rows;

    return result;
};

async function getById(id){
    const client = await pool.connect();
    const sql = `SELECT * FROM environment WHERE id = $1`;
    const result = (await client.query(sql), [id]).rows;
    return result;
};


module.exports = {getAllDataDB, getById}
