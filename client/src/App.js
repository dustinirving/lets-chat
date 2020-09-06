import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import ProtectedRoute from './utils/ProtectedRoute'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'

const frontend = new SubscriptionClient(
  'ws://lets-chat123.herokuapp.com/graphql',
  {
    reconnect: true
  }
)

const link = new WebSocketLink(frontend)

// const wsLink = new WebSocketLink({
//   uri: 'ws://calm-citadel-25445.herokuapp.comgraphql',
//   options: {
//     reconnect: true
//   }
// })

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

const styles = {
  headerB: {
    fontFamily: "'Heebo', sans-serif"
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive"
  }
}

function App () {
  return (
    <ApolloProvider client={client}>
      <Router style={styles.headerB}>
        <Navbar />
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <ProtectedRoute exact path='/home' component={Home} />
      </Router>
    </ApolloProvider>
  )
}

export default App
