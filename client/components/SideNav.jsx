import React, {Component} from 'react'

class SideNav extends Component {
  render () {
    return (
      <div className="column is-2 is-sidebar-menu is-hidden-mobile">
        <aside className="menu">
          <p className="menu-label">
              List1
          </p>
          <ul className="menu-list">
            <li><a>Title1</a></li>
            <li><a>Title2</a></li>
          </ul>
          <p className="menu-label">
              List2
          </p>
          <ul className="menu-list">
            <li><a>Title1</a></li>
            <li><a>Title2</a></li>
            <li><a>Title3</a></li>
            <li><a>Title4</a></li>
          </ul>
          <p className="menu-label">
              List3
          </p>
          <ul className="menu-list">
            <li><a>Title1</a></li>
            <li><a>Title2</a></li>
            <li><a>Title3</a></li>
          </ul>
        </aside>
      </div>
    )
  }
}

export default SideNav
