import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NavBar from './NavBar'
import Footer from './Footer'

class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <Footer />
      </div>
    )
  }
}

export default App
