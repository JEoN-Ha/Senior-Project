const jeonhaUrl = 'http://localhost:4000'

// ----------------------------------------------------------------------------------------------
// signUP
const bodySignUP ={
    userWebId: 'fora22',
    userName: '팽대원',
    pw: '1234',
    phoneNum: '01011112222',
    carId: '11가 1111'
}

fetch(jeonhaUrl + '/signUP', {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: bodySignUP
})
.then(res => {
    if (res.status === 200) {
        // 정상 작동
        console.log('Success!');
    } else if(res.status === 400) {
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
// signIn

const bodySignIn ={
    userWebId: 'fora22',
    pw: '1234',
}

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
    } else if(res.status === 400) {
        // 실패시
        console.log('Failed!');
        res.text()
    }
})
.then(data => {
    const idSuccess = JSON.parse(data)[0];
    const pwSuccess = JSON.parse(data)[1];
    // id, pw 성공여부 변수
})

// ----------------------------------------------------------------------------------------------
// getMenuData
fetch(jeonhaUrl + '/getData')
    .then(response =>
        response.text()
    )
    .then(data => {
        // 모든 음식 메뉴 정보: 객체 형태
        const allMenuData = JSON.parse(data);
    });

// ----------------------------------------------------------------------------------------------
// insertIntoBasketByCar
const bodyInsertIntoBasket ={
    userWebId: 'fora22',
    carId: '11가 1111',
    menuNo: 1,
    menuCount: 3,
    price: 3500
}

fetch(jeonhaUrl + '/signUP', {
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
    } else if(res.status === 400) {
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
const bodyOrder ={
    orderNo: 10
}

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
    } else if(res.status === 400) {
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
const bodyPaying ={
    orderNo: 10
}

fetch(jeonhaUrl + '/order', {
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
    } else if(res.status === 400) {
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
const bodyCancelOrderFromBasket ={
    menuNo: 1,
    orderNo: 10
}

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
    } else if(res.status === 400) {
        // 실패시
        console.log('Failed!');
        res.text()
    }
})
.then(data => {
    // 아이디 중복, 패스워드 중복, 그 외 에러
    const errorDB = JSON.parse(data)[0];
})