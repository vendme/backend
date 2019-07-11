const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
require('dotenv').config()

const authRouter = require('../auth/auth-router.js')
const usersRouter = require('../database/routes/users-router.js')
const vendorRouter = require('../database/routes/vendors-router.js')
const marketRouter = require('../database/routes/markets-router.js')
const stallRouter = require('../database/routes/stalls-router.js')
const productsRouter = require('../database/routes/products-router.js')
const server = express()
const verifyToken = require('../auth/restricted-middleware')

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users', usersRouter)
server.use('/api/vendor', vendorRouter)
server.use('/api/market', marketRouter)
server.use('/api/stalls', stallRouter)
server.use('/api/products', productsRouter)
server.use('/auth', verifyToken, authRouter)
//server.use('/', usersRouter)

server.get('/', (req, res) => {
  res.send('I am the Vendme API/server. Up and running!')
})

module.exports = server
