// Definindo a classe Customer
class Customer {
    constructor(
        id, 
        name,
        birthday,
        address,
        phone
    ) {
        this.id = id
        this.name = name
        this.birthday = birthday
        this.address = address
        this.phone = phone
    }
}

module.exports = Customer
