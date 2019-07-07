import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { doLogOut } from '../actions/authActions';
import LandingPage from './homepage/LandingPage';
import AuthContainer from './auth/AuthContainer';
import Dashboard from './application/Dashboard';
import PrivateRoute from './shared/PrivateRoute';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <PrivateRoute path='/dashboard/new-message' component={Dashboard}/>
          <PrivateRoute path='/dashboard/messages' component={Dashboard} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <Route path='/register' component={AuthContainer} />
          <Route path='/login' component={AuthContainer} />
          <Route path='/' component={LandingPage} />
        </Switch>
      </>
    );
  }
}

export default connect( null, { doLogOut } )( App );