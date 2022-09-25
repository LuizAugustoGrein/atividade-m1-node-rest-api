'use strict'

const Seller = require('../models/seller')
const repository = require('../repositories/seller-repository')
const storeRepository = require('../repositories/store-repository')

function sellerController() {}

sellerController.prototype.post = async (req, res) => {
    try {
        var body = req.body;
        if (body.name && body.store_id) {
            var stores = await new storeRepository().getAll()
            var storeExists = false
            stores.forEach(doc => {
                if (doc.id === body.store_id) {
                    storeExists = true
                }
            })
            if (storeExists) {
                await new repository().create(body)
                res.status(201).send('Registro criado com sucesso!')
            } else {
                res.status(400).send('Erro! loja não existente.')
            }
        } else {
            res.status(400).send('Erro! parametros necessários.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

sellerController.prototype.put = async (req, res) => {
    try {
        var body = req.body
        if (body.store_id) {
            var stores = await new storeRepository().getAll()
            var storeExists = false
            stores.forEach(doc => {
                if (doc.id === body.store_id) {
                    storeExists = true
                }
            })
            if (storeExists) {
                await new repository().update(req.params.id, req.body)
                res.status(202).send('Registro atualizado com sucesso!')
            } else {
                res.status(400).send('Erro! loja não existente.')
            }
        } else {
            await new repository().update(req.params.id, req.body)
            res.status(202).send('Registro atualizado com sucesso!')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

sellerController.prototype.get = async (req, res) => {
    try {
        let resultado = await new repository().getAll()
        const sellers = []
        resultado.forEach(doc => {
            const seller = new Seller(
                doc.id,
                doc.data().name,
                doc.data().phone,
                doc.data().store_id
            )
            sellers.push(seller)
        })
        if (sellers.length == 0) {
            res.status(404).send('Não há registros!')
        } else {
            res.status(200).send(sellers)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

sellerController.prototype.getById = async (req, res) => {
    try {
        let resultado = await new repository().getById(req.params.id)
        const seller = new Seller(
            resultado.id,
            resultado.data().name,
            resultado.data().phone,
            resultado.data().store_id
        )
        res.status(200).send(seller)
    } catch (error) {
        res.status(500).send(error)
    }
}

sellerController.prototype.delete = async (req, res) => {
    try {
        await new repository().delete(req.params.id)
        res.status(204).send()
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = sellerController
