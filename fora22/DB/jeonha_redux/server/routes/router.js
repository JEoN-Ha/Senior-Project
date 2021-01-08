const app = require('express')();
const PORT = process.env.PORT||4000;
// const os = require('os');
// const router = express.Router();
const db = require('../dbconnection');

const bodyParser = require('body-parser');


// app.use(app.json());

// app.get('/', (request, response, next) => {
//     response.send({username: os.userInfo().username});
// })

app.get('/', (request, response) => {
    db.query("select * from inventory", (err, rows) => {
        if(!err) {
            response.send(rows);
        } else {
            console.log(`query error: ${err}}`);
            response.send(err);
        }
    })
})

app.listen(PORT, () => {
    console.log(`check :${PORT}`);
}) 

module.exports = app;