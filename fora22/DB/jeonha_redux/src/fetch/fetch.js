jeonhaUrl = 'http://localhost:4000'

// ----------------------------------------------------------------------------------------------
// signUP
bodySignUP ={
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
// signUP

