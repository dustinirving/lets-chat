require('dotenv').config()
const http = require('http')
const { ApolloServer, PubSub } = require('apollo-server-express')
const mongoose = require('mongoose')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const express = require('express')
const cookieParser = require('cookie-parser')
const { User } = require('./models')
const { verify } = require('jsonwebtoken')
const createTokens = require('./auth/createTokens')
const PORT = process.env.PORT || 4000
const pubsub = new PubSub()

const app = express()

// mongoose.connect(process.env.MONGODB || 'mongodb://localhost/letsChat', {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
// })
mongoose.connect(
  `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.sk3nj.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
)

app.use(cookieParser())

app.use(async (req, res, next) => {
  const accessToken = req.cookies['access-token']
  const refreshToken = req.cookies['refresh-token']

  if (!refreshToken && !accessToken) return next()

  try {
    const { userId, email } = verify(accessToken, process.env.ACCESS_TOKEN)
    req.user = { userId, email }
    return next()
  } catch {}

  if (!refreshToken) return next()

  let data

  try {
    data = verify(refreshToken, process.env.REFRESH_TOKEN)
  } catch {
    return next()
  }

  const user = await User.findById(data.userId)

  if (!user) return next()

  const tokens = createTokens(user)

  res.cookie('access-token', tokens.accessToken, { maxAge: 1000 * 60 * 30 })
  res.cookie('refresh-token', tokens.refreshToken, {
    maxAge: 1000 * 60 * 60 * 24
  })
  req.user = { userId: data.userId, email: data.email }

  next()
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res, pubsub })
})

server.applyMiddleware({ app })

const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

app.use(express.static('public'))

// app.use((req, res) =>
//   res.sendFile(path.join(__dirname, '/client/build/index.html'))
// )

app.use((req, res) =>
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
)

httpServer.listen(PORT, () => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
  )
})
