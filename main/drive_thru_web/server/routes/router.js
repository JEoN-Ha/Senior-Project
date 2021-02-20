
const express = require('express');
const router = express.Router();
const db = require('../dbconnection');

// ----------------------------------------------------------------------------------------------
// signUp
router.post('/signUp', (req, res) => {
    const userwebid = `'${req.body.userWebId}'`;
    const username = `'${req.body.userName}'`;
    const pw = `'${req.body.pw}'`;
    const phonenum = `'${req.body.phoneNum}'`;
    const carid = `'${req.body.carId}'`;

    const sqlCodeToUserTable = `
    insert into usertable(UserWebId, UserName, PW, PhoneNum)
    values (${userwebid}, ${username}, ${pw}, ${phonenum});`;
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
    values (${userwebid}, ${carid});`;
    
    db.query(sqlCodeToCarTable, (err, rows) => {
        if(err) {
           dbError = false; 
        } 
    })

    if (idOverlap && pwOverlap && dbError) {
        res.status(200).json({
            id: idOverlap,
            pw: pwOverlap,
            db: dbError
        })
    } else {
        res.status(400).json({
            id: idOverlap,
            pw: pwOverlap,
            db: dbError
        })
    }
})
// ----------------------------------------------------------------------------------------------
// signIn
router.post('/signIn', (req, res) => {
    const userwebidSql = `'${req.body.userWebId}'`;

    const userwebid = `${req.body.userWebId}`;
    const pw = `${req.body.pw}`;

    const sqlCodeToUserTable = `
    select UserWebId, PW from usertable
    where UserWebId = ${userwebidSql};`;

    db.query(sqlCodeToUserTable, (err, rows) => {
        const dbData = JSON.parse(JSON.stringify(rows));
        
        const idCheck = String(dbData[0].UserWebId) == userwebid;
        const pwCheck = String(dbData[0].PW) == pw;
        
        if(idCheck && pwCheck) {
            res.status(200).json({
                id: idCheck, 
                pw: pwCheck,
            })
        } else {
            res.status(400).json({
                id: idCheck, 
                pw: pwCheck
            })
        }
    })
    
})
// ----------------------------------------------------------------------------------------------
// getMenuData
router.get('/getMenuData', (req, res) => {
    const sqlCode = `select * from menuboard;`;
    db.query(sqlCode, (err, rows) => {
        const dbData = JSON.parse(JSON.stringify(rows));
        if(!err) {
            res.status(200).json({
                menu: dbData,
                isError: false,
                explainError: null
            })
        } else {
            res.status(400).json({
                menu: null,
                isError: true,
                explainError: err
            })
        }
    })
})

// ----------------------------------------------------------------------------------------------
// insertIntoBasket

router.post('/insertIntoBasket', (req, res) => {
    const userwebid = `'${req.body.userWebId}'`;
    const menuno = `${req.body.menuNo}`;
    const menucount = `${req.body.menuCount}`;

    const sqlCodeToBasketTable = `
    insert into baskettable(BasketId, BasketMenuNo, BasketMenuCount)
    values (${userwebid}, ${menuno}, ${menucount});`;

    db.query(sqlCodeToBasketTable, (err, rows) => {
        if(!err) {
            res.status(200).json({
                isError: false,
                explainError: null
            })
        } else {
            res.status(400).json({
                isError: true,
                explainError: err
            })
        }
    })    
})

// ----------------------------------------------------------------------------------------------
// updateFromBasket

router.post('/updateFromBasket', (req, res) => {
    const userwebid = `'${req.body.userWebId}'`;
    const menuno = `${req.body.menuNo}`;
    const menucount = `${req.body.menuCount}`;
    const newmenucount = `${req.body.newMenuCount}`;

    const sqlCodeToBasketTable = `
    update baskettable
    set BasetMenuCount = ${newmenucount}
    where (BasketId = ${userwebid} and 
        BasketMenuNo = ${menuno} and 
        BasketMenuCount = ${menucount});`;
    
    db.query(sqlCodeToBasketTable, (err, rows) => {
        if(!err) {
            res.status(200).json({
                isError: false,
                explainError: null
            })
        } else {
            res.status(400).json({
                isError: true,
                explainError: err
            })
        }
    })    
})

// ----------------------------------------------------------------------------------------------
// deleteFromBasket
router.post('/deleteFromBasket', (req, res) => {
    const userwebid = `'${req.body.userWebId}'`;
    const menuno = `${req.body.menuNo}`;
    const menucount = `${req.body.menuCount}`;

    const sqlCodeToBasketTable = `
    delete from baskettable
    where (BasketId = ${userwebid} and 
        BasketMenuNo = ${menuno} and 
        BasketMenuCount = ${menucount});`;

    db.query(sqlCodeToBasketTable, (err, rows) => {
        if(!err) {
            res.status(200).json({
                isError: false,
                explainError: null
            })
        } else {
            res.status(400).json({
                isError: true,
                explainError: err
            })
        }
    })    
})

// ----------------------------------------------------------------------------------------------
// order
router.post('/order', (req, res) => {
    const userwebid = `'${req.body.userWebId}'`;
    const carid = `'${req.body.carId}'`;
    const payment = `${req.body.payment}`;
    
    let orderTableError = false;
    let getInsertIdError = false;
    const currentOrderNo = 0;

    // const sqlCodeToOrderTable = `
    // insert into ordertable(OrderWebId, WebCarId, OrderPayment)
    // values (${userwebid}, ${carid}, ${payment});`;
    
    const sqlCodeGetInsertId = `
    select * from ordertable
    order by OrderNo DESC limit 1;`;
    // select OrderNo from ordertable last_insert_id();
    
    // db.query(sqlCodeToOrderTable, (err, results) => {
    //     if (err) {
    //         orderTableError = true;
    //     }
    // })

    db.query(sqlCodeGetInsertId, (err, getId) => {
        const dbData = JSON.parse(JSON.stringify(getId));
        if (err) {
            getInsertIdError = true;
        }
        currentOrderNo = dbData[0].OrderNo;
    })
    
    const sqlCodeToBasketTable = `
    select BasketMenuNo, BasketMenuCount from baskettable
    where (BasketId = ${userwebid} and 
        BasketState = 0);`;
    
    const basketData;
    let basketError = false;

    db.query(sqlCodeToBasketTable, (err, rows) => {
        basketData = JSON.parse(JSON.stringify(rows));
        // console.log(dbData);
        for(let i = 0; i < basketData.length(); i++) {
            const sqlCodeToOrderToMenu = `
            insert into ordertomenu(OrderToMenu_OrderNo, OrderToMenu_MenuNo, MenuCount)
            values(${currentOrderNo}, ${basketData[i].BasketMenuNo}, ${BasketMenuCount});`;
            db.query(sqlCodeToOrderToMenu, (err, rowResults) => {
                if (err) {
                    basketError = basketError && true;
                }
            })
        }
        
    })
    if (orderTableError && getInsertIdError && basketError) {
        res.status(200).json({
            isError: false,
            orderNo: currentOrderNo
        })
    } else {
        res.status(400).json({
            isError: true,
            orderNo: null
        })
    }
}) 



