import React, {
  useEffect,
  useState,
} from 'react';
import { connect } from 'react-redux';
import {
  sendPersonalData,
  setSuccess,
} from '../../../actions/applicationActions';
import { Link } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
import { eeApiWithAuth } from '../../../api/eeApiWithAuth';
import { convertDate } from '../utils/convertDate';

const PersonalData = ( { user, isSuccess, isLoading, errors, sendPersonalData, setSuccess } ) => {
  const [error, setError] = useState( null );
  const [state, setState] = useState( {
    user_id         : user.id,
    first_name      : user.first_name,
    middle_name     : '',
    last_name       : user.last_name,
    preferred_name  : '',
    address         : '',
    address2        : '',
    city            : '',
    state           : '',
    zip_code        : '',
    phone_number    : '',
    alt_phone_number: '',
    email           : user.email,
    weekdays        : false,
    weekends        : false,
    evenings        : false,
    nights          : false,
    full_time       : false,
    part_time       : false,
    temporary       : false,
    position        : '',
    start_date      : '',
    referred_by     : '',
    start_pay       : '',
    auth_yes        : false,
    auth_no         : false,
    under_yes       : false,
    under_no        : false,
    permit_yes      : false,
    permit_no       : false,
  } );

  useEffect( () => {
    eeApiWithAuth()
    .get( '/application' )
    .then( res => {
      if (res.data.length !== 0) {
        const { start_date, ...rest } = res.data;
        const appData                 = {
          ...rest,
          start_date: convertDate( start_date ),
        };
        setState( appData );
        setSuccess();
      }
    } )
    .catch( err => setError( err ) );
  }, [] );

  const handleChange      = e => setState( {
    ...state,
    [e.target.name]: e.target.value,
  } );
  const handleCheckChange = e => setState( {
    ...state,
    [e.target.id]: e.target.checked,
  } );

  const handleSubmit = async e => {
    e.preventDefault();
    await sendPersonalData( state );
  };

  return (
    <section className='ee-content-section application text-dark'>
      <Container fluid>
        <Form onSubmit={handleSubmit}>
          <div className='text-center'>
            <h3 className='mb-1'>Employment Application</h3>
            <h2 className='mb-2'>Personal Data</h2>
          </div>
          <Row>
            <Col lg={6} className='border-right'>
              <Form.Row>
                <Form.Group as={Col} md={3}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type='text'
                    value={state.first_name}
                    name='first_name'
                    onChange={handleChange}
                  />
                  {errors && errors.first_name &&
                  <span className='text-danger'>{errors.first_name}</span>}
                </Form.Group>
                <Form.Group as={Col} md={3}>
                  <Form.Label>Middle</Form.Label>
                  <Form.Control
                    type='text'
                    value={state.middle_name}
                    name='middle_name'
                    onChange={handleChange}
                  />
                  {errors && errors.middle_name &&
                  <span className='text-danger'>{errors.middle_name}</span>}
                </Form.Group>
                <Form.Group as={Col} md={3}>
                  <Form.Label>Last</Form.Label>
                  <Form.Control
                    type='text'
                    value={state.last_name}
                    name='last_name'
                    onChange={handleChange}
                  />
                  {errors && errors.last_name &&
                  <span className='text-danger'>{errors.last_name}</span>}
                </Form.Group>
                <Form.Group as={Col} md={3}>
                  <Form.Label>Preferred</Form.Label>
                  <Form.Control
                    type='text'
                    value={state.preferred_name}
                    name='preferred_name'
                    onChange={e => setState( {
                      ...state,
                      [e.target.name]: e.target.value,
                    } )}
                  />
                  {errors && errors.preferred_name &&
                  <span className='text-danger'>{errors.preferred_name}</span>}
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md={6}>
                  <Form.Label>Address</Form.Label>
                  <Form.Control type='text' value={state.address} name='address'
                                onChange={handleChange} />
                  {errors && errors.address &&
                  <span className='text-danger'>{errors.address}</span>}
                </Form.Group>
                <Form.Group as={Col} md={6}>
                  <Form.Label>Apartment, Suite, etc</Form.Label>
                  <Form.Control type='text' value={state.address2}
                                name='address2' onChange={handleChange} />
                  {errors && errors.address2 &&
                  <span className='text-danger'>{errors.address2}</span>}
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md={4}>
                  <Form.Label>City</Form.Label>
                  <Form.Control type='text' value={state.city} name='city'
                                onChange={handleChange} />
                  {errors && errors.city &&
                  <span className='text-danger'>{errors.city}</span>}
                </Form.Group>
                <Form.Group as={Col} md={4}>
                  <Form.Label>State</Form.Label>
                  <Form.Control type='text' value={state.state} name='state'
                                onChange={handleChange} />
                  {errors && errors.state &&
                  <span className='text-danger'>{errors.state}</span>}
                </Form.Group>
                <Form.Group as={Col} md={4}>
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control type='text' value={state.zip_code}
                                name='zip_code' onChange={handleChange} />
                  {errors && errors.zip_code &&
                  <span className='text-danger'>{errors.zip_code}</span>}
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md={4}>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type='text'
                    value={state.phone_number}
                    name='phone_number'
                    onChange={handleChange}
                  />
                  {errors && errors.phone_number &&
                  <span className='text-danger'>{errors.phone_number}</span>}
                </Form.Group>
                <Form.Group as={Col} md={4}>
                  <Form.Label>Alternate Phone Number</Form.Label>
                  <Form.Control
                    type='text'
                    value={state.alt_phone_number}
                    name='alt_phone_number'
                    onChange={handleChange}
                  />
                  {errors && errors.alt_phone_number && <span
                    className='text-danger'>{errors.alt_phone_number}</span>}
                </Form.Group>
                <Form.Group as={Col} md={4}>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type='email' value={state.email} name='email'
                                onChange={handleChange} />
                  {errors && errors.email &&
                  <span className='text-danger'>{errors.email}</span>}
                </Form.Group>
              </Form.Row>
            </Col>
            <Col lg={6}>
              <Form.Row>
                <Form.Group as={Col} md={6}>
                  <Form.Label>Position</Form.Label>
                  <Form.Control type='text' name='position'
                                value={state.position}
                                onChange={handleChange} />
                  {errors && errors.position &&
                  <span className='text-danger'>{errors.position}</span>}
                </Form.Group>
                <Form.Group as={Col} md={6}>
                  <Form.Label>Desired Pay</Form.Label>
                  <Form.Control
                    type='text'
                    name='start_pay'
                    value={state.start_pay}
                    onChange={handleChange}
                  />
                  {errors && errors.start_pay &&
                  <span className='text-danger'>{errors.start_pay}</span>}
                </Form.Group>
              </Form.Row>
              <Form.Row className='mb-3'>
                <Form.Group as={Col} md={6}>
                  <Form.Label>Referral</Form.Label>
                  <Form.Control
                    type='text'
                    name='referred_by'
                    value={state.referred_by}
                    onChange={handleChange}
                  />
                  {errors && errors.referred_by &&
                  <span className='text-danger'>{errors.referred_by}</span>}
                </Form.Group>
                <Form.Group as={Col} md={6}>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control type='date' value={state.start_date}
                                name='start_date' onChange={handleChange} />
                  {errors && errors.start_date &&
                  <span className='text-danger'>{errors.start_date}</span>}
                </Form.Group>
              </Form.Row>
              <Col>
                <span className='mr-2'>Are you interested in?</span>
                <Form.Check
                  custom
                  inline
                  label='Full Time'
                  id='full_time'
                  checked={state.full_time}
                  onChange={handleCheckChange}
                />
                <Form.Check
                  custom
                  inline
                  label='Part Time'
                  id='part_time'
                  checked={state.part_time}
                  onChange={handleCheckChange}
                />
                <Form.Check
                  custom
                  inline
                  label='Temporary'
                  id='temporary'
                  checked={state.temporary}
                  onChange={handleCheckChange}
                />
                {errors && errors.schedule &&
                <span className='text-danger'>{errors.schedule}</span>}
              </Col>
              <Col className='mb-3'>
                <span className='mr-2'>What Schedule would you prefer?</span>
                <Form.Check
                  custom
                  inline
                  label='Weekdays'
                  id='weekdays'
                  checked={state.weekdays}
                  onChange={handleCheckChange}
                />
                <Form.Check
                  custom
                  inline
                  label='Weekends'
                  id='weekends'
                  checked={state.weekends}
                  onChange={handleCheckChange}
                />
                <Form.Check
                  custom
                  inline
                  label='Evenings'
                  id='evenings'
                  checked={state.evenings}
                  onChange={handleCheckChange}
                />
                <Form.Check
                  custom
                  inline
                  label='Nights'
                  id='nights'
                  checked={state.nights}
                  onChange={handleCheckChange}
                />
                {errors && errors.shift &&
                <span className='text-danger'>{errors.shift}</span>}
              </Col>
              <Col>
                <span
                  className='mr-2'>{`Are you authorized to work in the United States?`}</span>
                <Form.Check
                  custom
                  inline
                  label='Yes'
                  id='auth_yes'
                  checked={state.auth_yes}
                  onChange={handleCheckChange}
                />
                <Form.Check
                  custom
                  inline
                  label='No'
                  id='auth_no'
                  checked={state.auth_no}
                  onChange={handleCheckChange}
                />
                {errors && errors.auth &&
                <span className='text-danger'>{errors.auth}</span>}
              </Col>
              <Col>
                <span className='mr-2'>{`Are you under 18?`}</span>
                <Form.Check
                  custom
                  inline
                  label='Yes'
                  id='under_yes'
                  checked={state.under_yes}
                  onChange={handleCheckChange}
                />
                <Form.Check
                  custom
                  inline
                  label='No'
                  id='under_no'
                  checked={state.under_no}
                  onChange={handleCheckChange}
                />
                {errors && errors.under &&
                <span className='text-danger'>{errors.under}</span>}
              </Col>
              <Col>
                <span
                  className='mr-2'>{`If so, can you provide a work permit?  `}</span>
                <Form.Check
                  custom
                  inline
                  label='Yes'
                  id='permit_yes'
                  checked={state.permit_yes}
                  onChange={handleCheckChange}
                />
                <Form.Check
                  custom
                  inline
                  label='No'
                  id='permit_no'
                  checked={state.permit_no}
                  onChange={handleCheckChange}
                />
                {errors && errors.permit &&
                <span className='text-danger'>{errors.permit}</span>}
              </Col>
            </Col>
          </Row>
          {!isSuccess && <Button type='submit'>Submit</Button>}
        </Form>
        <hr />
        <div className='d-flex justify-content-between'>
          <Link
            to='/dashboard/application/federal-law-requirements'>Previous</Link>
          {isSuccess && <span className='lead text-success'>Information successfully added</span>}
          {isSuccess &&
          <Link to='/dashboard/application/employment'>Continue</Link>}
        </div>
      </Container>
    </section>
  );
};

const mapStateToProps = state => ({
  user     : state.auth.user,
  isLoading: state.application.isLoading,
  isSuccess: state.application.isSuccess,
  errors   : state.application.errors,
});

const actions = {
  sendPersonalData,
  setSuccess,
};

export default connect( mapStateToProps, actions )( PersonalData );