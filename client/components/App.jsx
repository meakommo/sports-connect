import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NavBar from './NavBar'
import Footer from './Footer'
import SideNav from './SideNav'
import Landing from './Landing'
import Login from './auth/Login'
import Signup from './auth/Signup'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <Router>
          <div className="columns is-fullheight">
            <Route exact path='/' component={SideNav} />
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
          </div>
        </Router>
        <Footer />
      </div>
    )
  }
}
