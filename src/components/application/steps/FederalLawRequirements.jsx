import React from 'react';
import {Container, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const FederalLawRequirements = () => {
  return (
    <section className='ee-content-section text-center text-dark'>
      <Container>
        <h3 className='mb-1'>Employment Application</h3>
        <h2 className='mb-2'>Federal Law Requirements</h2>
        <div className='col-lg-10 mx-auto'>
          <p className='text-justify lead'>
            Federal law requires that employers hire only individuals who
            are authorized to be lawfully employed in the United States. In
            compliance with these laws,{' '}
            <strong className='text-uppercase font-weight-bold'>
              Emergency Electric, Inc
            </strong>{' '}
            will verify the status of every individual offered employment
            with the Company. In this connection, all offers of employment
            are subject to verification of the applicant's identity and
            employment authorization, and it will be necessary for you to
            submit such documents as are required by law to verify your
            identification and employment authorization.{' '}
          </p>
          <div className='d-flex justify-content-between'>
            <Link to='/dashboard/application'>Previous</Link>
            <Link to='/dashboard/application/personal-data'>Continue</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FederalLawRequirements