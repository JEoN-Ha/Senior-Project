// 'use strict';
// // import router from '../server/routes/router';
// const db = require('./dbConnection');
// /**
//  * update orderstate to mark `deleted` from basket
//  *
//  * userWebId String user's id that inputed when sign up
//  * menuNo Integer id number of menu
//  * returns Object
//  **/
// exports.cancelOrderFromBasketPOST = function(userWebId,menuNo) {
//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = { };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }


// /**
//  * update orderstate to mark `deleted` from OrderList
//  *
//  * userWebId String user's id that inputed when sign up
//  * returns Object
//  **/
// exports.cancelOrderPOST = function(userWebId) {
//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = { };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }


// /**
//  * Get Menu API
//  *
//  * returns inline_response_200
//  **/
// exports.getMenuDataGET = function() {

//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     const sqlCode = `select * from menuboard;`;
//     db.query(sqlCode, (err, rows) => {
//         const dbData = JSON.parse(JSON.stringify(rows));
//         // if (!err) {
//         //     res.status(200).json({
//         //         menu: dbData,
//         //         isError: false,
//         //         explainError: null
//         //     })
//         // } else {
//         //     res.status(400).json({
//         //         menu: null,
//         //         isError: true,
//         //         explainError: err
//         //     })
//         // }
//     })
//     examples['application/json'] = dbData;
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve(
//         // router.get('/getMenuData', (req, res) => {
//     //     const sqlCode = `select * from menuboard;`;
//     //     db.query(sqlCode, (err, rows) => {
//     //         const dbData = JSON.parse(JSON.stringify(rows));
//     //         if (!err) {
//     //             res.status(200).json({
//     //                 menu: dbData,
//     //                 isError: false,
//     //                 explainError: null
//     //             })
//     //         } else {
//     //             res.status(400).json({
//     //                 menu: null,
//     //                 isError: true,
//     //                 explainError: err
//     //             })
//     //         }
//     //     })
//     // })
//     );
//     }
//   });
// }


// /**
//  * put something to Basket before the order
//  *
//  * orderToMenu_MenuNo Integer menu number
//  * orderWebId String user Web ID
//  * wEBCarId String Car id that user inputed when order
//  * orderPayment Integer payment
//  * menuNo Integer id number of menu
//  * menuCount Integer quantity of menus users ordered
//  * returns inline_response_200_1
//  **/
// exports.insertIntoBasketPOST = function(orderToMenu_MenuNo,orderWebId,wEBCarId,orderPayment,menuNo,menuCount) {
//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = {
//   "OrderWebId" : "OrderWebId",
//   "MenuCount" : 2,
//   "Price" : 7,
//   "MenuNo" : 5,
//   "OrderToMenu_OrderNo" : 0,
//   "WEBCarId" : 6,
//   "OrderPayment" : 5,
//   "OrderToMenu_MenuNo" : "OrderToMenu_MenuNo",
//   "OrderState" : 1
// };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }


// /**
//  * to check the order-list
//  *
//  * returns inline_response_200_2
//  **/
// exports.orderGET = function() {
//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = {
//   "UserName" : "UserName",
//   "MenuCount" : 6,
//   "PhoneNum" : "PhoneNum",
//   "OrderPayment" : 1,
//   "OrderToMenu_MenuNo" : 0,
//   "carId" : "carId"
// };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }


// /**
//  * clicked `paying`
//  *
//  * orderState Integer to note which state is it now
//  * returns inline_response_200_3
//  **/
// exports.payingPOST = function(orderState) {
//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = {
//   "OrderState" : 0
// };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }


// /**
//  * post ID & Password from DB to compare DB's and Web's
//  *
//  * userWebId String user's id that inputed when sign up
//  * pW String user's password that inputed when sign up
//  * returns Object
//  **/
// exports.signInPOST = function(userWebId,pW) {
//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = { };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }


// /**
//  * Post Member's Data API
//  *
//  * userWebId String users membership ID
//  * userName String user name
//  * pW String user's password
//  * phoneNum String user's phone number
//  * carId String user's car ID
//  * returns Object
//  **/
// exports.signUPPOST = function(userWebId,userName,pW,phoneNum,carId) {
//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = { };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }


const express = require('express');
const router = express.Router();
const db = require('./dbconnection');

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
        if (err) {
            idOverlap = false;
            pwOverlap = false;
        }
    })

    const sqlCodeToCarTable = `
    insert into car(CarWebId, CarId)
    values (${userwebid}, ${carid});`;

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
// getBasket
router.post('/getBasket', (req, res) => {
    const userwebid = `'${req.body.userWebId}'`;


    const sqlCodeToBasketTable = `
    select * from baskettable
    where (BasketId = ${userwebid} and
        BasketState = 0);`;


    db.query(sqlCodeToBasketTable, (err, rows) => {
        const allBasketData = JSON.parse(JSON.stringify(rows));
        if (!err) {
            res.status(200).json({
                basket: allBasketData,
                isError: false,
                explainError: null
            })
        } else {
            res.status(400).json({
                basket: null,
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

    let orderTableError = true;
    let getInsertIdError = true;
    const currentOrderNo = 0;

    const sqlCodeToOrderTable = `
    insert into ordertable(OrderWebId, WebCarId, OrderPayment)
    values (${userwebid}, ${carid}, ${payment});`;

    const sqlCodeGetInsertId = `
    select * from ordertable
    order by OrderNo DESC limit 1;`;


    db.query(sqlCodeToOrderTable, (err, results) => {
        if (err) {
            orderTableError = false;
        }
    })

    db.query(sqlCodeGetInsertId, (err, getId) => {
        const dbData = JSON.parse(JSON.stringify(getId));
        if (err) {
            getInsertIdError = false;
        }
        currentOrderNo = dbData[0].OrderNo;
    })

    const sqlCodeToBasketTable = `
    select BasketMenuNo, BasketMenuCount from baskettable
    where (BasketId = ${userwebid} and 
        BasketState = 0);`;

    let basketData = [];
    let basketError = true;

    db.query(sqlCodeToBasketTable, (err, rows) => {
        basketData = JSON.parse(JSON.stringify(rows));
        // console.log(dbData);
        for (let i = 0; i < basketData.length(); i++) {
            let sqlCodeToOrderToMenu = `
            insert into ordertomenu(OrderToMenu_OrderNo, OrderToMenu_MenuNo, MenuCount)
            values(${currentOrderNo}, ${basketData[i].BasketMenuNo}, ${BasketMenuCount});`;
            db.query(sqlCodeToOrderToMenu, (err, rowResults) => {
                if (err) {
                    basketError = basketError && false;
                }
            })
        }

    })


    const sqlCodeToUpdateOrderToMenu = `
    update ordertomenu
    set OrderState = 2
    where OrderToMenu_OrderNo = ${currentOrderNo};`;

    let orderToMenuError = true;

    db.query(sqlCodeToUpdateOrderToMenu, (err, rows) => {
        if (err) {
            orderToMenuError = false;
        }
    })


    if (orderTableError && getInsertIdError && basketError && orderToMenuError) {
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
// cancelOrder

router.post('/cancelOrder', (req, res) => {
    const orderno = `'${req.body.orderNo}'`;

    const sqlCodeToOrderToMenu = `
    update ordertomenu
    set OrderState = 5
    where OrderToMenu_OrderNo = ${orderno} AND OrderState = 2;`;
    let orderToMenuError = true;

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

    let orderNoData = [];
    let orderData = [];
    db.query(sqlCodeGetOrderNoToOrderToMenu, (err, rows) => {
        if (err) {
            getOrderNoToOrderToMenu = false;
        } else {
            orderNoData = JSON.parse(JSON.stringify(rows));
            let getOrderMenuError = true;

            for (let i = 0; i < orderNoData.length(); i++) {
                let sqlCodeGetOrderToMenu = `
            select * from ordertomenu
            where (OrderToMenu_OrderNo = ${orderNoData[i].OrderNo});`;

                db.query(sqlCodeGetOrderToMenu, (err, rowResults) => {
                    if (err) {
                        getOrderMenuError = getOrderMenuError && false;
                    } else {
                        orderData.push(rowResults); // for 문 돌 때마다 OrderNo에 따른 주문 정보가 나오는데 그것을 OrderData 리스트에 푸쉬함
                        // 즉 orderData 변수안에는 구조가 다음과 같음
                        /* 
                        [
                            [{}, {}, {},...],       -> OrderNo가 1인 것에 대한 주문 정보
                            [{}, {}, {},...],       -> OrderNo가 3인 것에 대한 주문 정보
                            [{}, {}, {},...],       -> OrderNo가 7인 것에 대한 주문 정보
                            [{}, {}, {},...]        -> OrderNo가 10인 것에 대한 주문 정보
                        ]
                        */
                    }
                })
            }
        }
    })

    if (getOrderNoToOrderToMenu && getOrderMenuError) {
        res.status(200).json({
            isError: false,
            orderAllData: orderDataq
        })
    } else {
        res.status(400).json({
            isError: true,
            orderAllData: null
        })
    }
})


module.exports = router;
