const express = require('express');
const app = express();
const morgan = require('morgan')

const rtProdutos = require('./routes/produtos')

app.use(morgan('dev'))
app.use('/produtos', rtProdutos)

module.exports = app