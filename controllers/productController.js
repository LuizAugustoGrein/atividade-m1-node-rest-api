'use strict'

const Product = require('../models/product')
const repository = require('../repositories/product-repository')

function productController() {}

productController.prototype.post = async (req, res) => {
    try {
        var body = req.body;
        if (body.name && body.price) {
            await new repository().create(body)
            res.status(201).send('Registro criado com sucesso!')
        } else {
            res.status(400).send('Erro! parametros necessários.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

productController.prototype.put = async (req, res) => {
    try {
        await new repository().update(req.params.id, req.body)
        res.status(202).send('Registro atualizado com sucesso!')
    } catch (error) {
        res.status(500).send(error)
    }
}

productController.prototype.get = async (req, res) => {
    try {
        let resultado = await new repository().getAll()
        const products = []
        resultado.forEach(doc => {
            const product = new Product(
                doc.id,
                doc.data().name,
                doc.data().price,
                doc.data().description
            )
            products.push(product)
        })
        if (products.length == 0) {
            res.status(404).send('Não há registros!')
        } else {
            res.status(200).send(products)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

productController.prototype.getById = async (req, res) => {
    try {
        let resultado = await new repository().getById(req.params.id)
        const product = new Product(
            resultado.id,
            resultado.data().name,
            resultado.data().price,
            resultado.data().description
        )
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send(error)
    }
}

productController.prototype.delete = async (req, res) => {
    try {
        await new repository().delete(req.params.id)
        res.status(204).send()
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = productController
