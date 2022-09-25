# atividade-m1-node-rest-api
Atividade Pratica 80% M1 - Tópicos em Desenvolvimento de Sistemas de Informação

**Tecnologies**

- Node.js
- Firebase

**Dependencies**

- Express
- Cors
- Firebase
- Nodemon

**REQUEST EXAMPLES**

## STORES

### GET {HOST}/api/stores
- return all stores

### GET {HOST}/api/stores/{STORE_ID}
- return an unique store by id

### POST {HOST}/api/stores
- create a new store based on body
Header 
    Content-Type: application/json
Body
{
    "name": "filial 1",
    "city": "Mafra",
    "address": "Rua Floriano Peixoto"
}

## PUT {HOST}/api/stores/{STORE_ID}
- update a store by id based on body
Header
    Content-Type: application/json
Body
{
    "city": "Rio Negro",
}

## DEL {HOST}/api/stores/{STORE_ID}
- delete a store by id


## CUSTOMERS

### GET {HOST}/api/customers
- return all customers

### GET {HOST}/api/customers/{CUSTOMER_ID}
- return an unique customer by id

### POST {HOST}/api/customers
- create a new customer based on body
Header 
    Content-Type: application/json
Body
{
    "name": "Luiz Augusto",
    "birthday": "2002-08-07",
    "address": "Rua Ramiro Ruthes",
    "phone": "(47)93344-2211"
}

## PUT {HOST}/api/customers/{CUSTOMER_ID}
- update a customer by id based on body
Header
    Content-Type: application/json
Body
{
    "address": "Outra rua",
    "phone": "(47)93344-2233"
}

## DEL {HOST}/api/customers/{CUSTOMER_ID}
- delete a customer by id


## Orders

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