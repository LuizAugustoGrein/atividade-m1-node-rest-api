'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()

class sellerRepository {

    constructor () {}

    async create(data) {
        let res = await firestore.collection('sellers').doc().set(data)
        return res
    }

    async update(id, data) {
        let seller = await firestore.collection('sellers').doc(id)
        let res = await seller.update(data)
        return res
    }

    async getAll() {
        let sellers = await firestore.collection('sellers');
        let res = await sellers.get();
        return res.docs
    }

    async getById(id) {
        let seller = await firestore.collection('sellers').doc(id)
        let res = await seller.get()
        return res
    }

    async delete(id) {
        return await firestore.collection('sellers').doc(id).delete()
    }

}

module.exports = sellerRepository