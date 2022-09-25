// Definindo a classe Order
class Order {
    constructor(
        id, 
        datetime,
        store_id,
        seller_id,
        customer_id,
        items
    ) {
        this.id = id
        this.datetime = datetime,
        this.store_id = store_id,
        this.seller_id = seller_id,
        this.customer_id = customer_id,
        this.items = items
    }
}

module.exports = Order
