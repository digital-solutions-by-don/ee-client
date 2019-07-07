import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../actions/messageActions';
import {
  Button,
  Card,
  Container,
  Form,
} from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import Logo from '../../imgs/EmergencyElectricLogo.svg';
import {
  Link,
  withRouter,
} from 'react-router-dom';

class NewMessage extends Component {
  state = {
    creator_id     : null,
    message_subject: '',
    message_body   : '',
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.addMessage( this.state );
    !this.props.errors && this.props.history.push( '/dashboard/messages' );
  };

  handleChange = e => {
    this.setState( { [e.target.name]: e.target.value } );
  };

  componentDidMount() {
    this.setState( { creator_id: this.props.creator_id } );
  }

  render() {
    return (
      <Container fluid
                 className='d-flex justify-content-center align-items-center w-100 h-100'>
        <Card>
          <Card.Img src={Logo} variant='top' />
          <Card.Header className='text-center'>Send Us A Message</Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Subject</Form.Label>
                <Form.Control type='text' placeholder='Subject'
                              name='message_subject'
                              value={this.state.message_subject}
                              onChange={this.handleChange} />
                {this.props.errors && this.props.errors.message_subject && <span
                  className="text-danger">{this.props.errors.message_subject}</span>}
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as='textarea' rows={4} name='message_body'
                              value={this.state.message_body}
                              onChange={this.handleChange} />
              </Form.Group>
              {this.props.errors && this.props.errors.message_body && <span
                className='text-danger'>{this.props.errors.message_body}</span>}
              {this.props.isLoading ?
                <Loader type="ThreeDots" color="#670300" height={34}
                        width={75} /> :
                <Button className='mr-1' variant="primary" type="submit">
                  Submit
                </Button>}
              <Link to='/dashboard' className='btn btn-outline-primary'>Go
                Back</Link>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  creator_id: state.auth.user.id,
  isLoading : state.message.isLoading,
  errors    : state.message.errors,
});

NewMessage = withRouter( NewMessage );
export default connect( mapStateToProps, { addMessage } )( NewMessage );