'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()

class productRepository {

    constructor () {}

    async create(data) {
        let res = await firestore.collection('products').doc().set(data)
        return res
    }

    async update(id, data) {
        let product = await firestore.collection('products').doc(id)
        let res = await product.update(data)
        return res
    }

    async getAll() {
        let products = await firestore.collection('products');
        let res = await products.get();
        return res.docs
    }

    async getById(id) {
        let product = await firestore.collection('products').doc(id)
        let res = await product.get()
        return res
    }

    async delete(id) {
        return await firestore.collection('products').doc(id).delete()
    }

}

module.exports = productRepository