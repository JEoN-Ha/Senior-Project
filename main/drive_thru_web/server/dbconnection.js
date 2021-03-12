const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'milkthistle.mysql.database.azure.com',
    user: 'toeic@milkthistle',
    password: 'Jeonha12#',
    database: 'untactdt',
    port: 3306,
    ssl: false
})

module.exports = connection;