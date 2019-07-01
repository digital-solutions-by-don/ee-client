import types from '../actions';
import jwt_decode from 'jwt-decode';

const initialState = {
  user     : {},
  isLoading: false,
  errors   : null,
  isAuth   : false
};

export default ( state = initialState, action ) => {
  const {type, payload} = action;
  switch (type) {
    case types.LOGIN_START:
      return {
        ...state,
        isLoading: true
      };
    case types.LOGIN_SUCCESS:
      const user = jwt_decode( payload.token );
      return {
        ...state,
        isLoading: false,
        errors   : null,
        isAuth   : true,
        user
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuth   : false,
        user     : {},
        errors   : payload
      };
    case types.CREATE_USER_START:
      return {
        ...state,
        isLoading: true
      };
    case types.CREATE_USER_SUCCESS:
      const newUser = jwt_decode( payload.token );
      return {
        ...state,
        isLoading: false,
        isAuth   : true,
        errors   : null,
        user     : newUser
      };
    case types.CREATE_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuth   : false,
        user     : {},
        errors   : payload
      };
    case types.LOGOUT_SUCCESS:
      return initialState;
    case types.WELCOME_BACK:
      const wbUser = jwt_decode(localStorage.getItem('ee_login_token'));
      return {
        ...state,
        isLoading: false,
        isAuth   : true,
        errors   : null,
        user     : wbUser
      };
    default:
      return state;
  }
};
