const detectPort = require('detect-port')

let port
async function startServer(port = process.env.PORT) {
  port = port || (await detectPort(8888))
  const server = require('express')()
  require('../middleware')(server)
  require('../components')(server)

  return new Promise((resolve) => {
    const promisedServer = server.listen(port, () => {
      console.log(`listtening on port ${port}`)
      const oringialClose = promisedServer.close.bind(promisedServer)
      promisedServer.close = () => {
        return new Promise((resolveClose) => {
          oringialClose(resolveClose)
        })
      }
      resolve(promisedServer)
    })
  })
}

module.exports = startServer
