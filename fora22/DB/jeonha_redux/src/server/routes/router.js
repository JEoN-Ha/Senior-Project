
const express = require('express');
const router = express.Router();
const db = require('../dbconnection');

// ----------------------------------------------------------------------------------------------
// signUP
router.post('/signUp', (req, res) => {
    const userwebid = `'${req.body.userWebId}'`;
    const username = `'${req.body.userName}'`;
    const pw = `'${req.body.pw}'`;
    const phonenum = `'${req.body.phoneNum}'`;
    const carid = `'${req.body.carId}'`;

    const sqlCodeToUserTable = `
    insert into usertable(UserWebId, UserName, PW, PhoneNum)
    values (${userwebid}, ${username}, ${pw}, ${carid})    
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
    
    const sqlCodeToCarTable = `
    insert into car(CarWebId, CarId)
    values (${userwebid}, ${carid})    
    `;
    
    db.query(sqlCodeToCarTable, (err, rows) => {
        if(err) {
           dbError = false; 
        } 
    })

    if (idOverlap && pwOverlap && dbError) {
        res.statusCode = 200;
    } else {
        res.statusCode = 400;
        res.send([
            idOverlap,
            pwOverlap,
            dbError
        ])
    }
})
// ----------------------------------------------------------------------------------------------
// signIn
router.post('/signIn', (req, res) => {
    const userwebid = `'${req.body.userWebId}'`;
    const pw = `'${req.body.pw}'`;

    const sqlCodeToUserTable = `
    select UserWebId, PW from usertable
    where UserWebId = ${userwebid}
    `;
    let idOverlap = true;
    let pwOverlap = true;
    let dbError = true;

    db.query(sqlCodeToUserTable, (err, rows) => {
        const idCheck = rows.UserWebId === userwebid;
        const pwCheck = rows.PW === pw;

        if(idCheck && pwCheck) {
           res.statusCode = 200;
        } else {
            res.statusCode = 400;
        }
    })
    
    const sqlCodeToCarTable = `
    insert into car(CarWebId, CarId)
    values (${userwebid}, ${carid})    
    `;
    
    db.query(sqlCodeToCarTable, (err, rows) => {
        if(err) {
           dbError = false; 
        } 
    })

    if (idOverlap && pwOverlap && dbError) {
        res.statusCode = 200;
    } else {
        res.statusCode = 400;
        res.send([
            idOverlap,
            pwOverlap,
            dbError
        ])
    }
})

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

router.post('/insertData', (req, res) => {
    const userwebid = `'${req.body.UserWebId}'`;
    const username = `'${req.body.UserName}'`;
    const pw = `'${req.body.PW}'`;
    const phonenum = `'${req.body.PhoneNum}'`;

    // const sqlCode = `insert into usertable(UserWebId, UserName, PW, PhoneNum) 
    // values (${userwebid}, ${username}, ${pw}, ${phonenum});`;
    const sqlCode = `update usertable set UserName = '강백백구'
    where UserWebId = ${userwebid};`;
    db.query(sqlCode, (err, rows) => {
        if(err) {
            console.log(`query error: ${err}}`);
        }
    })
    const sqlCode2 = `select * from usertable`;
    db.query(sqlCode2, (err, rows) => {
        if(err) {
            console.log(`query error: ${err}}`);
        }
    })

})

module.exports = router;