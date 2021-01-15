const { res } = require('express');
const express = require('express');
const { request } = require('http');
const os = require('os');
const router = express.Router();
const db = require('../dbconnection');
const cors = require('cors');


router.get('/getData', cors(), (req, res) => {
    
    db.query("select * from usertable;", (err, rows) => {
        if(!err) {
            console.log(rows);
            res.send(rows);
        } else {
            console.log(`query error: ${err}}`);

            res.send(err);
        }
    })
})

module.exports = router;