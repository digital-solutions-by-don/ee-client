import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import Login from '../auth/Login';
import Register from '../auth/Register';

const MainAppPage = props => {
  return (
    <Container
      className='d-flex justify-content-center align-items-center vh-100'>
      {props.match.path === '/login' && <Login />}
      {props.match.path === '/register' && <Register />}
    </Container>
  );
};

const mapStateToProps = state => ({ isAuth: state.auth.isAuth });

export default connect( mapStateToProps )( MainAppPage );