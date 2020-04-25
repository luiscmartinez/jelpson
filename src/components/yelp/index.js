const yelpRoutes = require('./v1/yelpRoutes')

module.exports = (server) => {
  server.use('/api/v1/yelp', yelpRoutes)
}
