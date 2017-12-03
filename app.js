const express    = require('express');
const bodyParser = require('body-parser');
const router     = require('./router');
const app        = express();
var   ampq       = require("./amqp-connect");
var   ampqC      = ampq.initialize();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.route(router.user.route).post(router.user.handler);
module.exports = app;




