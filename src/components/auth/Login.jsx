import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doLogIn } from '../../actions/authActions';
import {
  Button,
  Form,
  Message
} from 'semantic-ui-react';

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
    console.log( this.props );
    return (
      <Form error onSubmit={this.onHandleSubmit}>
        <Form.Input label="Email Address" placeholder="Email Address"
                    name='email' value={this.state.email}
                    onChange={this.onHandleChange} />
        {this.props.errors && this.props.errors.email &&
        <Message error content={this.props.errors.email} />}
        <Form.Input label="Password" type='password' placeholder="password"
                    name='password' value={this.state.password}
                    onChange={this.onHandleChange} />
        {this.props.errors && this.props.errors.password &&
        <Message error content={this.props.errors.password} />}
        <Button>submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({errors: state.auth.errors});

export default connect( mapStateToProps, {doLogIn} )( Login );