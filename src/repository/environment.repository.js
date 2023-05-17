const pool = require("../db");

async function getAllDataDB() {
    const client = await pool.connect()

    const sql = `SELECT * FROM environment`

    const result = (await client.query(sql)).rows;

    return result;
};

async function getDataById(id){
    const client = await pool.connect();
    const sql = `SELECT * FROM environment WHERE id = $1`;
    const result = (await client.query(sql), [id]).rows;
    return result;
};

async function createDB(label, category, priority){
    const client = await pool.connect();
    const sql = `INSERT INTO environment(label, category, priority) values ($1, $2, $3) returning *`;
    const result = (await client.query(sql), [label, category, priority]).rows;
    return result;
}


module.exports = {getAllDataDB, getDataById, createDB}
