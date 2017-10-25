//MODULES
const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//CONFIG
const config = require('./config/keys');
const router = require('./router');

mongoose.connect(config.mongoURI);

//create app
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
//router
router(app);
//create server
const port = process.env.PORT || 3090;
http.createServer(app).listen(port);
console.log('listen on ' + port);
