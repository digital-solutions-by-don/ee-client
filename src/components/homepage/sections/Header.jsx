import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';
import { EESections } from '../../../styles/ee-style';

const Header = () => {
  return (
    <EESections header className='d-flex' id='page-top'>
      <Container className='text-center my-auto'>
        <h1 className='mb-1 text-primary'>Emergency Electric Inc</h1>
        <h3 className='mb-5 text-primary'>24 Hour Service | Licensed and Insured
          | Residential and Commercial</h3>
        <Scrollchor className='btn btn-info btn-lg mr-4' to='#about'>Find Out
          More</Scrollchor>
        <Link to='/login' className='btn btn-lg btn-success'>Apply Now</Link>
      </Container>
    </EESections>
  );
};

export default Header;