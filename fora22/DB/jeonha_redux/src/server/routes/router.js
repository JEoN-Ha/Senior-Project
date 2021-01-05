const { response } = require('express');
const express = require('express');
const { request } = require('http');
const os = require('os');
const router = express.Router();
const db = require('../dbconnection');



router.get('/api/getUsername', (request, response, next) => {
    response.send({username: os.userInfo().username});
})

router.get('/getData', (request, response) => {
    db.query("select * from inventory", (err, rows) => {
        if(!err) {
            response.send(rows);
        } else {
            console.log(`query error: ${err}}`);

            response.send(err);
        }
    })
})

module.exports = router;