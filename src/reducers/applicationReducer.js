import types from '../actions';

const initialState = {
  app_id: null,
  isLoading: false,
  isSuccess: false,
  errors: null,
};

export default ( state = initialState, action ) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGOUT_SUCCESS:
      return initialState;
    case types.SET_INITIAL_SUCCESS:
      return {
        ...state,
        isSuccess: false,
      };
    case types.PERSONAL_DATA_START:
      return {
        ...state,
        isLoading: true,
        errors   : null,
      };
    case types.PERSONAL_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        app_id   : payload,
      };
    case types.PERSONAL_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        errors   : payload,
      };
    default:
      return state;
  }
}