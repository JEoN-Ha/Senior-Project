const express = require('express');
const path = require('path');
const os = require('os');
const router = require('./routes/router');

const app = express();
const PORT = process.env.PORT||4000;

app.use('/', router);

app.listen(PORT, () => {
    console.log(`check :${PORT}`);
})