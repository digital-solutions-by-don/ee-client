import React from 'react';
import {
  Container,
  Nav,
  Navbar
} from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Navbar variant='dark'
            className="sidebar sidebar-dark bg-gradient-primary accordion align-items-start d-none d-md-flex">
      <Container fluid className="d-flex flex-column p-0">
        <Navbar.Brand
          className="d-flex justify-content-center align-items-center sidebar-brand m-0">
          <div className="sidebar-brand-text">
            <span>Donald Whitely</span>
          </div>
        </Navbar.Brand>
        <hr className='sidebar-divider' />
        <Nav className="text-light nav">
          <Nav.Item>
            <Nav.Link href="#">Messages</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Applications</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="text-center d-none d-md-inline">
          <button className='btn rounded-circle border-0'>Toggle</button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Sidebar;