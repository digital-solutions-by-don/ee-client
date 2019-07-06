import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import Login from './Login';
import Register from './Register';
import jwt_decode from 'jwt-decode';
import { doLogOut, doWelcomeBack } from '../../actions/authActions';

class AuthContainer extends Component {
  async componentDidMount() {
    if (localStorage.getItem('ee_login_token')) {
      console.log('I was called');
      const decoded = jwt_decode(localStorage.getItem('ee_login_token'));
      const currentDate = Date.now() / 1000;
      if (decoded.exp < currentDate) {
        await this.props.doLogOut();
      } else {
        await this.props.doWelcomeBack();
      }
      this.props.isAuth && this.props.history.push('/dashboard');
    }

  }
  render() {
    const {match} = this.props;
    return (
      <Container
        className='d-flex justify-content-center align-items-center vh-100'>
        {match.path === '/login' && <Login />}
        {match.path === '/register' && <Register />}
      </Container>
    );
  }
  ;
}
const mapStateToProps = state => ({ isAuth: state.auth.isAuth });
const actions = {doLogOut, doWelcomeBack}

export default connect( mapStateToProps, actions )( AuthContainer );