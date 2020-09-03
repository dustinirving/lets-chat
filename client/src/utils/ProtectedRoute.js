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
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-success" style={{ width: "3rem", height: "3rem", marginTop: "25%" }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
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
