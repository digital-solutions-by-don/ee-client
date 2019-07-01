import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch
} from 'react-router-dom';

import Login from './auth/Login';
import { doLogOut } from '../actions/authActions';
import LandingPage from './homepage/LandingPage';
import Navigation from './shared/Navigation';

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={LandingPage} />
        </Switch>
      </>
    );
  }
}

export default connect( null, {doLogOut} )( App );