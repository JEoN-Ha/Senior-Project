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
        console.log(overlapId, overlapPw, errorDB);
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
    console.log(idSuccess, pwSuccess);
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
        const whatIsError = data.err;
        // console.log(allMenuData, getMenuIsError, whatIsError);
      });

// ----------------------------------------------------------------------------------------------
// insertIntoBasketByCar
const bodyInsertIntoBasket = JSON.stringify({
    userWebId: 'fora22',
    carId: '11가 1111',
    menuNo: 1,
    menuCount: 3,
    price: 3500
});

fetch(jeonhaUrl + '/insertIntoBasketByCar', {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: bodyInsertIntoBasket
})
    .then(res => {
        if (res.status === 200) {
            // 정상 작동
            console.log('Success!');
        } else if (res.status === 400) {
            // 실패시
            console.log('Failed!');
            res.text()
        }
    })
    .then(data => {
        // 아이디 중복, 패스워드 중복, 그 외 에러
        const overlapId = JSON.parse(data)[0];
        const overlapPw = JSON.parse(data)[1];
        const errorDB = JSON.parse(data)[2];
    })
// ----------------------------------------------------------------------------------------------
// order
const bodyOrder = JSON.stringify({
    orderNo: 10
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
            res.text()
        }
    })
    .then(data => {
        // 아이디 중복, 패스워드 중복, 그 외 에러
        const errorOrder = JSON.parse(data)[0];
        const errorOrderToMenu = JSON.parse(data)[1];
    })

// ----------------------------------------------------------------------------------------------
// paying
const bodyPaying = JSON.stringify({
    orderNo: 10
});

fetch(jeonhaUrl + '/paying', {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: bodyPaying
})
    .then(res => {
        if (res.status === 200) {
            // 정상 작동
            console.log('Success!');
        } else if (res.status === 400) {
            // 실패시
            console.log('Failed!');
            res.text()
        }
    })
    .then(data => {
        // 아이디 중복, 패스워드 중복, 그 외 에러
        const errorDB = JSON.parse(data)[0];
    })

// ----------------------------------------------------------------------------------------------
// CancelOrderFromBasket
const bodyCancelOrderFromBasket = JSON.stringify({
    menuNo: 1,
    orderNo: 10
});

fetch(jeonhaUrl + '/CancelOrderFromBasket', {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: bodyCancelOrderFromBasket
})
    .then(res => {
        if (res.status === 200) {
            // 정상 작동
            console.log('Success!');
        } else if (res.status === 400) {
            // 실패시
            console.log('Failed!');
            res.text()
        }
    })
    .then(data => {
        // 아이디 중복, 패스워드 중복, 그 외 에러
        const errorDB = JSON.parse(data)[0];
    })