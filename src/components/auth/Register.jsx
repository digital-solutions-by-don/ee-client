import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doCreateAccount } from '../../actions/authActions';
import {
  Button,
  Card,
  Col,
  Form,
  Row,Container
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../imgs/EmergencyElectricLogo.svg';

class Register extends Component {
  state = {
    first_name: '',
    last_name : '',
    email     : '',
    password  : '',
    password2 : '',
  };

  handleChange = e => this.setState( { [e.target.name]: e.target.value } );

  handleSubmit = e => {
    e.preventDefault();
    this.props.doCreateAccount(this.state);
  };

  render() {
    return (
      <Container>
      <Card className='shadow'>
        <Card.Img variant='top' src={Logo} />
        <Card.Header className='text-center'>Register New Account</Card.Header>
        <Card.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type='text' value={this.state.first_name}
                                name='first_name'
                                onChange={this.handleChange} />
                  {this.props.errors && this.props.errors.first_name && <span
                    className='text-danger'>{this.props.errors.first_name}</span>}
                </Col>
                <Col>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type='text' value={this.state.last_name}
                                name='last_name' onChange={this.handleChange} />
                  {this.props.errors && this.props.errors.last_name && <span
                    className='text-danger'>{this.props.errors.last_name}</span>}
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type='email' value={this.state.email} name='email'
                            onChange={this.handleChange} />
              {this.props.errors && this.props.errors.email &&
              <span className='text-danger'>{this.props.errors.email}</span>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' value={this.state.password}
                            name='password' onChange={this.handleChange} />
              {this.props.errors && this.props.errors.password &&
              <span className='text-danger'>{this.props.errors.password}</span>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type='password' value={this.state.password2}
                            name='password2' onChange={this.handleChange} />
              {this.props.errors && this.props.errors.password2 && <span
                className='text-danger'>{this.props.errors.password2}</span>}
            </Form.Group>
            <Button variant="primary" type='submit'>Submit</Button>
          </Form>
        </Card.Body>
        <Card.Footer className='text-center'>
          Already have an account? Click <Link to='/login'>Here</Link> to Login.
        </Card.Footer>
      </Card>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ errors: state.auth.errors });

export default connect( mapStateToProps, { doCreateAccount } )( Register );