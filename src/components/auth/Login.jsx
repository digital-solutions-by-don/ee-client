import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doLogIn } from '../../actions/authActions';
import { EESections } from '../../styles/ee-style';

class Login extends Component {
  state = {
    email   : '',
    password: ''
  };

  onHandleChange = e => this.setState( {[e.target.name]: e.target.value} );

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.doLogIn( this.state );
  };

  render() {
    return (
      <EESections header>
        <h1>Login</h1>
      </EESections>
    );
  }
}

const mapStateToProps = state => ({errors: state.auth.errors});

export default connect( mapStateToProps, {doLogIn} )( Login );