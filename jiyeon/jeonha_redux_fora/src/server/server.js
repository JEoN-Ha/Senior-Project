const express = require('express');
const router = require('./routes/router');
const app = express();
const PORT = process.env.PORT||4000;

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors())
// app.use(cors({origin: "http://localhost:4000"}))
 
app.use('/', router);

app.listen(PORT, () => {
    console.log(`check :${PORT}`);
})