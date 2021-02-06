const jeonhaUrl = 'http://localhost:4000'

// ----------------------------------------------------------------------------------------------
// signUP
const bodySignUP ={
    userWebId = 'fora22',
    userName = '팽대원',
    pw = '1234',
    phoneNum = '01011112222',
    carId = '11가 1111'
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
    console.log(JSON.parse(data));
})

// ----------------------------------------------------------------------------------------------
// signIn

const bodySignIn ={
    userWebId = 'fora22',
    pw = '1234',
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
    console.log(JSON.parse(data));
})


