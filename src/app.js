const express = require('express');
const app = express();

// API routes
const index = require('./routes/index');
const clientsRoute = require('./routes/clients.routes');
const transactionRoute = require('./routes/transactions.routes') 

app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.use(index);
app.use('/api/', clientsRoute);
app.use('/api/', transactionRoute)


module.exports = app;