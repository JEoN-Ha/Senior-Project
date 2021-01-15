
const express = require('express');
const router = express.Router();
const db = require('../dbconnection');

router.get('/getData', (req, res) => {
    
    const sqlCode = `select * from usertable`;
    db.query(sqlCode, (err, rows) => {
        if(!err) {
            
            res.send(rows);
        } else {
            console.log(`query error: ${err}}`);

            res.send(err);
        }
    })
})

const data = "'fora22'";

router.get('/fora22', (req, res) => {
    const sqlCode = `select * from usertable Where UserWebId = ${data}`;
    db.query(sqlCode, (err, rows) => {
        if(!err) {
            
            res.send(rows);
        } else {
            console.log(`query error: ${err}}`);

            res.send(err);
        }
    })
})

// router.post('/insertData', (req, res) => {
//     const userwebid = `'${req.body.UserWebId}'`;
//     const username = `'${req.body.UserName}'`;
//     const pw = `'${req.body.PW}'`;
//     const phonenum = `'${req.body.PhoneNum}'`;

//     // const sqlCode = `insert into usertable(UserWebId, UserName, PW, PhoneNum) 
//     // values (${userwebid}, ${username}, ${pw}, ${phonenum});`;
//     const sqlCode = `update usertable set UserName = '강백백구'
//     where UserWebId = ${userwebid};`;
//     db.query(sqlCode, (err, rows) => {
//         if(err) {
//             console.log(`query error: ${err}}`);
//         }
//     })
//     const sqlCode2 = `select * from usertable`;
//     db.query(sqlCode2, (err, rows) => {
//         if(err) {
//             console.log(`query error: ${err}}`);
//         }
//     })

// })

module.exports = router;