// ----------------------------------------------------------------------------------------------
// paying

router.post('/paying', (req, res) => {
    const orderno = `'${req.body.orderNo}'`;

    const sqlCodeToOrderToMenu = `
    update ordertomenu
    set OrderState = 2
    where OrderToMenu_OrderNo = ${orderno};`;
    let orderToMenuError = false;
    
    db.query(sqlCodeToOrderToMenu, (err, rows) => {
        if(err) {
           orderToMenuError = true; 
        } 
    })

    if (orderToMenuError) {
        res.status(200).json({
            isError: false
        })
    } else {
        res.status(400).json({
            isError: true
        })
    }
})


// ----------------------------------------------------------------------------------------------
// CancelOrder

router.post('/cancelOrder', (req, res) => {
    const orderno = `'${req.body.orderNo}'`;

    const sqlCodeToOrderToMenu = `
    update ordertomenu
    set OrderState = 5
    where OrderToMenu_OrderNo = ${orderno} AND OrderState = 2;`;
    let orderToMenuError = true;
    
    db.query(sqlCodeToOrderToMenu, (err, rows) => {
        if(err) {
           orderToMenuError = false; 
        } 
    })

    if (orderToMenuError) {
        res.status(200).json({
            isError: false
        })
    } else {
        res.status(400).json({
            isError: true
        })
    }
})

module.exports = router;