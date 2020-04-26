describe('Initializing Server', () => {
  it('Server running Sanity Check at root, should return statusCode 200', async () => {
    const startServer = await require('./src/server')
    const request = await require('supertest')
    const server = await startServer()
    const res = await request(server).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('msg')
    server.close()
  })
})
