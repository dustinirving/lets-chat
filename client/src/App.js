import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'


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

      <Route exact path='/' component={Login} />
      <Route exact path='/home' component={Home} />

    </Router>
  )
}

export default App
