import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { doLogIn } from '../../actions/authActions';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row
} from 'react-bootstrap';
import Loader from 'react-loader-spinner';

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
      <Container
        className='w-100 d-flex justify-content-center align-items-center mb-5'>
        <Card className='border-left-primary shadow bg-white'>
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Form onSubmit={this.onHandleSubmit}>
              <Form.Group as={Row}>
                <Form.Label column sm='4'>Email</Form.Label>
                <Col sm="8">
                  <Form.Control value={this.state.email}
                                onChange={this.onHandleChange} name='email'
                                type='email' />
                  {this.props.errors && this.props.errors.email &&
                  <span
                    className='text-danger small'>{this.props.errors.email}</span>}
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm='4'>Password</Form.Label>
                <Col sm="8">
                  <Form.Control value={this.state.password}
                                onChange={this.onHandleChange} name='password'
                                type='password' />

                  {this.props.errors && this.props.errors.password &&
                  <span
                    className='text-danger small'>{this.props.errors.password}</span>}
                </Col>
              </Form.Group>

              <Row>
                <Col sm={{
                  span  : 1,
                  offset: 4
                }}>
                  {this.props.isLoading ?
                    <Loader type="ThreeDots" color="#670300" height={34}
                            width={75} /> :
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>}
                </Col>
              </Row>
            </Form>
          </Card.Body>
          <Card.Footer>
            Don't have an Account, Click <Link to='/register'>Here</Link> to
            Register
          </Card.Footer>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  errors   : state.auth.errors,
  isLoading: state.auth.isLoading
});

export default connect( mapStateToProps, {doLogIn} )( Login );