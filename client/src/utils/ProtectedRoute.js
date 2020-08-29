import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'


export const ProtectedRoute = props => {
  const { component: __, ...rest } = props

  const USER_QUERY = gql`
  query user {
    user {
      _id
    }
  }
`
  const { loading, data } = useQuery(USER_QUERY)

  console.log(`😛`)
  console.log(data)
  console.log(`😛`)


  const renderRoute = routeProps => {
    const { component } = props

    if (loading) {
      // loading screen
      return <div>loading...</div>
    }

    if (!data) {
      // user not logged in
      return <Redirect to='/' />
    }
    const Component = component 
    return <Component {...routeProps} />
  }

  return <Route {...rest} render={renderRoute} />
}
