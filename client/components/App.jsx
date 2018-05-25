import React from 'react'

import NavBar from './NavBar'
import SideNav from './SideNav'
import Landing from './Landing'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <div className="columns is-fullheight">
          <SideNav />
          <Landing />
        </div>
      </div>
    )
  }
}
