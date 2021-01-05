const express = require('express');
const path = require('path');
const os = require('os');
const router = require('./routes/router');

const app = express();
const PORT = process.env.PORT||4000;

app.use(express.static(path.join(__dirname, '..', 'public/')));

app.use('/', router);

app.get('/api/getUsername', function(request, respone, next) {
    respone.send({username: os.userInfo().username});
})


app.listen(PORT, () => {
    console.log(`check :${PORT}`);
})