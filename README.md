# atividade-m1-node-rest-api
Atividade Pratica 80% M1 - Tópicos em Desenvolvimento de Sistemas de Informação
Luiz Augusto Grein

**Tecnologies**

- Node.js
- Firebase

**Dependencies**

- Express
- Cors
- Firebase
- Nodemon

# REQUEST EXAMPLES

## STORES

#### GET {HOST}/api/stores
- return all stores

#### GET {HOST}/api/stores/{STORE_ID}
- return an unique store by id

#### POST {HOST}/api/stores
- create a new store based on body

Header 

Content-Type: application/json

Body

```JSON
{
    "name": "filial 1",
    "city": "Mafra",
    "address": "Rua Floriano Peixoto"
}
```

#### PUT {HOST}/api/stores/{STORE_ID}
- update a store by id based on body

Header

Content-Type: application/json

Body

```JSON
{
    "city": "Rio Negro",
}
```

#### DEL {HOST}/api/stores/{STORE_ID}
- delete a store by id



## CUSTOMERS

#### GET {HOST}/api/customers
- return all customers

#### GET {HOST}/api/customers/{CUSTOMER_ID}
- return an unique customer by id

#### POST {HOST}/api/customers
- create a new customer based on body

Header 

Content-Type: application/json

Body

```JSON
{
    "name": "Luiz Augusto",
    "birthday": "2002-08-07",
    "address": "Rua Ramiro Ruthes",
    "phone": "(47)93344-2211"
}
```

#### PUT {HOST}/api/customers/{CUSTOMER_ID}
- update a customer by id based on body
Header

Content-Type: application/json

Body

```JSON
{
    "address": "Outra rua",
    "phone": "(47)93344-2233"
}
```

#### DEL {HOST}/api/customers/{CUSTOMER_ID}
- delete a customer by id



## SELLERS

#### GET {HOST}/api/sellers
- return all sellers

#### GET {HOST}/api/sellers/{SELLER_ID}
- return an unique seller by id

#### POST {HOST}/api/sellers
- create a new seller based on body

Header 

Content-Type: application/json

Body

```JSON
{
    "name": "vendedor 1",
    "phone": "(47)94324-3333",
    "store_id": "8iLY23eyzugdmAxxvSGm"
}
```

#### PUT {HOST}/api/sellers/{SELLER_ID}
- update a seller by id based on body
Header

Content-Type: application/json

Body

```JSON
{
    "store_id": "4lbq01jNi08T1v0xT83K"
}
```

#### DEL {HOST}/api/sellers/{SELLER_ID}
- delete a seller by id



## PRODUCTS

#### GET {HOST}/api/products
- return all products

#### GET {HOST}/api/products/{PRODUCT_ID}
- return an unique product by id

#### POST {HOST}/api/products
- create a new product based on body

Header 

Content-Type: application/json

Body

```JSON
{
    "name": "produto",
    "price": "20.0",
    "description": "descricao do produto"
}
```

#### PUT {HOST}/api/products/{PRODUCT_ID}
- update a product by id based on body
Header

Content-Type: application/json

Body

```JSON
{
    "price": "25"
}
```

#### DEL {HOST}/api/products/{PRODUCT_ID}
- delete a product by id



## ORDERS

#### GET {HOST}/api/orders
- return all orders

#### GET {HOST}/api/orders/{ORDER_ID}
- return an unique order by id

#### POST {HOST}/api/orders
- create a new order based on body

Header 

Content-Type: application/json

Body

```JSON
{
    "datetime": "2022-09-25T13:00:00",
    "store_id": "8iLY23eyzugdmAxxvSGm",
    "seller_id": "nDYkT28aARfBjGs501dh",
    "customer_id": "9DAcsIqjVDwIvU3vPgSa",
    "items": [
        {
            "product_id": "KH8PjvEyCoaE4lSeoTKS",
            "quantity": 4,
            "price_each": 20
        },
        {
            "product_id": "UinkCHQ4r7SYwR6XHIrC",
            "quantity": 2,
            "price_each": 14
        }
    ]
}
```

#### PUT {HOST}/api/orders/{ORDER_ID}
- update an order by id based on body
Header

Content-Type: application/json

Body

```JSON
{
    "items": [
        {
            "product_id": "KH8PjvEyCoaE4lSeoTKS",
            "quantity": 5,
            "price_each": 20
        },
        {
            "product_id": "UinkCHQ4r7SYwR6XHIrC",
            "quantity": 10,
            "price_each": 10
        }
    ]
}
```

#### DEL {HOST}/api/orders/{ORDER_ID}
- delete an order by id
