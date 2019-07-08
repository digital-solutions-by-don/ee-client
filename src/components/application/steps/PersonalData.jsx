import React, { Component } from 'react';
import { connect } from 'react-redux';
import {sendPersonalData} from '../../../actions/applicationActions';
import { Link } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import DateForm from '../utils/DateForm';

import 'react-datepicker/dist/react-datepicker.css';

class PersonalData extends Component {
  state = {
    first_name      : this.props.user.first_name,
    middle_name     : '',
    last_name       : this.props.user.last_name,
    preferred_name  : '',
    address         : '',
    address2        : '',
    city            : '',
    state           : '',
    zip_code        : '',
    phone_number    : '',
    alt_phone_number: '',
    email           : this.props.user.email,
    weekdays        : false,
    weekends        : false,
    evenings        : false,
    nights          : false,
    full_time       : false,
    part_time       : false,
    temporary       : false,
    position        : '',
    start_date      : Date.now(),
    referred_by     : '',
    start_pay       : '',
    auth_yes        : false,
    auth_no         : false,
    under_yes       : false,
    under_no        : false,
    permit_yes      : false,
    permit_no       : false,
  };

  handleChange = e => this.setState( { [e.target.name]: e.target.value } );

  handleCheckChange = e => this.setState( { [e.target.id]: e.target.checked } );

