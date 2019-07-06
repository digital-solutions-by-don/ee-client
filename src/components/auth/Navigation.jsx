import React from 'react';
import {
  Container,
  Navbar,
} from 'react-bootstrap';

const AdminNavigation = () => {
  return (
    <Navbar variant='dark' className='bg-dark mb-4 shadow topbar static-top'>
      <Container className='d-flex justify-content-center'>
        <Navbar.Brand>Emergency Electric Inc</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default AdminNavigation;