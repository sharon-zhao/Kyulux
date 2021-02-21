import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ListBox from './ListBox'
import Header from './Header'
import Search from './Search'
import Home from './Home'
const App = () => {
  return (
    <div>
      <div>
        <Header/>
        <h1 style= {{ padding: '5px' }}>Welcome to Data World!</h1>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/list" component={ListBox}/>
        </Switch>
      </div>
    </div>
  )
}

export default App
