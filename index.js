const port = process.env.PORT || 8000
const server = require('express')()
require('./src/middleware')(server)

server.get('/', async (req, res) => {})

server.listen(port, (res, req) => {
  console.log(`Computer is listening on port http://localhost:${port}`)
})
