const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

    res.status(200).send({
        mensagem: 'Estamos na rota de produtos com get'
    })
})

router.get("/:id_produto", (req, res, next) => {

    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            id: id,
            jeba: "Isso é uma grande rola especial"
        })
    } else {
        res.status(200).send({
            id: id,
            jeba: "Isso é uma grande rola"
        })
    }

})

router.patch('/', (req, res, next) => {

    res.status(201).send({
        mensagem: 'Usando patch'
    })
})

router.delete('/', (req, res, next) => {

    res.status(201).send({
        mensagem: 'Usando delete'
    })
})

module.exports = router