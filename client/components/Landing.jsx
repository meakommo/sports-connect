import React, {Component} from 'react'

class Landing extends Component {
  render () {
    return (
      <div className="column is-main-content">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-11">
            <div className="tile is-parent">
              <article className="tile is-child notification is-danger">
                <p className="title">Wide tile</p>
                <p className="subtitle">Aligned with the right tile</p>
                <div className="content">
                </div>
              </article>
            </div>
            <div className="tile">
              <div className="tile is-parent">
                <img src="http://via.placeholder.com/400x150" />
              </div>
              <div className="tile is-parent">
                <img src="http://via.placeholder.com/400x150" />
              </div>
              <div className="tile is-parent">
                <img src="http://via.placeholder.com/400x150" />
              </div>
              <div className="tile is-parent">
                <img src="http://via.placeholder.com/400x150" />
              </div>
            </div>
            <div className="tile">
              <div className="tile is-parent">
                <img src="http://via.placeholder.com/400x150" />
              </div>
              <div className="tile is-parent">
                <img src="http://via.placeholder.com/400x150" />
              </div>
              <div className="tile is-parent">
                <img src="http://via.placeholder.com/400x150" />
              </div>
              <div className="tile is-parent">
                <img src="http://via.placeholder.com/400x150" />
              </div>
            </div>
            <div className="tile">
              <div className="tile is-parent">
                <img src="http://via.placeholder.com/400x150" />
              </div>
              <div className="tile is-parent">
                <img src="http://via.placeholder.com/400x150" />
              </div>
              <div className="tile is-parent">
                <img src="http://via.placeholder.com/400x150" />
              </div>
              <div className="tile is-parent">
                <img src="http://via.placeholder.com/400x150" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
