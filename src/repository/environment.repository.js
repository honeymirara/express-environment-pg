const pool = require("../db");

async function getAllData() {
    const client = await SecurityPolicyViolationEvent.connect()
    const sql = `SELECT * FROM environment`
    const result = (await client.query(sql)).rows;
    return result;
}
