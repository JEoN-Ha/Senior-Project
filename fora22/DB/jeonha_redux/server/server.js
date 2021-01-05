const express = require('express');
const path = require('path');
const router = require('./routes/router');

const app = express();
const PORT = process.env.PORT||3000;

// app.use(express.static(path.join(__dirname, '..', 'public/')));

app.use('/', router);

app.listen(PORT, () => {
    console.log(`check :${PORT}`);
})