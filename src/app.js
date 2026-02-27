const express = require('express')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes');

const app = express();
// middle-ware
app.use(express.json());
app.use(cookieParser());
// prefix for api
app.use('./api/auth',authRoutes);
module.exports = app;
