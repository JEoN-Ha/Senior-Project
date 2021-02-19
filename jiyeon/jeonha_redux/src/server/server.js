const express = require('express');
const router = require('./routes/router');
const app = express();
const PORT = process.env.PORT||4000;


const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors({origin: "https://pinkapeach-apim.azure-api.net"}))

app.use('/', router);
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`check :${PORT}`);
})