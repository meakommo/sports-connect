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
            <a className="navbar-item" href="#">
        Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/documentation/overview/start/">
          Dropdown
              </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="/documentation/overview/start/">
                placeholder
                </a>
                <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                placeholder
                </a>
                <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
            placeholder
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-login" target="_blank" href="#">
                    <span>
                Login
                    </span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-link" href="#">
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
