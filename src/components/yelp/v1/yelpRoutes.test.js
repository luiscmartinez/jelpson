const startServer = require('../../../server')
let server, request
beforeAll(async () => {
  server = await startServer(8080)
  request = require('supertest')
})

afterAll(() => server.close())

describe('Yelp API search endpoint', () => {
  describe('Happy Path', () => {
    it('When endpoint returns successfully, we should only recieve 5 or less businesses', async () => {
      // Arrange
      // Act
      const res = await request(server)
        .get('/api/v1/yelp/search')
        .query({ location: 'sacramento' })
        .set('Authorization', process.env.YELP_API_KEY)
      // Assert
      expect(res.body.businesses.length).toBeLessThanOrEqual(5)
    })
  })
  describe('Missing the location parameter', () => {
    it('When no location is specified, should throw bad request msg and status Code of 400', async () => {
      // Arrange
      // const server = await require('../../../../index')
      // const request = await require('supertest')
      // Act
      const res = await request(server)
        .get('/api/v1/yelp/search')
        .query({ location: '' })
        .set('Authorization', process.env.YELP_API_KEY)
      // Assert
      expect(res.statusCode).toEqual(400)
      expect(res.body).toHaveProperty('msg')
    })
  })
})
