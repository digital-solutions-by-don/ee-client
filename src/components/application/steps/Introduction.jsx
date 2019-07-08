import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';
const Introduction = () => {
  return (

      <section className='ee-content-section text-center text-dark'>
        <Container>
          <h3 className='mb-1'>Employment Application</h3>
          <h2 className='mb-2'>Equal Opportunity Employer</h2>
          <div className='col-lg-10 mx-auto'>
            <p className='lead text-justify'>
              <strong className='font-weight-bold text-uppercase'>
                Emergency Electric, Inc
              </strong>{' '}
              is an equal opportunity employer and does not discriminate
              against any applicant or employee based on race, color,
              religion, sex, national origin, disability, age, or military or
              veteran status in accordance with federal law. In addition,{' '}
              <strong className='font-weight-bold text-uppercase'>
                Emergency Electric, Inc
              </strong>{' '}
              complies with applicable state and local laws governing
              non-discrimination in employment in every jurisdiction in which
              it maintains facilities.{' '}
              <strong className='font-weight-bold text-uppercase'>
                Emergency Electric, Inc
              </strong>{' '}
              also provides reasonable accommodation to qualified individuals
              with disabilities in accordance with applicable laws.
            </p>
            <Link className='float-right' to='/dashboard/application/federal-law-requirements'>Continue</Link>
          </div>
        </Container>
      </section>

  )
};

export default Introduction