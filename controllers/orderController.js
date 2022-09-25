'use strict'

const Order = require('../models/order')
const repository = require('../repositories/order-repository')
const storeRepository = require('../repositories/store-repository')
const sellerRepository = require('../repositories/seller-repository')
const customerRepository = require('../repositories/customer-repository')
const productRepository = require('../repositories/product-repository')

function orderController() {}

orderController.prototype.post = async (req, res) => {
    try {
        var body = req.body;
        if (body.datetime && body.store_id && body.seller_id && body.customer_id && body.items) {
            var stores = await new storeRepository().getAll()
            var storeExists = false
            stores.forEach(doc => { if (doc.id === body.store_id) storeExists = true })
            if (!storeExists) res.status(400).send('Erro! loja não existente.')

            var sellers = await new sellerRepository().getAll()
            var sellerExists = false
            sellers.forEach(doc => { if (doc.id === body.seller_id) sellerExists = true })
            if (!sellerExists) res.status(400).send('Erro! vendedor não existente.')

            var customers = await new customerRepository().getAll()
            var customerExists = false
            customers.forEach(doc => { if (doc.id === body.customer_id) customerExists = true })
            if (!customerExists) res.status(400).send('Erro! cliente não existente.')

            var products = await new productRepository().getAll();
            var productError = false;
            var items = body.items;
            items.forEach(function(item){
                var productsExists = false;
                products.forEach(doc => { if (doc.id === item.product_id) productsExists = true })
                if (!item.price_each || !item.quantity || !productsExists) productError = true
            })

            if (productError) {
                res.status(400).send('Erro! parametros de items incorretos.')
            } else {
                await new repository().create(body)
                res.status(201).send('Registro criado com sucesso!')
            }
        } else {
            res.status(400).send('Erro! parametros necessários.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

orderController.prototype.put = async (req, res) => {
    try {
        var body = req.body;
        if (body.datetime && body.store_id && body.seller_id && body.customer_id && body.items) {
            var stores = await new storeRepository().getAll()
            var storeExists = false
            stores.forEach(doc => { if (doc.id === body.store_id) storeExists = true })
            if (!storeExists) res.status(400).send('Erro! loja não existente.')

            var sellers = await new sellerRepository().getAll()
            var sellerExists = false
            sellers.forEach(doc => { if (doc.id === body.seller_id) sellerExists = true })
            if (!sellerExists) res.status(400).send('Erro! vendedor não existente.')

            var customers = await new customerRepository().getAll()
            var customerExists = false
            customers.forEach(doc => { if (doc.id === body.customer_id) customerExists = true })
            if (!customerExists) res.status(400).send('Erro! cliente não existente.')

            var products = await new productRepository().getAll();
            var productError = false;
            var items = body.items;
            items.forEach(function(item){
                var productsExists = false;
                products.forEach(doc => { if (doc.id === item.product_id) productsExists = true })
                if (!item.price_each || !item.quantity || !productsExists) productError = true
            })

            if (productError) {
                res.status(400).send('Erro! parametros de items incorretos.')
            } else {
                await new repository().update(req.params.id, body)
                res.status(202).send('Registro atualizado com sucesso!')
            }
        } else {
            res.status(400).send('Erro! parametros necessários.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

orderController.prototype.get = async (req, res) => {
    try {
        let resultado = await new repository().getAll()
        const orders = []
        resultado.forEach(doc => {
            const order = new Order(
                doc.id,
                doc.data().datetime,
                doc.data().store_id,
                doc.data().seller_id,
                doc.data().customer_id,
                doc.data().items
            )
            orders.push(order)
        })
        if (orders.length == 0) {
            res.status(404).send('Não há registros!')
        } else {
            res.status(200).send(orders)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

orderController.prototype.getById = async (req, res) => {
    try {
        let resultado = await new repository().getById(req.params.id)
        const order = new Order(
            resultado.id,
            resultado.data().datetime,
            resultado.data().store_id,
            resultado.data().seller_id,
            resultado.data().customer_id,
            resultado.data().items
        )
        res.status(200).send(order)
    } catch (error) {
        res.status(500).send(error)
    }
}

orderController.prototype.delete = async (req, res) => {
    try {
        await new repository().delete(req.params.id)
        res.status(204).send()
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = orderController
