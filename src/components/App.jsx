import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { doLogOut } from '../actions/authActions';
import LandingPage from './homepage/LandingPage';
import MainAppPage from './application/MainAppPage';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path='/register' component={MainAppPage} />
          <Route path='/login' component={MainAppPage} />
          <Route path='/' component={LandingPage} />
        </Switch>
      </>
    );
  }
}

export default connect( null, { doLogOut } )( App );