const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'bluepiggibank.mysql.database.azure.com',
    user: 'manyoAloe@bluepiggibank',
    password: 'Jeonha12#',
    database: 'untact_drivethru_db',
    port: 3306,
    ssl: false
})

module.exports = connection;