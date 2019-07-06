import types from './';
import ee_Api from '../api/eeApi';

export const doLogIn = credentials => async dispatch => {
  dispatch( { type: types.LOGIN_START } );
  try {
    const response = await ee_Api.post( '/users/login', credentials );
    dispatch( {
      type   : types.LOGIN_SUCCESS,
      payload: response.data,
    } );
  } catch (error) {
    console.log( error );
    dispatch( {
      type   : types.LOGIN_FAIL,
      payload: error.response.data,
    } );
  }
};

export const doCreateAccount = accountInfo => async dispatch => {
  dispatch( { type: types.CREATE_USER_START } );
  try {
    const response = await ee_Api.post( '/users/register', accountInfo );
    dispatch( {
      type   : types.CREATE_USER_SUCCESS,
      payload: response.data,
    } );
  } catch (error) {
    dispatch( {
      type   : types.CREATE_USER_FAIL,
      payload: error.response.data,
    } );
  }
};

export const doLogOut = () => {
  return {
    type: types.LOGOUT_SUCCESS,
  };
};

export const doWelcomeBack = () => {
  return {
    type: types.WELCOME_BACK,
  };
};