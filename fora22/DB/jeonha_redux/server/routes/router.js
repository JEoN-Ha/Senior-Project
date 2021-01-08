const express = require('express');
const app = express();

const path = require('path');
const PORT = process.env.PORT||4000;
// const os = require('os');
// const router = express.Router();
const db = require('../dbconnection');

// const bodyParser = require('body-parser');

app.use((req, res, next) => {
    console.log('time : ', Date.now());
    next();
});

// app.use(app.json());

// app.get('/', (request, response, next) => {
//     response.send({username: os.userInfo().username});
// })

app.get('http://localhost:3000/', (request, response) => {
    db.query("select * from inventory", (err, rows) => {
        if(!err) {
            console.log(rows);
            response.send(rows);
        } else {
            console.log(`query error: ${err}}`);
            response.send(err);
        }
    })
})

app.listen(PORT, () => {
    console.log(`check :${PORT}`);
}) 

// module.exports = app;