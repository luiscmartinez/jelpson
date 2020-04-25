const yelpRoutes = require('./yelpRoutes')
module.exports = (server) => {
  server.use('/api/yelp', yelpRoutes)
}
