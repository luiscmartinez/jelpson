// init server
const server = require('./src/server')(process.env.PORT || 8000).then((res) => res)
