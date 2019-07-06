import React from 'react';
import {
  Container,
  Navbar, Nav
} from 'react-bootstrap';

const AdminNavigation = () => {
  return (
    <Navbar variant='dark' className='bg-dark mb-4 shadow topbar static-top'>
      <Container fluid>
        <Navbar.Brand className='mr-auto'>Emergency Electric Inc</Navbar.Brand>
        <div className="topbar-divider d-none d-sm-block" />
        <Nav.Item>Profile</Nav.Item>
      </Container>
    </Navbar>
  );
};

export default AdminNavigation;