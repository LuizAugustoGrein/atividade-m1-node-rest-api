'use strict'

const Customer = require('../models/customer')
const repository = require('../repositories/customer-repository')

function customerController() {}

customerController.prototype.post = async (req, res) => {
    try {
        var body = req.body;
        if (body.name && body.birthday) {
            await new repository().create(body)
            res.status(201).send('Registro criado com sucesso!')
        } else {
            res.status(400).send('Erro! parametros necessários.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

customerController.prototype.put = async (req, res) => {
    try {
        await new repository().update(req.params.id, req.body)
        res.status(202).send('Registro atualizado com sucesso!')
    } catch (error) {
        res.status(500).send(error)
    }
}

customerController.prototype.get = async (req, res) => {
    try {
        let resultado = await new repository().getAll()
        const customers = []
        resultado.forEach(doc => {
            const customer = new Customer(
                doc.id,
                doc.data().name,
                doc.data().price,
                doc.data().description
            )
            customers.push(customer)
        })
        if (customers.length == 0) {
            res.status(404).send('Não há registros!')
        } else {
            res.status(200).send(customers)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

customerController.prototype.getById = async (req, res) => {
    try {
        let resultado = await new repository().getById(req.params.id)
        const customer = new Customer(
            resultado.id,
            resultado.data().name,
            resultado.data().price,
            resultado.data().description
        )
        res.status(200).send(customer)
    } catch (error) {
        res.status(500).send(error)
    }
}

customerController.prototype.delete = async (req, res) => {
    try {
        await new repository().delete(req.params.id)
        res.status(204).send()
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = customerController
