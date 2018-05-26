import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <div className="columns">
              <div className="column is-4">col 1</div>
              <div className="column is-4">col 2</div>
              <div className="column is-4">col 3</div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
