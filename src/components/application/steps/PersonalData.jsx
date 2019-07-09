import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchApplication,
  sendPersonalData,
} from '../../../actions/applicationActions';
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
    application: {
      user_id         : this.props.user.id,
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
    },
  };

  async componentDidMount() {
    const { application } = this.props;
    await this.props.fetchApplication();
    await this.setState( { application } );
  }

  handleChange = e => this.setState( { application: {[e.target.name]: e.target.value }} );

  handleCheckChange = e => this.setState( { application: {[e.target.id]: e.target.checked }} );

  handleDateChange = date => this.setState( { application: {start_date: date }} );

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.sendPersonalData( this.state );
  };

  render() {
    const {application} = this.state;
    const {errors}=this.props;
    return (
      <section className='ee-content-section application text-dark'>
        <Container fluid>
          <Form onSubmit={this.handleSubmit}>
            <div className='text-center'>
              <h3 className='mb-1'>Employment Application</h3>
              <h2 className='mb-2'>Personal Data</h2>
            </div>
            <Row>
              <Col lg={6} className='border-right'>
                <Form.Row>
                  <Form.Group as={Col} md={3}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='text' value={application.first_name}
                                  name="first_name"
                                  onChange={this.handleChange} />
                    {errors && errors.first_name && <span
                      className='text-danger'>{errors.first_name}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={3}>
                    <Form.Label>Middle</Form.Label>
                    <Form.Control type='text' value={application.middle_name}
                                  name="middle_name"
                                  onChange={this.handleChange} />
                    {errors && errors.middle_name && <span
                      className='text-danger'>{errors.middle_name}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={3}>
                    <Form.Label>Last</Form.Label>
                    <Form.Control type='text' value={application.last_name}
                                  name="last_name"
                                  onChange={this.handleChange} />
                    {errors && errors.last_name && <span
                      className='text-danger'>{errors.last_name}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={3}>
                    <Form.Label>Preferred</Form.Label>
                    <Form.Control type='text' value={application.preferred_name}
                                  name="preferred_name"
                                  onChange={this.handleChange} />
                    {errors && errors.preferred_name &&
                    <span
                      className='text-danger'>{errors.preferred_name}</span>}
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type='text' value={application.address}
                                  name='address' onChange={this.handleChange} />
                    {errors && errors.address && <span
                      className='text-danger'>{errors.address}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Apartment, Suite, etc</Form.Label>
                    <Form.Control type='text' value={application.address2}
                                  name='address2'
                                  onChange={this.handleChange} />
                    {errors && errors.address2 && <span
                      className='text-danger'>{errors.address2}</span>}
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>City</Form.Label>
                    <Form.Control type='text' value={application.city}
                                  name='city' onChange={this.handleChange} />
                    {errors && errors.city && <span
                      className='text-danger'>{errors.city}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>State</Form.Label>
                    <Form.Control type='text' value={application.state}
                                  name='state' onChange={this.handleChange} />
                    {errors && errors.state && <span
                      className='text-danger'>{errors.state}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type='text' value={application.zip_code}
                                  name='zip_code'
                                  onChange={this.handleChange} />
                    {errors && errors.zip_code && <span
                      className='text-danger'>{errors.zip_code}</span>}
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type='text' value={application.phone_number}
                                  name='phone_number'
                                  onChange={this.handleChange} />
                    {errors && errors.phone_number &&
                    <span
                      className='text-danger'>{errors.phone_number}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Alternate Phone Number</Form.Label>
                    <Form.Control type='text'
                                  value={application.alt_phone_number}
                                  name='alt_phone_number'
                                  onChange={this.handleChange} />
                    {errors && errors.alt_phone_number &&
                    <span
                      className='text-danger'>{errors.alt_phone_number}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' value={application.email}
                                  name='email' onChange={this.handleChange} />
                    {errors && errors.email &&
                    <span
                      className='text-danger'>{errors.email}</span>}
                  </Form.Group>
                </Form.Row>
              </Col>
              <Col lg={6}>


                <Form.Row>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Position</Form.Label>
                    <Form.Control type='text' name='position'
                                  value={application.position}
                                  onChange={this.handleChange} />
                    {errors && errors.position && <span
                      className='text-danger'>{errors.position}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Desired Pay</Form.Label>
                    <Form.Control type='text' name='start_pay'
                                  value={application.start_pay}
                                  onChange={this.handleChange} />
                    {errors && errors.start_pay && <span
                      className='text-danger'>{errors.start_pay}</span>}
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Referral</Form.Label>
                    <Form.Control type='text' name='referred_by'
                                  value={application.referred_by}
                                  onChange={this.handleChange} />
                    {errors && errors.referred_by && <span
                      className='text-danger'>{errors.referred_by}</span>}
                  </Form.Group>
                </Form.Row>
                <Form.Row className='mb-3'>
                  <DatePicker
                    customInput={<DateForm label={`Start Date`} />}
                    selected={application.start_date}
                    onChange={this.handleDateChange} minDate={new Date()} />
                  {errors && errors.start_date && <span
                    className="text-danger">{errors.start_date}</span>}
                </Form.Row>
                <Col>
                  <span className='mr-2'>Are you interested in?</span>
                  <Form.Check custom inline label='Full Time' id='full_time'
                              checked={application.full_time}
                              onChange={this.handleCheckChange} />
                  <Form.Check custom inline label='Part Time' id='part_time'
                              checked={application.part_time}
                              onChange={this.handleCheckChange} />
                  <Form.Check custom inline label='Temporary' id='temporary'
                              checked={application.temporary}
                              onChange={this.handleCheckChange} />
                  {errors && errors.schedule && <span
                    className='text-danger'>{errors.schedule}</span>}
                </Col>
                <Col className='mb-3'>
                  <span className='mr-2'>What Schedule would you prefer?</span>
                  <Form.Check custom inline label='Weekdays' id='weekdays'
                              checked={application.weekdays}
                              onChange={this.handleCheckChange} />
                  <Form.Check custom inline label='Weekends' id='weekends'
                              checked={application.weekends}
                              onChange={this.handleCheckChange} />
                  <Form.Check custom inline label='Evenings' id='evenings'
                              checked={application.evenings}
                              onChange={this.handleCheckChange} />
                  <Form.Check custom inline label='Nights' id='nights'
                              checked={application.nights}
                              onChange={this.handleCheckChange} />
                  {errors && errors.shift && <span
                    className='text-danger'>{errors.shift}</span>}
                </Col>
                <Col>
                  <span
                    className='mr-2'>{`Are you authorized to work in the United States?`}</span>
                  <Form.Check custom inline label="Yes" id='auth_yes'
                              checked={application.auth_yes}
                              onChange={this.handleCheckChange} />
                  <Form.Check custom inline label="No" id='auth_no'
                              checked={application.auth_no}
                              onChange={this.handleCheckChange} />
                  {errors && errors.auth && <span
                    className='text-danger'>{errors.auth}</span>}
                </Col>
                <Col>
                  <span className='mr-2'>{`Are you under 18?`}</span>
                  <Form.Check custom inline label="Yes" id='under_yes'
                              checked={application.under_yes}
                              onChange={this.handleCheckChange} />
                  <Form.Check custom inline label="No" id='under_no'
                              checked={application.under_no}
                              onChange={this.handleCheckChange} />
                  {errors && errors.under && <span
                    className='text-danger'>{errors.under}</span>}
                </Col>
                <Col>
                  <span
                    className='mr-2'>{`If so, can you provide a work permit?  `}</span>
                  <Form.Check custom inline label="Yes" id='permit_yes'
                              checked={application.permit_yes}
                              onChange={this.handleCheckChange} />
                  <Form.Check custom inline label="No" id='permit_no'
                              checked={application.permit_no}
                              onChange={this.handleCheckChange} />
                  {errors && errors.permit && <span
                    className='text-danger'>{errors.permit}</span>}
                </Col>

              </Col>

            </Row>
            {!this.props.isSuccess && <Button type='submit'>Submit</Button>}
          </Form>
          <hr />
          <div className='d-flex justify-content-between'>
            <Link
              to='/dashboard/application/federal-law-requirements'>Previous</Link>
            {this.props.isSuccess && <span className='lead text-success'>Information successfully added</span>}
            {this.props.isSuccess &&
            <Link to='/dashboard/application/employment'>Continue</Link>}
          </div>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user       : state.auth.user,
  isLoading  : state.application.isLoading,
  isSuccess  : state.application.isSuccess,
  errors     : state.application.errors,
  application: state.application.application,
});
const actions         = {
  sendPersonalData,
  fetchApplication,
};
export default connect( mapStateToProps, actions )( PersonalData );