import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../store/actions/userActions'

const ProtectedRoute = props => {
  const { component: __, ...rest } = props
  const { component, user, waitingForData, getUser } = props
  const Component = component

  useEffect(() => {
    getUser()
  }, [])

  const renderRoute = routeProps => {
    if (waitingForData) {
      // loading screen
      return <div>loading..</div>
    }

    if (!user) {
      // user not logged in
      return <Redirect to='/' />
    }

    return <Component {...routeProps} />
  }

  return <Route {...rest} render={renderRoute} />
}

const mapStateToProps = state => {
  return {
    user: state.users.user,
    waitingForData: state.users.waitingForData
  }
}

export default connect(mapStateToProps, { getUser })(ProtectedRoute)