  handleDateChange = date => this.setState( { start_date: date } );

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.sendPersonalData(this.state);
  };

  render() {
    return (
      <section className='ee-content-section application text-dark'>
        <Container fluid>
          <Form onSubmit={this.handleSubmit}>
            <div className='text-center'>
              <h3 className='mb-1'>Employment Application</h3>
              <h2 className='mb-2'>Personal Data</h2>
            </div>
            <Row>
              <Col lg={6}>
                <Form.Row>
                  <Form.Group as={Col} md={3}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='text' value={this.state.first_name}
                                  name="first_name"
                                  onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.first_name && <span
                      className='text-danger'>{this.props.errors.first_name}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={3}>
                    <Form.Label>Middle</Form.Label>
                    <Form.Control type='text' value={this.state.middle_name}
                                  name="middle_name"
                                  onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.middle_name && <span
                      className='text-danger'>{this.props.errors.middle_name}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={3}>
                    <Form.Label>Last</Form.Label>
                    <Form.Control type='text' value={this.state.last_name}
                                  name="last_name"
                                  onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.last_name && <span
                      className='text-danger'>{this.props.errors.last_name}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={3}>
                    <Form.Label>Preferred</Form.Label>
                    <Form.Control type='text' value={this.state.preferred_name}
                                  name="preferred_name"
                                  onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.preferred_name &&
                    <span
                      className='text-danger'>{this.props.errors.preferred_name}</span>}
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type='text' value={this.state.address}
                                  name='address' onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.address && <span
                      className='text-danger'>{this.props.errors.address}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Apartment, Suite, etc</Form.Label>
                    <Form.Control type='text' value={this.state.address2}
                                  name='address2'
                                  onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.address2 && <span
                      className='text-danger'>{this.props.errors.address2}</span>}
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>City</Form.Label>
                    <Form.Control type='text' value={this.state.city}
                                  name='city' onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.city && <span
                      className='text-danger'>{this.props.errors.city}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>State</Form.Label>
                    <Form.Control type='text' value={this.state.state}
                                  name='state' onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.state && <span
                      className='text-danger'>{this.props.errors.state}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type='text' value={this.state.zip_code}
                                  name='zip_code'
                                  onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.zip_code && <span
                      className='text-danger'>{this.props.errors.zip_code}</span>}
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type='text' value={this.state.phone_number}
                                  name='phone_number'
                                  onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.phone_number &&
                    <span
                      className='text-danger'>{this.props.phone_number}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Alternate Phone Number</Form.Label>
                    <Form.Control type='text'
                                  value={this.state.alt_phone_number}
                                  name='alt_phone_number'
                                  onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.alt_phone_number &&
                    <span
                      className='text-danger'>{this.props.alt_phone_number}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' value={this.state.email}
                                  name='email' onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.email &&
                    <span className='text-danger'>{this.props.email}</span>}
                  </Form.Group>
                </Form.Row>
              </Col>
              <Col lg={6}>



                <Form.Row>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Position</Form.Label>
                    <Form.Control type='text' name='position'
                                  value={this.state.position}
                                  onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.position && <span
                      className='text-danger'>{this.props.errors.position}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Desired Pay</Form.Label>
                    <Form.Control type='text' name='start_pay'
                                  value={this.state.start_pay}
                                  onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.start_pay && <span
                      className='text-danger'>{this.props.errors.start_pay}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Referral</Form.Label>
                    <Form.Control type='text' name='referred_by'
                                  value={this.state.referred_by}
                                  onChange={this.handleChange} />
                    {this.props.errors && this.props.errors.referred_by && <span
                      className='text-danger'>{this.props.errors.referred_by}</span>}
                  </Form.Group>
                </Form.Row>
                <Form.Row className='mb-3'>
                  <DatePicker
                    customInput={<DateForm label={`Start Date`} colSize={12} />}
                    selected={this.state.start_date}
                    onChange={this.handleDateChange} minDate={new Date()} />
                  {this.props.errors && this.props.errors.start_date && <span
                    className="text-danger">{this.props.errors.start_date}</span>}
                </Form.Row>
                <Col>
                  <span className='mr-2'>Are you interested in?</span>
                  <Form.Check custom inline label='Full Time' id='full_time'
                              checked={this.state.full_time}
                              onChange={this.handleCheckChange} />
                  <Form.Check custom inline label='Part Time' id='part_time'
                              checked={this.state.part_time}
                              onChange={this.handleCheckChange} />
                  <Form.Check custom inline label='Temporary' id='temporary'
                              checked={this.state.temporary}
                              onChange={this.handleCheckChange} />
                  {this.props.errors && this.props.errors.schedule && <span
                    className='text-danger'>{this.props.errors.schedule}</span>}
                </Col>
                <Col className='mb-3'>
                  <span className='mr-2'>What Schedule would you prefer?</span>
                  <Form.Check custom inline label='Weekdays' id='weekdays'
                              checked={this.state.weekdays}
                              onChange={this.handleCheckChange} />
                  <Form.Check custom inline label='Weekends' id='weekends'
                              checked={this.state.weekends}
                              onChange={this.handleCheckChange} />
                  <Form.Check custom inline label='Evenings' id='evenings'
                              checked={this.state.evenings}
                              onChange={this.handleCheckChange} />
                  <Form.Check custom inline label='Nights' id='nights'
                              checked={this.state.nights}
                              onChange={this.handleCheckChange} />
                  {this.props.errors && this.props.errors.shift && <span
                    className='text-danger'>{this.props.errors.shift}</span>}
                </Col>
                  <Col>
                    <span className='mr-2'>{`Are you authorized to work in the United States?`}</span>
                    <Form.Check custom inline label="Yes" id='auth_yes'
                                checked={this.state.auth_yes}
                                onChange={this.handleCheckChange} />
                    <Form.Check custom inline label="No" id='auth_no'
                                checked={this.state.auth_no}
                                onChange={this.handleCheckChange} />
                    {this.props.errors && this.props.errors.auth && <span
                      className='text-danger'>{this.props.errors.auth}</span>}
                  </Col>
                  <Col>
                    <span className='mr-2'>{`Are you under 18?`}</span>
                    <Form.Check custom inline label="Yes" id='under_yes'
                                checked={this.state.under_yes}
                                onChange={this.handleCheckChange} />
                    <Form.Check custom inline label="No" id='under_no'
                                checked={this.state.under_no}
                                onChange={this.handleCheckChange} />
                    {this.props.errors && this.props.errors.under && <span
                      className='text-danger'>{this.props.errors.under}</span>}
                  </Col>
                  <Col>
                    <span className='mr-2'>{`If so, can you provide a work permit?  `}</span>
                    <Form.Check custom inline label="Yes" id='permit_yes'
                                checked={this.state.permit_yes}
                                onChange={this.handleCheckChange} />
                    <Form.Check custom inline label="No" id='permit_no'
                                checked={this.state.permit_no}
                                onChange={this.handleCheckChange} />
                    {this.props.errors && this.props.errors.permit && <span
                      className='text-danger'>{this.props.errors.permit}</span>}
                  </Col>

              </Col>

            </Row>
            <Button type='submit'>Submit</Button>
          </Form>
          <hr />
          <div className='d-flex justify-content-between'>
            <Link
              to='/dashboard/application/federal-law-requirements'>Previous</Link>
            {this.props.isSuccess && <Link to='/dashboard/application/employment'>Continue</Link>}
          </div>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = state => ({ user: state.auth.user, isLoading: state.application.isLoading, isSuccess: state.application.isSuccess, errors: state.application.errors });
const actions         = {sendPersonalData};
export default connect( mapStateToProps, actions )( PersonalData );