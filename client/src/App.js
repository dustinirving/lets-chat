import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import ProtectedRoute from './utils/ProtectedRoute'

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
    <Router style={styles.headerB}>
      <Navbar />
      <Route exact path='/' component={Login} />
      <Route exact path='/register' component={Register} />
      <ProtectedRoute exact path='/home' component={Home} />
    </Router>
  )
}

export default App
