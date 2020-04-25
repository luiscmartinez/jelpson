const errorHandler = require('./errorHandler')
module.exports = (server) => {
  server.use(async (err, req, res, next) => {
    await errorHandler.handleError(err)
  })
}
