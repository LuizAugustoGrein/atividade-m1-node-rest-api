'use strict'

const express = require('express')
const cors = require('cors')
const config = require('./config')
const storeRoutes = require('./routes/store-routes')
const productRoutes = require('./routes/product-routes')
const customerRoutes = require('./routes/customer-routes')
const sellerRoutes = require('./routes/seller-routes')
const orderRoutes = require('./routes/order-routes')

const app = express()

app.use(express.json())

app.use(cors())

app.use('/api/stores', storeRoutes)
app.use('/api/products', productRoutes)
app.use('/api/customers', customerRoutes)
app.use('/api/sellers', sellerRoutes)
app.use('/api/orders', orderRoutes)

app.listen(config.port, () =>
  console.log('API está rodando em http://localhost:' + config.port)
)
