module.exports.handler = new errorHandler()

const log4js = require('log4js')
const logger = log4js.getLogger()
logger.level = 'debug'

function errorHandler() {
  this.handleError = async (err) => {
    logger.debug(err)
    logger.error(err)
  }
}
