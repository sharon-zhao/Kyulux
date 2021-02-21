import React from 'react'
// import SignOut from './SignOut'
import { Link } from 'react-router-dom'

const alwaysLinks = (
  <React.Fragment>
    <Link style = {{ padding: '5px' }} to="/">Home</Link>
    <Link style = {{ padding: '5px' }} to="/list">Data-Page</Link>
    <Link to="/search">Search-data</Link>
  </React.Fragment>
)

const Header = () => (
  <nav>
    { alwaysLinks }
  </nav>
)
export default Header
