const jeonhaUrl = 'http://localhost:4000'

// ----------------------------------------------------------------------------------------------
// signUP
const bodySignUp = JSON.stringify({
    userWebId: 'bb',
    userName: '팽대원',
    pw: '3222',
    phoneNum: '01011112222',
    carId: '11가 1111'
});

fetch(jeonhaUrl + '/signUp', {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: bodySignUp
})
    .then(res => {
        if (res.status == 200) {
            // 정상 작동
            console.log('Success!');
        } else if (res.status == 400) {
            // 실패시
            console.log('Failed!');
        }
        return res.json();
    })
    .then(data => {
        // 아이디 중복, 패스워드 중복, 그 외 에러
        const overlapId = data.id;
        const overlapPw = data.pw;
        const errorDB = data.db;

        // 확인을 위한 console.log
        // console.log(overlapId, overlapPw, errorDB);
    })

// ----------------------------------------------------------------------------------------------
// signIn

const bodySignIn = JSON.stringify({
    userWebId: 'fora22',
    pw: '1111',
});

fetch(jeonhaUrl + '/signIn', {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: bodySignIn
})
    .then(res => {
        if (res.status === 200) {
            // 정상 작동
            console.log('Success!');
        } else if (res.status === 400) {
            // 실패시
            console.log('Failed!');
        }
        return res.json();
    })
    .then(data => {
        // id, pw 성공여부 변수
        const idSuccess = data.id;
        const pwSuccess = data.pw;

        // 확인을 위한 console.log
        // console.log(idSuccess, pwSuccess);
    })

// ----------------------------------------------------------------------------------------------
// getMenuData
fetch(jeonhaUrl + '/getMenuData')
    .then(res => {
        if (res.status === 200) {
            // 정상 작동
            console.log('Success!');
        } else if (res.status === 400) {
            // 실패시
            console.log('Failed!');
        }
        return res.json();
    })
    .then(data => {
        const allMenuData = data.menu; // 모든 음식 메뉴 정보: 리스트 안에 객체 형태 [{}, {}, {}, ...]
        const getMenuIsError = data.isError;
        const whatIsError = data.explainError;

        // 확인을 위한 console.log
        // console.log(allMenuData, getMenuIsError, whatIsError);
    });

// ----------------------------------------------------------------------------------------------
// insertIntoBasket
const bodyInsertIntoBasket = JSON.stringify({
    userWebId: 'fora',
    menuNo: 1,
    menuCount: 3
})

fetch(jeonhaUrl + '/insertIntoBasket', {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: bodyInsertIntoBasket
}).then(res => {
    if (res.status === 200) {
        // 정상 작동
        console.log('Success!');
    } else if (res.status === 400) {
        // 실패시
        console.log('Failed!');
    }
    return res.json();
})
    .then(data => {
        const getMenuIsError = data.isError;
        const whatIsError = data.explainError;

        // 확인을 위한 console.log
        // if (getMenuIsError) {
        //     console.log(whatIsError);
        // }
    })
// ----------------------------------------------------------------------------------------------
// updateFromBasket

const bodyUpdateFromBasket = JSON.stringify({
    userWebId: 'fora',
    menuNo: 1,
    menuCount: 3,
    newMenuCount: 4
})

fetch(jeonhaUrl + '/updateFromBasket', {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: bodyUpdateFromBasket
}).then(res => {
    if (res.status === 200) {
        // 정상 작동
        console.log('Success!');
    } else if (res.status === 400) {
        // 실패시
        console.log('Failed!');
    }
    return res.json();
})
    .then(data => {
        const getMenuIsError = data.isError;
        const whatIsError = data.explainError;

        // 확인을 위한 console.log
        // if (getMenuIsError) {
        //     console.log(whatIsError);
        // }
    })

// ----------------------------------------------------------------------------------------------
// deleteFromBasket

const bodyDeleteFromBasket = JSON.stringify({
    userWebId: 'fora',
    menuNo: 1,
    menuCount: 3
})

fetch(jeonhaUrl + '/updateFromBasket', {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: bodyDeleteFromBasket
}).then(res => {
    if (res.status === 200) {
        // 정상 작동
        console.log('Success!');
    } else if (res.status === 400) {
        // 실패시
        console.log('Failed!');
    }
    return res.json();
})
    .then(data => {
        const getMenuIsError = data.isError;
        const whatIsError = data.explainError;

        // 확인을 위한 console.log
        // if (getMenuIsError) {
        //     console.log(whatIsError);
        // }
    })

// ----------------------------------------------------------------------------------------------
// getBasket

const bodygetBasket = JSON.stringify({
    userWebId: 'fora',
})

fetch(jeonhaUrl + '/getBasket', {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: bodygetBasket
}).then(res => {
    if (res.status === 200) {
        // 정상 작동
        console.log('Success!');
    } else if (res.status === 400) {
        // 실패시
        console.log('Failed!');
    }
    return res.json();
})
    .then(data => {
        const allBasket = data.basket;
        const getMenuIsError = data.isError;
        const whatIsError = data.explainError;

        // 확인을 위한 console.log
        // if (getMenuIsError) {
        //     console.log(whatIsError);
        // }
    })

// ----------------------------------------------------------------------------------------------
// order
const bodyOrder = JSON.stringify({
    userWebId: 'fora22',
    carId: '11가 1111',
    payment: 1
});

fetch(jeonhaUrl + '/order', {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: bodyOrder
})
    .then(res => {
        if (res.status === 200) {
            // 정상 작동
            console.log('Success!');
        } else if (res.status === 400) {
            // 실패시
            console.log('Failed!');
        }
        return res.json();
    })
    .then(data => {
        const orderIsError = data.isError;
        const userOrderNo = data.orderNo; // Front애서 배열로 OrderNo를 저장해야 함(결제 주문이 여러개일 수도 있으므로)
        // 확인을 위한 console.log
        console.log(orderIsError, userOrderNo);
    })


// ----------------------------------------------------------------------------------------------
// cancelOrder
const bodyCancelOrder = JSON.stringify({
    orderNo: 10
});

fetch(jeonhaUrl + '/cancelOrder', {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: bodyCancelOrder
})
    .then(res => {
        if (res.status === 200) {
            // 정상 작동
            console.log('Success!');
        } else if (res.status === 400) {
            // 실패시
            console.log('Failed!');
        }
        return res.json();
    })
    .then(data => {
        const cancelIsError = data.isError;
        // 확인을 위한 console.log
        console.log(cancelIsError);
    })

// ----------------------------------------------------------------------------------------------
// getOrder
const bodyGetOrder = JSON.stringify({
    userWebId: 'fora22'
});

fetch(jeonhaUrl + '/getOrder', {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: bodyGetOrder
})
    .then(res => {
        if (res.status === 200) {
            // 정상 작동
            console.log('Success!');
        } else if (res.status === 400) {
            // 실패시
            console.log('Failed!');
        }
        return res.json();
    })
    .then(data => {
        const isError = data.isError;
        const orderHistory = data.orderAllData;
        // 확인을 위한 console.log
        console.log(isError);
        console.log(orderHistory);
    })