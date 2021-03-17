const express = require('express');
const router = require('./routes/router');
const app = express();
 const webSocketServer = require('websocket').server;
// const https = require('https');


const PORT = process.env.PORT||4000;


const bodyParser = require('body-parser');
const cors = require('cors');
  
const server = http.createServer();
server.listen(PORT,function(){
  let addr = "https://dtserver.azurewebsites.net"
  console.log("listening Success")
});
const wsServer = new webSocketServer({
  httpServer: server
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.options('*', cors()) // include before other routes
// app.use(cors());

app.use(cors());
 
app.use('/', router);

app.listen(PORT, () => {
    console.log(`check :${PORT}`);
})