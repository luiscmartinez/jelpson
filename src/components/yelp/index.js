const yelpRoutes = require('./v1/yelpRoutes')

module.exports = (server) => {
  server.get('/', (req, res) => res.status(200).json({ msg: 'I am alive sancity check' }))
  server.use('/api/v1/yelp', yelpRoutes)
}
