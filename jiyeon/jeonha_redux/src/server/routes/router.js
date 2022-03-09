const express = require('express');
const router = express.Router();
const db = require('../dbconnection');

router.post('/signUp', (req, res) => {
    const userwebid = `'${req.body.userWebId}'`;
    const username = `'${req.body.userName}'`;
    const pw = `'${req.body.pw}'`;
    const phonenum = `'${req.body.phoneNum}'`;
    const carid = `'${req.body.carId}'`;

    const sqlCodeToUserTable = `
    insert into usertable(UserWebId, UserName, PW, PhoneNum)
    values (${userwebid}, ${username}, ${pw}, ${phonenum})    
    `;
    let idOverlap = true;
    let pwOverlap = true;
    let dbError = true;

    db.query(sqlCodeToUserTable, (err, rows) => {
        if(err) {
           idOverlap = false; 
           pwOverlap = false;
        } 
    })
})


router.get('/getMenuData', (req, res) => {
    
    const sqlCode = `select * from menuboard`;
    db.query(sqlCode, (err, rows) => {
        if(!err) {
            res.statusCode = 200;
            res.send(rows);
        } else {
            console.log(`query error: ${err}}`);
            res.statusCode = 400;
            res.send(err);
        }
    })
})

module.exports = router;