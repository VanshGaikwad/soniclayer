const express = require('express')
const cookieParser = require('cookie-parser')

const app = express();
// middle-ware
app.use(express.json());
app.use(cookieParser());

module.exports = app;
