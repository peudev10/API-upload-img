const mysql = require('mysql2/promise');

require('dotenv').config();

const connection = mysql.createPool({
    host: process.env.MSQL_HOST,
    user: process.env.MSQL_USER,
    password: process.env.MSQL_PASSWORD,
    database: process.env.MSQL_DB
});

connection.execute('CREATE TABLE IF NOT EXISTS img (id INT AUTO_INCREMENT PRIMARY KEY, titulo VARCHAR(255), descricao TEXT, img BLOB)');

module.exports = connection;