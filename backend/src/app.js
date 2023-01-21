const express = require('express');
const app = express();

//import routes
const instarout = require("./routs/rout")

//Router MIddlewares
app.use(express.json());
app.use('/', instarout);

module.exports = app;