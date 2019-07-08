import { combineReducers } from 'redux';
import auth from './authReducer';
import message from './messageReducer';
import users from './usersReducer';
import application from './applicationReducer';

export default combineReducers( {
  auth,
  message,
  users,
  application
} );
