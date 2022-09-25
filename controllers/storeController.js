'use strict'

const Store = require('../models/store')
const repository = require('../repositories/store-repository')

function storeController() {}

storeController.prototype.post = async (req, res) => {
    try {
        var body = req.body;
        if (body.name && body.city && body.address) {
            await new repository().create(body)
            res.status(201).send('Registro criado com sucesso!')
        } else {
            res.status(400).send('Erro! parametros necessários.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

storeController.prototype.put = async (req, res) => {
    try {
        await new repository().update(req.params.id, req.body)
        res.status(202).send('Registro atualizado com sucesso!')
    } catch (error) {
        res.status(500).send(error)
    }
}

storeController.prototype.get = async (req, res) => {
    try {
        let resultado = await new repository().getAll()
        const stores = []
        resultado.forEach(doc => {
            const store = new Store(
                doc.id,
                doc.data().name,
                doc.data().city,
                doc.data().address
            )
            stores.push(store)
        })
        if (stores.empty) {
            res.status(404).send('Não há registros!')
        } else {
            res.status(200).send(stores)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

storeController.prototype.getById = async (req, res) => {
    try {
        let resultado = await new repository().getById(req.params.id)
        const store = new Store(
            resultado.id,
            resultado.data().name,
            resultado.data().city,
            resultado.data().address
        )
        res.status(200).send(store)
    } catch (error) {
        res.status(500).send(error)
    }
}

storeController.prototype.delete = async (req, res) => {
    try {
        await new repository().delete(req.params.id)
        res.status(204).send('Registro removido com sucesso!')
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = storeController
