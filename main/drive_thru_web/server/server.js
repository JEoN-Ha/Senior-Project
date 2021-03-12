const express = require('express');
const router = require('./routes/router');
const app = express();
const PORT = process.env.PORT||4000;

const bodyParser = require('body-parser');
const cors = require('cors');

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
  
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.options('*', cors()) // include before other routes
app.use(cors());
// app.use(cors({origin: "http://localhost:4000"}))
 
app.use('/', router);

app.listen(PORT, () => {
    console.log(`check :${PORT}`);
})