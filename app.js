const express = require('express');
const app = express();
const morgan = require('morgan')
app.use(morgan('dev'))

const rtProdutos = require('./routes/produtos')
const rtConsultas = require('./routes/consultas')

app.use('/produtos', rtProdutos)
app.use('/consultas', rtConsultas)

module.exports = app