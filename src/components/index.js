module.exports = (server) => {
  require('./yelp')(server)
  require('./errors')(server)
}
