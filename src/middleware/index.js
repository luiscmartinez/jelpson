const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const logger = require('morgan')

const corsOptions = {
  origin: ['http://localhost:3000'],
}
module.exports = (server) => {
  server.use(express.json())
  server.use(cors(corsOptions))
  server.use(logger('dev'))
  server.use(helmet())
}
