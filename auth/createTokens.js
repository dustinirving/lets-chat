const { sign } = require('jsonwebtoken')
require('dotenv').config()

const createTokens = user => {
  const accessToken = sign(
    { userId: user.id, email: user.email },
    process.env.ACCESS_TOKEN,
    {
      expiresIn: 30
    }
  )

  const refreshToken = sign(
    { userId: user.id, email: user.email },
    process.env.REFRESH_TOKEN,
    {
      expiresIn: 60 * 24
    }
  )
  return { refreshToken, accessToken }
}

module.exports = createTokens
