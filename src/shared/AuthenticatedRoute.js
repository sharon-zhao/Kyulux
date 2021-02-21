import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthenticatedRoute = ({ user, render, component: Component, ...rest }) => {
  // if there is a user and a render
  if (user && render) {
    return <Route {...rest} render={render} />
  // if there is a user and a component
  } else if (user) {
    return <Route {...rest} component={Component} />
  // if no user then redirect to the home route
  } else {
    return <Redirect to='/' />
  }
}

export default AuthenticatedRoute
