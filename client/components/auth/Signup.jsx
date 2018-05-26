import React from 'react'

class Signup extends React.Component {
  render () {
    return (
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-8 is-offset-2">
            <h3 className="title has-text-grey">Sign Up </h3>
            <div className="box">
              <form>
                <div className="field">
                  <div className="control">
                    <input className="input is-large" type="email" placeholder="Your Email" autoFocus=""/>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input is-large" type="first_name" placeholder="First Name"/>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input is-large" type="last_name" placeholder="Last Name"/>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input is-large" type="password" placeholder="password"/>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input is-large" type="password" placeholder="Confirm password"/>
                  </div>
                </div>
                <button className="button is-block is-info is-large is-fullwidth">Sign Up</button>
              </form>
            </div>
            <p className="has-text-grey">
              <a href="/login">LOGIN</a> &nbsp;·&nbsp;
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup
