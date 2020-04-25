module.exports.handler = new errorHandler()

function errorHandler() {
  this.handleError = async (err) => {
    logger.error(err)
  }
}
