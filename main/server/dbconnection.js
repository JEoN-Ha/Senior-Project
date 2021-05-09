const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'jeonhadb.mysql.database.azure.com',
    user: 'PaengGiReum@jeonhadb',
    password: 'Hanium!@#$',
    database: 'untactdt',
    port: 3306,
    ssl: false
})

module.exports = connection;