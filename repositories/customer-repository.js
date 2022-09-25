'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()

class customerRepository {

    constructor () {}

    async create(data) {
        let res = await firestore.collection('customers').doc().set(data)
        return res
    }

    async update(id, data) {
        let customer = await firestore.collection('customers').doc(id)
        let res = await customer.update(data)
        return res
    }

    async getAll() {
        let customers = await firestore.collection('customers');
        let res = await customers.get();
        return res.docs
    }

    async getById(id) {
        let customer = await firestore.collection('customers').doc(id)
        let res = await customer.get()
        return res
    }

    async delete(id) {
        return await firestore.collection('customers').doc(id).delete()
    }

}

module.exports = customerRepository