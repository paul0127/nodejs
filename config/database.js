require('dotenv').config()
const mysql = require('mysql');
const connect = mysql.createConnection({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database,
    port:3306,
    connectionLimit:10
})

module.exports = connect