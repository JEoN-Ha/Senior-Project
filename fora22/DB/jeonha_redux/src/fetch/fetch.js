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
.then((res) => {
if (res.json().status === '200') {

} else {
    error
}
})

// ----------------------------------------------------------------------------------------------
// signUP

fetch('/fora22')
    .then(response => response.text())
    .then(data => {
        console.log(JSON.parse(data));
        this.setState({ userName: data });
    });