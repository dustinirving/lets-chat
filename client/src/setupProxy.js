// const proxy = require('http-proxy-middleware')

// module.exports = app => {
//   app.use(proxy('/graphql', { target: 'ws://localhost:4000/', ws: true }))
// }

// const { createProxyMiddleware } = require('http-proxy-middleware')
// module.exports = function (app) {
//   app.use(
//     '/graphql',
//     createProxyMiddleware({
//       target: 'ws://localhost:4000/',
//       ws: true
//     })
//   )
// }

const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(proxy('/graphql', { target: 'http://localhost:4000/graphql' }))
  app.use(proxy('ws://locahost:4000/graphql'))
}
