const express = require('express');
const app = express();

// API routes
const index = require('./routes/index');
const clientsRoute = require('./routes/clients.routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.use(index);
app.use('/api/', clientsRoute);


module.exports = app;