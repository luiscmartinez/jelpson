require('dotenv-safe').config()
const axios = require('axios')
const yelpUrl = 'https://api.yelp.com/v3/businesses'

module.exports = {
  async search(req, res, next) {
    const { location, offset, categories } = req.query
    try {
      axios
        .get(`${yelpUrl}/search`, {
          params: {
            location: location,
            offset: offset || 0,
            limit: 5,
            categories: categories,
          },
          headers: {
            Authorization: process.env.YELP_API_KEY,
          },
        })
        .then((result) => res.json(result.data))
        .catch((err) => next(Error('yelp error', location, offset, catergories)))
    } catch (err) {
      next(err)
    }
  },
}
