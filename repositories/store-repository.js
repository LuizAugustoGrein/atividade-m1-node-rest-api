'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()

class storeRepository {

    constructor () {}

    async create(data) {
        let res = await firestore.collection('stores').doc().set(data)
        return res
    }

    async update(id, data) {
        let store = await firestore.collection('stores').doc(id)
        let res = await store.update(data)
        return res
    }

    async getAll() {
        let stores = await firestore.collection('stores');
        let res = await stores.get();
        return res.docs
    }

    async getById(id) {
        let store = await firestore.collection('stores').doc(id)
        let res = await store.get()
        return res
    }

    async delete(id) {
        return await firestore.collection('stores').doc(id).delete()
    }

}

module.exports = storeRepository