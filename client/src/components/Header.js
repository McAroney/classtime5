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
      <nav className="navbar navbar-fixed-top bg-warning navbar-shadow" >
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="pull-left navbar-brand" href="/">classtime<span className="text-danger">5</span></a>
            </div>

            <ul className="nav">
               <a className="nav-link" href="/dashboard">Clients</a>
               <a className="nav-link" href="/classes">Classes</a>
               <a className="nav-link" href="/schedule">Schedule</a>
            </ul>
            {this.renderContent()}
        </div>
      </nav>
    )
  }
}

function mapStatteToProps ({auth}) {
  return {auth};
}

export default connect(mapStatteToProps)(Header);
