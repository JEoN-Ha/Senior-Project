
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
    const carid_first = `'${req.body.carId_first}'`;
    const carid_mid = `'${req.body.carId_mid}'`;
    const carid_end = `'${req.body.carId_end}'`;

    const sqlCodeToUserTable = `
    insert into usertable(UserWebId, UserName, PW, PhoneNum)
    values (${userwebid}, ${username}, ${pw}, ${phonenum});`;
    let idOverlap = true;
    let pwOverlap = true;
    let dbError = true;

    db.query(sqlCodeToUserTable, (err, rows) => {
        if (err) {
            idOverlap = false;
            pwOverlap = false;
        }
    })

    const sqlCodeToCarTable = `
    insert into car(CarWebId, CarId_first, CarId_mid, CarId_end)
    values (${userwebid}, ${carid_first}, ${carid_mid}, ${carid_end});`;

    db.query(sqlCodeToCarTable, (err, rows) => {
        if (err) {
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

        if (idCheck && pwCheck) {
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
        if (!err) {
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
        if (!err) {
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
        if (!err) {
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
        if (!err) {
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
// getUserInfo
router.post('/getUserInfo', (req, res) => {
    const userwebid = `'${req.body.userWebId}'`;

    const sqlCodeToUserTable = `
    select * from usertable
    where (UserWebId = ${userwebid});`;

    db.query(sqlCodeToUserTable, (err, rows) => {
        const userData = JSON.parse(JSON.stringify(rows));
        let sqlCodeToCar = `
        select * from car
        where (CarWebId = ${userwebid});`;
        db.query(sqlCodeToCar, (err,results) => {
            const carData = JSON.parse(JSON.stringify(results))
            if (!err) {
                res.status(200).json({
                    user: userData,
                    car: carData,
                    isError: false,
                    explainError: null
                })
            }  
        })
    })
})
// ----------------------------------------------------------------------------------------------
// getBasket
router.post('/getBasket', (req, res) => {
    const userwebid = `'${req.body.userWebId}'`;
    let allBasketData = [];
    let allBasketMenuData = [];
    let basketMenuData = [];

    let getBasketError = true;

    const sqlCodeToBasketTable = `
    select * from baskettable
    where (BasketId = ${userwebid} and
        BasketState = 0);`;

    db.query(sqlCodeToBasketTable, (err, rows) => {
        allBasketData = JSON.parse(JSON.stringify(rows));

        for (let i = 0; i < allBasketData.length; i++) {
            let sqlCodeToMenuboard = `
            select * from menuboard where (MenuNo = ${allBasketData[i].BasketMenuNo});`;
            db.query(sqlCodeToMenuboard, (error, results) => {
                basketMenuData = JSON.parse(JSON.stringify(results));
                // basketMenuData 는 [{}] 꼴이기 때문에 0번째 원소를 넣어주면 됨
                allBasketMenuData.push(basketMenuData[0]);
                if (i === allBasketData.length - 1) {
                    if (!err) {
                        res.status(200).json({
                            basket: allBasketData,
                            menu: allBasketMenuData,
                            isError: false,
                            explainError: null
                        })
                    }
                }
            })
        }   
    })
})
// ----------------------------------------------------------------------------------------------
// getLastOrderNo
router.get('/getLastOrderNo', (req, res) => {

    let getInsertIdError = true;
    let currentOrderNo = 0;

    const sqlCodeGetInsertId = `
    select * from ordertable
    order by OrderNo DESC limit 1;`;

    db.query(sqlCodeGetInsertId, (err, getId) => {
        let dbData = JSON.parse(JSON.stringify(getId));
        if (err) {
            getInsertIdError = false;
        }
        console.log(dbData[0].OrderNo);
        currentOrderNo = dbData[0].OrderNo;

        if (getInsertIdError) {
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
})

// ----------------------------------------------------------------------------------------------
// order
router.post('/order', (req, res) => {
    const orderNo = `'${req.body.orderNo}'`;
    const userwebid = `'${req.body.userWebId}'`;
    const carid_first = `'${req.body.carid_first}'`;
    const carid_mid = `'${req.body.carid_mid}'`;
    const carid_end = `'${req.body.carid_end}'`;
    const payment = `${req.body.payment}`;

    console.log(orderNo);

    let orderTableError = true;
    let getInsertIdError = true;
    let currentOrderNo = 0;

    const sqlCodeToOrderTable = `
    insert into ordertable(OrderNo,OrderWebId, WebCarId_first, WebCarId_mid, WebCarId_end, OrderPayment)
    values (${orderNo},${userwebid}, ${carid_first}, ${carid_mid}, ${carid_end}, ${payment});`;

    db.query(sqlCodeToOrderTable, (err, results) => {
        if (err) {
            orderTableError = false;
        }
        const sqlCodeToBasketTable = `
        select BasketMenuNo, BasketMenuCount from baskettable
        where (BasketId = ${userwebid} and 
            BasketState = 0);`;

        let basketData = [];
        let basketError = true;

        db.query(sqlCodeToBasketTable, (err, rows) => {
            basketData = JSON.parse(JSON.stringify(rows));
            console.log(rows);
            for (let i = 0; i < basketData.length; i++) {
                let sqlCodeToOrderToMenu = `
                    insert into ordertomenu(OrderToMenu_OrderNo, OrderToMenu_MenuNo,OrderState, MenuCount)
                    values(${orderNo}, ${basketData[i].BasketMenuNo},${2}, ${basketData[i].BasketMenuCount});`;
                console.log(basketData[0].BasketMenuNo);
                db.query(sqlCodeToOrderToMenu, (err, rowResults) => {
                    if (err) {
                        basketError = basketError && false;
                    }
                    if (i == basketData.length -1){
                        const sqlCodeUpdateBasketState =  `
                        update baskettable set BasketState = ${1} where ((BasketId = ${userwebid}) && BasketState = ${0})`

                        let basketStateError = true;

                        db.query(sqlCodeUpdateBasketState, (err,rows) => {
                            if (err) {
                                basketStateError = false;
                            }
                            if (basketStateError && getInsertIdError && basketError) {
                                res.status(200).json({
                                    isError: false
                                })
                            } else {
                                res.status(400).json({
                                    isError: true
                                })
                            }
                        })
                        
                    }
                })
            }
        })
    })
})

// ----------------------------------------------------------------------------------------------
// cancelOrder

router.post('/cancelOrder', (req, res) => {
    const orderno = `'${req.body.orderNo}'`;

    const sqlCodeToOrderToMenu = `
    update ordertomenu
    set OrderState = 5
    where OrderToMenu_OrderNo = ${orderno} AND OrderState = 2;`;
    let orderToMenuError = true;

    console.log(orderno);

    db.query(sqlCodeToOrderToMenu, (err, rows) => {
        if (err) {
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

// ----------------------------------------------------------------------------------------------
// getOrder

router.post('/getOrder', (req, res) => {
    const userwebid = `'${req.body.userWebId}'`;

    const sqlCodeGetOrderNoToOrderToMenu = `
    select OrderNo from ordertable
    where (OrderWebId = ${userwebid});`;
    let getOrderNoToOrderToMenu = true;
    let getOrderMenuError = true;

    let orderNoData = [];
    let orderData = [];
    db.query(sqlCodeGetOrderNoToOrderToMenu, (err, rows) => {
        if (err) {
            getOrderNoToOrderToMenu = false;
        } else {
            orderNoData = JSON.parse(JSON.stringify(rows));
            for (let i = 0; i < orderNoData.length; i++) {
                let sqlCodeGetOrderToMenu = `
                select * from ordertomenu
                where (OrderToMenu_OrderNo = ${orderNoData[i].OrderNo});`;

                db.query(sqlCodeGetOrderToMenu, (err, rowResults) => {
                    orderData.push(rowResults); // for 문 돌 때마다 OrderNo에 따른 주문 정보가 나오는데 그것을 OrderData 리스트에 푸쉬함
                    if(i===orderNoData.length-1) {
                        if(!err) {
                            res.status(200).json({
                                isError: false,
                                orderAllData: orderData
                            })
                        }
                    }
                })
            }
        }
    })
})


module.exports = router;