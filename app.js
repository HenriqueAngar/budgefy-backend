const express = require('express');
const app = express();

const rtProdutos = require('./routes/produtos')

app.use('/produtos', rtProdutos)

app.use('/tst', (req, res, next) => {

    res.status(200).send({
        mensagem: 'FUNCIONOU!'
    });
});

module.exports = app