'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()

class orderRepository {

    constructor () {}

    async create(data) {
        let res = await firestore.collection('orders').doc().set(data)
        return res
    }

    async update(id, data) {
        let order = await firestore.collection('orders').doc(id)
        let res = await order.update(data)
        return res
    }

    async getAll() {
        let orders = await firestore.collection('orders');
        let res = await orders.get();
        return res.docs
    }

    async getById(id) {
        let order = await firestore.collection('orders').doc(id)
        let res = await order.get()
        return res
    }

    async delete(id) {
        return await firestore.collection('orders').doc(id).delete()
    }

}

module.exports = orderRepository