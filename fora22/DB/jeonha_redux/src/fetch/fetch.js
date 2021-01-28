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
    if (res.text() === '200') {
        console.log('Success!');
    } else if(res.text() === '400') {
        console.log('Failed!');
    }
}

// ----------------------------------------------------------------------------------------------
// signUP

