const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router');

//create app
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
//router
router(app);
//create server
http.createServer(app).listen(3090);
console.log('listen on 3090');
