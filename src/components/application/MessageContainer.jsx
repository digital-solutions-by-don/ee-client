import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  deleteMessage,
  fetchAllMessages,
  fetchMessages,
} from '../../actions/messageActions';
import Loader from 'react-loader-spinner';
import {
  Container,
  Table,
} from 'react-bootstrap';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import moment from 'moment';

class MessageContainer extends Component {
  async componentDidMount() {
    if (this.props.isAdmin) {
      await this.props.fetchAllMessages();
    } else {
      await this.props.fetchMessages( this.props.id );
    }
  }

  handleDelete = async id => {
    await this.props.deleteMessage( id );
    !this.props.errors && this.props.isAdmin ? this.props.fetchAllMessages(): this.props.fetchMessages();
  };

  render() {
    const { isLoading, messages } = this.props;
    if (isLoading) {
      return (
        <Container fluid
                   className='d-flex justify-content-center align-items-center w-100 h-100'>
          <Loader

            type="ThreeDots" color='#670300' height={100} width={100} />
        </Container>);
    } else {
      return (
        <Container fluid>
          {messages.length === 0 &&
          <span
            className='d-block text-center lead'>{`No ${this.props.isAdmin ? 'Available' : 'Sent'} Messages At this Time`}</span>}
          <Table responsive striped bordered hover>
            <thead>
            <tr>
              {this.props.isAdmin && <th>User Id</th>}
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {messages.map( ( message, i ) => (
              <tr key={i}>
                {this.props.isAdmin && <td>{message.creator_id}</td>}
                <td>{message.message_subject}</td>
                <td>{message.message_body}</td>
                <td>{moment( message.created_at )
                .fromNow()}</td>
                <td><Link to='/dashboard/messages'
                          onClick={() => this.handleDelete( message.id )}>Delete</Link>
                </td>
              </tr>
            ) )}
            </tbody>
          </Table>
          <hr />
          <Container className='d-flex justify-content-between'>
            <Link to='/dashboard' className='btn btn-primary'>Go Back</Link>
            <Link to='/dashboard/new-message' className='btn btn-primary'>New
              Message</Link>
          </Container>

        </Container>
      );
    }
  }
}

const mapStateToProps = state => ({
  id         : state.auth.user.id,
  isLoading  : state.message.isLoading,
  messages   : state.message.messages,
  messageList: state.message.messageList,
  isAdmin    : state.auth.user.isAdmin,
  errors     : state.message.errors,
});

const actions = {
  fetchMessages,
  fetchAllMessages,
  deleteMessage,
};

MessageContainer = withRouter( MessageContainer );
export default connect( mapStateToProps, actions )( MessageContainer );