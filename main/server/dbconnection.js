const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'jeonhadatabase.mysql.database.azure.com',
    user: 'jiyeoni@jeonhadatabase',
    password: 'Jeonha12#',
    database: 'untactdt',
    port: 3306,
    ssl: false
})

module.exports = connection;