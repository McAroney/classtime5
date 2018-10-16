import React, { Component } from 'react'
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
      return;
      case false:
      return (
        <a href="/auth/google">Login</a>
      )
      default:
      return (
        <a href="/auth/logout">Log out</a>
      )
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top bg-warning navbar-shadow" >
          <div className="container">
              <div className="navbar-header">
                  <a className="pull-left navbar-brand" href="/">classtime<span className="text-danger">5</span></a>
              </div>
              {this.renderContent()}
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps ({auth}) {
  return {auth};
}

export default connect(mapStateToProps)(Header);
