import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  sendEmploymentData,
  setInitialSuccess,
} from '../../../actions/applicationActions';
import {
  Button,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import DateForm from '../utils/DateForm';

class Employment extends Component {
  state = {
    app_id            : this.props.app_id,
    employer          : '',
    location          : '',
    start_date        : Date.now(),
    end_date          : Date.now(),
    contact           : false,
    reason_for_leaving: '',
    supervisor        : '',
    phone_number      : '',
    still_there       : false,
  };

  componentDidMount() {
    this.props.setInitialSuccess();
  }

  handleChange = e => this.setState( { [e.target.name]: e.target.value } );

  handleCheckChange = e => this.setState( { [e.target.id]: !e.target.checked } );

  handleDateChange = date => this.setState( { start_date: date } );

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleNewEmploymentAddition = () => {
    this.setState( {
      app_id            : this.props.app_id,
      employer          : '',
      location          : '',
      start_date        : Date.now(),
      end_date          : Date.now(),
      contact           : false,
      reason_for_leaving: '',
      supervisor        : '',
      phone_number      : '',
      still_there       : false,
    }, () => this.props.setInitialSuccess() );
  };

  render() {
    return (
      <section className='ee-content-section application text-dark'>
        <Container>
          <div className='text-center'>
            <h3 className='mb-1'>Employment Application</h3>
            <h2 className='mb-2'>Employment Data</h2>
          </div>
          <Row>
            <Col lg={6} className='border-right'>
              <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} md={8}>
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type='text' name='employer'
                                  value={this.state.employer}
                                  onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.employer && <span
                      className='text-danger'>{this.props.errors.employer}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type='text' name='phone_number'
                                  value={this.state.phone_number}
                                  onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.phone_number &&
                    <span
                      className='text-danger'>{this.props.errors.phone_number}</span>}
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>City and State</Form.Label>
                    <Form.Control type='text' name='location'
                                  value={this.state.location}
                                  onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.location && <span
                      className='text-danger'>{this.props.errors.location}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Supervisor Name</Form.Label>
                    <Form.Control type='text' name='supervisor'
                                  value={this.state.supervisor}
                                  onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.supervisor &&
                    <span>{this.props.errors.supervisor}</span>}
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Col md={6}>
                    <DatePicker customInput={<DateForm label='Start Date' />}
                                selected={this.state.start_date}
                                onChange={this.handleDateChange}
                                maxDate={Date.now()} />
                  </Col>
                  <Col md={6}>
                    <DatePicker customInput={<DateForm label='End Date' />}
                                selected={this.state.end_date}
                                onChange={this.handleDateChange}
                                minDate={this.state.start_date}
                                maxDate={Date.now()} />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <span className='mr-2'>Still Employed?</span>
                    <Form.Check custom inline id='still_there' label='Yes'
                                checked={this.state.still_there}
                                onChange={this.handleCheckChange} />
                    <Form.Check custom inline id='still_there' label='No'
                                checked={!this.state.still_there}
                                onChange={this.handleCheckChange} />
                  </Form.Group>
                  <Form.Group as={Col} md={6}>
                    <span className='mr-2'>May we contact?</span>
                    <Form.Check id='contact' label='Yes' custom inline
                                checked={this.state.contact}
                                onChange={this.handleCheckChange} />
                    <Form.Check id='contact' label='No' custom inline
                                checked={!this.state.contact}
                                onChange={this.handleCheckChange} />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={12}>
                    <Form.Label>Reason for Leaving</Form.Label>
                    <Form.Control type='text'
                                  value={this.state.reason_for_leaving}
                                  name='reason_for_leaving'
                                  onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.reason_for_leaving &&
                    <span
                      className='text-danger'>{this.props.errors.reason_for_leaving}</span>}
                  </Form.Group>
                </Form.Row>
                {this.props.isSuccess ?
                  <Button onClick={this.handleNewEmploymentAddition}>Add More
                    Employment</Button> :
                  <Button type='submit'>Submit</Button>}
              </Form>
            </Col>
            <Col lg={6}>
              <h1>Table with Employer and Edit and Delete functionality</h1>
            </Col>
          </Row>
          <hr />
          <div className='d-flex justify-content-between'>
            <Link to='/dashboard/application/personal-data'>Previous</Link>
            {this.props.isSuccess && <span className='lead text-success'>Information successfully added</span>}
            {this.props.isSuccess &&
            <Link to='/dashboard/application/education'>Continue</Link>}
          </div>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  isSuccess: state.application.isSuccess,
  app_id   : state.application.application.id,
  errors   : state.application.errors,
});

const actions = {
  setInitialSuccess,
  sendEmploymentData,
};

export default connect( mapStateToProps, actions )( Employment );