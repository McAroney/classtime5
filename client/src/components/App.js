import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import Header from './Header';

const Dashboard = () => <div className="content-box"><div className="text"><h2>Dashboard</h2></div></div>;
const Landing = () => <div className="content-box"><div className="text"><h2>Landing page hero</h2></div></div>;
const Module1 = () =><div className="content-box"><div className="text"><h2>Module#1</h2></div></div>;
const Module2 = () =><div className="content-box"><div className="text"><h2>Module#2</h2></div></div>;

class App extends Component {

  componentDidMount() {
    this.props.authUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container-fluid">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/classes" component={Module1} />
          <Route exact path="/schedule" component={Module2} />
                        </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);