const proxy = require('http-proxy-middleware')

module.exports = app => {
  app.use(proxy('/graphql', { target: 'ws://localhost:4000/', ws: true }))
}
