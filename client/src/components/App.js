import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/';

import Header from './Header';


const Landing = () => 'Landing page';


class App extends Component {

  componentDidMount() {
    this.props.authUser();
  }

  render() {
    return (
          <div className="container-fluid">
              <Header />
            <BrowserRouter>
            <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/landing" component={Landing} />
            </div>

            </BrowserRouter>
          </div>
    )
  }
}

export default connect(null, actions)(App);