const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "PostgreSQLpassword",
    host: "localhost",
    port: 5432,
    database: 'restrict_api'
})

module.exports = pool