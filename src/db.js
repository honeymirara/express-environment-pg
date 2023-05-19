const { Pool } = require('pg')

const pool = new Pool({
    password: 'Boriska474',
    port: '5432',
    host: 'localhost',
    user: 'postgres',
    database: 'skills'
})

module.exports = {pool}