import types from '../actions';

const initialState = {
  users    : [],
  isLoading: false,
  errors   : null,
};

export default ( state = initialState, action ) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGOUT_SUCCESS:
      return initialState;
    case types.GET_ALL_USERS_START:
      return {
        isLoading: true,
        errors   : null,
        users    : [],
      };
    case types.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users    : payload,
      };
    case types.GET_ALL_USERS_FAIL:
      return {
        isLoading: false,
        errors   : payload,
        users    : [],
      };
    default:
      return state;
  }
}