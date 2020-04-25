const port = process.env.PORT || 8000
const server = require('express')()
require('./src/middleware')(server)
require('./src/components')(server)

server.listen(port, (res, req) => {
  console.log(`Computer is listening on port ${port}`)
})
