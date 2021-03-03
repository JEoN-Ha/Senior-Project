const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'yellow-postit.mysql.database.azure.com',
    user: 'theSecretChamber@yellow-postit',
    password: 'Jeonha12#',
    database: 'untact_drivethru_db',
    port: 3306,
    ssl: false
})

module.exports = connection;