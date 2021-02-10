const express = require('express');
const router = express.Router();
const db = require('../dbconnection');

router.get('/getMenuData', (req, res) => {
    
    const sqlCode = `select * from menuboard`;
    db.query(sqlCode, (err, rows) => {
        if(!err) {
            
            res.send(rows);
        } else {
            console.log(`query error: ${err}}`);

            res.send(err);
        }
    })
})

module.exports = router;