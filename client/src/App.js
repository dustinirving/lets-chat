import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

// import Wrapper from './components/Wrapper'

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
        <Route exact path='/home' component={Home} />
      </Router>
    </ApolloProvider>
  )
}

export default App
