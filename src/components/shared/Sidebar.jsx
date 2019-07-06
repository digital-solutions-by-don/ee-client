import React from 'react';
import {connect} from 'react-redux';
import {doLogOut} from '../../actions/authActions';
import {Link} from 'react-router-dom';
import {
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';

const Sidebar = props => {
  return (
    <Navbar variant='dark'
            className="sidebar sidebar-dark bg-gradient-primary accordion align-items-start d-none d-md-flex">
      <Container fluid className="d-flex flex-column p-0">
        <Navbar.Brand
          className="d-flex justify-content-center align-items-center sidebar-brand m-0">
          <div className="sidebar-brand-text">
            <span>{`${props.first_name} ${props.last_name}`}</span>
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
          <Nav.Item>
            <Link to='/' onClick={props.doLogOut} className='nav-link'>Logout</Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  first_name: state.auth.user.first_name,
  last_name: state.auth.user.last_name
})

export default connect(mapStateToProps, {doLogOut})(Sidebar);