import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, isAuth, rest}) => {
  if (isAuth) {
    return <Route {...rest} render={props => <Component {...props} />} />
  } else {
    return <Redirect to='/' />
  }
}

const mapStateToProps = state => ({isAuth: state.auth.isAuth});

export default connect(mapStateToProps)(PrivateRoute);