
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

    db.query(sqlCodeToUserTable, (err, rows) => {
        const idCheck = rows.UserWebId === userwebid;
        const pwCheck = rows.PW === pw;
        
        if(idCheck && pwCheck) {
           res.statusCode = 200;
        } else {
            res.statusCode = 400;
            res.send([idCheck, pwCheck]);
        }
    })
})
// ----------------------------------------------------------------------------------------------
// getMenuData
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

// 여기 밑으로부턴 논의가 필요함
// ----------------------------------------------------------------------------------------------
// insertIntoBasketByCar
router.post('/insertIntoBasketByCar', (req, res) => {
    const userwebid = `'${req.body.userWebId}'`;
    const carid = `'${req.body.carId}'`;
    const menuno = `'${req.body.menuNo}'`;
    const menucount = `'${req.body.menuCount}'`;
    const price = `'${req.body.price}'`;

    const sqlCodeToOrderTable = `
    insert into ordertable(OrderWebId, WebCarId)
    values (${userwebid}, ${carid})
    `;

    `select OrderNo from ordertable where OrderWebId == ${userwebid}
    order by OrderNo desc limit 1`



    const sqlCodeToOrderToMenu = `
    insert into ordertomenu(OrderToMenu_MenuNo, MenuCount)
    values (${menuno}, ${menucount})
    `;

    let orderError = true;
    let orderToMenuError = true;

    db.query(sqlCodeToOrderTable, (err, rows) => {
        if(err) {
           orderError = false;
        } 
    })
    
    db.query(sqlCodeToOrderToMenu, (err, rows) => {
        if(err) {
           orderToMenuError = false; 
        } 
    })

    if (orderError && orderToMenuError) {
        res.statusCode = 200;
    } else {
        res.statusCode = 400;
        res.send([
            orderError,
            orderToMenuError,
        ])
    }
})
// ----------------------------------------------------------------------------------------------
// order
router.post('/order', (req, res) => {
    const orderno = `'${req.body.orderNo}'`;

    const sqlCodeToOrderTable = `
    select OrderWebId, WebCarId, OrderPayment
    from ordertable
    where OrderNo = ${orderno}
    `;

    const sqlCodeToOrderToMenu = `
    select OrderWebId, WebCarId, OrderPayment
    from ordertable
    where OrderNo = ${orderno}
    `;

    let orderError = true;
    let orderToMenuError = true;

    db.query(sqlCodeToOrderTable, (err, rows) => {
        if(err) {
           orderError = false;
        } 
    })
    
    db.query(sqlCodeToOrderToMenu, (err, rows) => {
        if(err) {
           orderToMenuError = false; 
        } 
    })

    if (orderError && orderToMenuError) {
        res.statusCode = 200;
    } else {
        res.statusCode = 400;
        res.send([
            orderError,
            orderToMenuError,
        ])
    }
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