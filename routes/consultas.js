const express = require('express');
const router = express.Router();

const sql = require('mssql')
const db = require('../db');

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


router.get('/', async (req, res, next) => {

    await db.connect();

    try {
        const { classe, tipo, descri } = req.query;
        let info = 'SELECT * FROM COMPOSIN';
        if (classe || tipo || descri) {
            info += ' WHERE';
            if (classe) {
                info += ` CLASSE = '${classe}' AND`;
            }
            if (tipo) {
                info += ` TIPO = '${tipo}' AND`;
            }
            if (descri) {
                info += ` DESCRI LIKE '%${descri}%' AND`;
            }
            info = info.slice(0, -4);
        }

        const result = await db.request().query(info);

        res.status(200).send({
            message: 'Request succeed',
            values: result.recordset
        });

        db.release();
    } catch (error) {
        console.log('Request Failed:', error);
        throw error;
    }
})

router.post('/', async (req, res, next) => {

    await db.connect()

    try {
        const data = req.query
        const info = `INSERT INTO USERS (NAME, LOGIN, PASS) VALUES (@name, @login, @pass)`;

        const request = db.request()
            .input('name', sql.VarChar, data.name)
            .input('login', sql.VarChar, data.login)
            .input('pass', sql.VarChar, data.pass);

        await request.query(info);

        res.status(201).send({
            message: "Request succeed",
            values: data
        })

        db.release()

    } catch (error) {
        console.log("Request Failed: ", error)
        throw error
    }
})

module.exports = router

router.patch('/', async (req, res, next) => {

    await db.connect()

    try {
        const { idsis, name, login, pass } = req.query;
        const info = `UPDATE USERS SET NAME = '${name}', LOGIN = '${login}', PASS = '${pass}' WHERE IDSIS = ${idsis}`;
        await db.request().query(info);
        db.release();

        res.status(200).send({
            message: 'Request Suceed',
            values: req.query
        });
    } catch (error) {
        console.log("Request Failed: ", error)
        throw error
    }
});