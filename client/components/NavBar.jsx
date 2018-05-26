import React from 'react'

class NavBar extends React.Component {
  render () {
    return (
      <nav className="navbar is-dark">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="http://via.placeholder.com/112x28" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
        Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/">
          Dropdown
              </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="/">
                placeholder
                </a>
                <a className="navbar-item" href="/">
                placeholder
                </a>
                <a className="navbar-item is-active" href="/">
            placeholder
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-login" href="/login">
                    <span>
                Login
                    </span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-link" href="/signup">
                    <span>Signup</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
