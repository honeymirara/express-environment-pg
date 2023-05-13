const pool = require("../db");

async function getAllDataDB() {
    const client = await SecurityPolicyViolationEvent.connect()
    const sql = `SELECT * FROM environment`
    const result = (await client.query(sql)).rows;
    return result;
};

module.exports = {getAllDataDB}
