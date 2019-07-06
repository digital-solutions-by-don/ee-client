import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Image
} from 'react-bootstrap';
import Sidebar from '../shared/Sidebar';
import AdminNavigation from '../auth/Navigation';
import Login from '../auth/Login';
import Logo from '../../imgs/EmergencyElectricLogo.svg';
import Register from '../auth/Register';

const MainAppPage = props => {
  console.log(props);
  return (
    <div id="wrapper">
      {props.isAuth && <Sidebar />}
      <div id="content-wrapper">
        <div id='content'>
          <AdminNavigation />
          <Container
            className='d-flex flex-column justify-content-around align-items-center'>
            {props.match.path === '/login' && <Login />}
            {props.match.path === '/register' && <Register />}
            <Image fluid rounded src={Logo} alt="Emergency Electric Logo"
                   className='' />
          </Container>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({isAuth: state.auth.isAuth});

export default connect( mapStateToProps )( MainAppPage );