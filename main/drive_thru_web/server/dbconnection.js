const mysql = require('mysql');
// const connection = mysql.createPool({
//     host: 'fora22jeonhafirstdb.mysql.database.azure.com',
//     user: 'fora22@fora22jeonhafirstdb',
//     password: 'Jeonha12#',
//     database: 'fora22jeonhafirstdb',
//     port: 3306,
//     ssl: false
// })

const connection = mysql.createPool({
    host: 'armful-server.mysql.database.azure.com',
    user: 'armful@armful-server',
    password: 'Jeonha12#',
    database: 'untactdt',
    port: 3306,
    ssl: false
})

module.exports = connection;