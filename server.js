const { ApolloServer } = require("apollo-server-express")
const mongoose = require('mongoose')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const express = require('express')
const cookieParser = require('cookie-parser')
const { User } = require('./models')
const { verify } = require("jsonwebtoken")
const createTokens = require('./auth/createTokens')
const PORT = 4000 || process.env.PORT
require('dotenv').config()


const app = express()


mongoose.connect(process.env.MONGODB || "mongodb://localhost/letsChat", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

app.use(cookieParser())

app.use(async (req, res, next) => {
    const accessToken = req.cookies['access-token']
    const refreshToken = req.cookies['refresh-token']

    if (!refreshToken && !accessToken) return next()

    try {
        const { userId, email } = verify(accessToken, process.env.ACCESS_TOKEN)
        req.user = { userId, email }
        return next()
    } catch { }

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

    res.cookie('access-token', tokens.accessToken, { maxAge: 1000 })
    res.cookie('refresh-token', tokens.refreshToken, { maxAge: 10000 })
    req.user = { userId: data.userId, email: data.email }

    next()
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res })
})

server.applyMiddleware({ app })

app.listen(PORT, () => {
    console.log('Server listening on PORT: ', PORT)
})