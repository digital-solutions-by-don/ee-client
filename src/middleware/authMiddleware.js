import types from '../actions';

export const authMiddleware = state => next => action => {

  if (action.type === types.LOGIN_SUCCESS || action.type === types.CREATE_USER_SUCCESS) {
    localStorage.setItem( 'ee_login_token', action.payload.token );
  }
  if (action.type === types.LOGOUT_SUCCESS) {
    localStorage.removeItem( 'ee_login_token' );
  }
  next( action );
};